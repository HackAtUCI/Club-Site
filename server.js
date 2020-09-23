const axios = require("axios");
const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const {
  DiscordSignup,
  DiscordInvite
} = require('./models.js');


const jsonParser = bodyParser.json();
const app = express();

mongoose.connect(process.env.DB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'prod') {
    if (req.headers.host === 'hack-club-site-production.herokuapp.com') {
      return res.redirect(301, 'https://hack.ics.uci.edu' + req.path);
    }
    if (req.headers['x-forwarded-proto'] !== 'https')
      return res.redirect('https://' + req.headers.host + req.url + req.path);
    else
      return next();
  } else
    return next();
});

app.use(express.static(path.join(__dirname, "build")));

/* ------ Facebook Endpoints  ------ */

app.get("/api/fbgraph", function (req, res) {
  axios
    .get("https://graph.facebook.com/v7.0/me", {
      params: {
        fields: "events{description,end_time,name,start_time,cover}",
        access_token: process.env.FB_PAGE_TOKEN,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch(function (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});

/* ------ Discord Endpoints  ------ */

var authCheck = (req, res, next) => {
  if (req.headers.auth === process.env.HACK_API_SECRET) {
    next();
  } else {
    res.status(403).json({
      message: "Access denied"
    });
  }
}

var handleInsert = (res) => (err, result) => {
  var data = {
    message: 'Unable to insert'
  };
  var status = 400

  if (result && !err) {
    data = {
      result: result,
      message: 'Inserted successfully'
    };
    status = 200
  }

  res.status(status).json(data);
}

var handleFind = (res) => (err, result) => {
  var data = {
    message: "Something went wrong"
  }
  var status = 500

  if (result && !err) {
    data = {
      result: result,
      message: 'Found successfully'
    };
    status = 200
  }

  res.status(status).json(data)
}

var handleUpdate = (res) => (err, result) => {
  var data = {
    message: 'Unable to update'
  };
  var status = 400

  if (result && result.nModified > 0 && !err) {
    data = {
      result: result,
      message: 'Updated successfully'
    };
    status = 200
  }

  res.status(status).json(data);
}

var handleDelete = (res) => (err, result) => {
  var data = data = {
    message: 'Unable to delete'
  };
  var status = 400;

  if (result && result.deletedCount > 0 && !err) {
    data = {
      result: result,
      message: 'Deleted successfully'
    };
    status = 200;
  }

  res.status(status).json(data);
}

app.post("/api/discord/signups", jsonParser, function (req, res) {
  try {
    var newSignup = new DiscordSignup(req.body);
  } catch (err) {
    res.json(err);
    return err;
  }
  newSignup.save(handleInsert(res));
});

app.get("/api/discord/signups", authCheck, function (req, res) {
  DiscordSignup.find(handleFind(res));
});

app.delete("/api/discord/signups", authCheck, function (req, res) {
  DiscordSignup.deleteMany({
    email: {
      $in: req.query.emails
    }
  }, handleDelete(res));
})

app.post("/api/discord/invites", authCheck, jsonParser, function (req, res) {

  if (req.body.invites === undefined || req.body.invites <= 0) {
    res.json({
      message: "No invites provided"
    });
  }

  req.body.invites.forEach(invite => {
    try {
      var newInvite = new DiscordInvite({
        ...invite,
        inviteUsed: false
      });
    } catch (err) {
      res.json(err);
      return err;
    }
    newInvite.save(handleInsert(res));
  });
});

app.patch("/api/discord/invites", authCheck, jsonParser, function (req, res) {
  DiscordInvite.updateMany({
    inviteUrl: {
      $in: req.query.inviteUrls
    }
  }, req.body, handleUpdate(res));
});

app.get("/api/discord/invites", authCheck, function (req, res) {
  DiscordInvite.find(
    req.query.inviteUrls ? {
      inviteUrl: {
        $in: req.query.inviteUrls
      }
    } : {},
    handleFind(res));
});

app.delete("/api/discord/invites", authCheck, function (req, res) {
  DiscordInvite.deleteMany({
    inviteUrl: {
      $in: req.query.inviteUrls
    }
  }, handleDelete(res))
})

/* ------ React Build Endpoints ------ */

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);