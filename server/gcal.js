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

function processEvent(event) {
	const filtered = Object.fromEntries(
		EVENT_PROPERTIES.map((property) => [property, event[property]])
	);

	if (filtered.attach) {
		if (!Array.isArray(filtered.attach)) {
			filtered.attach = [filtered.attach];
		}
		for (const attachment of filtered.attach) {
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

	filtered.id = event.uid;

	return filtered;
}

async function getEvents() {
	const events = await ical.async.fromURL(CALENDAR_URL);
	delete events.vcalendar;

	return Object.entries(events).map(([uid, event]) => processEvent(event));
}

module.exports = { getEvents };
