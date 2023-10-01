const express = require("express");

const { getEvents } = require("./gcal");

const app = express();
const port = 5000;

app.get("/api/events", async (req, res) => {
	data = await getEvents();
	res.send(data);
});

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
