const { get_events } = require("./fbgraph");

const ROUTES = {
	"/api/events": get_events,
};

async function handler(event, context) {
	const path = event.rawPath;
	if (!(path in ROUTES)) {
		console.log(`Route ${path} was not found`);
		return {
			statusCode: 404,
		};
	}
	console.log(`Routing to ${path}`);
	return ROUTES[path](event);
}

module.exports.handler = handler;
