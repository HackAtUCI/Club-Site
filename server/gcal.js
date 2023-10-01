const ical = require("node-ical");

const CALENDAR_ADDRESS =
	"c_feec5036db7df3d090c15c20d6d5a8d546b6d52d5825025e4d3cc3a04f818046%40group.calendar.google.com";
const CALENDAR_URL = `https://calendar.google.com/calendar/ical/${CALENDAR_ADDRESS}/public/basic.ics`;

const EVENT_PROPERTIES = [
	"type",
	"datetype",
	"start",
	"end",
	"description",
	"location",
	"summary",
	"attach",
];

function processEvent(raw) {
	const event = Object.fromEntries(
		EVENT_PROPERTIES.map((property) => [property, raw[property]])
	);

	if (event.attach) {
		if (!Array.isArray(event.attach)) {
			event.attach = [event.attach];
		}
		for (const attachment of event.attach) {
			const url = new URL(attachment.val);
			if (url.hostname === "drive.google.com") {
				const driveFileId = url.pathname.slice(
					"/file/d/".length,
					-"/view".length
				);
				const downloadURL = new URL("https://drive.google.com/uc");
				downloadURL.searchParams.append("export", "download");
				downloadURL.searchParams.append("id", driveFileId);
				attachment.val = downloadURL;
			}
		}
	}

	event.id = raw.uid;

	return event;
}

async function getEvents() {
	const calendar = await ical.async.fromURL(CALENDAR_URL);
	delete calendar.vcalendar;

	const allEvents = Object.values(calendar).map(processEvent);

	const today = new Date();
	const T_15_MONTHS = 1000 * 60 * 60 * 24 * 30 * 15;
	events = allEvents
		.filter((event) => today - event.start <= T_15_MONTHS)
		.sort((a, b) => b.start - a.start);

	console.log(`Retrieved ${events.length} events from Google Calendar.`);
	return events;
}

module.exports = { getEvents };
