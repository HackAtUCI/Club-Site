const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const axios = require("axios");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/fbgraph", function (req, res) {
  console.log("got request");
  try {
    axios
      .get("https://graph.facebook.com/v7.0/me", {
        params: {
          fields: "events{description,end_time,name,start_time,cover}",
          access_token: process.env.FB_PAGE_TOKEN,
        },
      })
      .then((response) => {
        res.json(response.data);
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(process.env.PORT || 8080);
