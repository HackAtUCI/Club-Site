const axios = require("axios");

const GRAPH_URL = "https://graph.facebook.com/v15.0/me";

async function get_events() {
	const graph_res = await axios.get(GRAPH_URL, {
		params: {
			fields: "events{description,end_time,name,start_time,cover}",
			access_token: process.env.FB_PAGE_TOKEN,
		},
	});
	const data = graph_res.data.events.data;
	console.log(`Fetched ${data.length} events from Facebook Graph API`);
	return data;
}

module.exports = { get_events };
