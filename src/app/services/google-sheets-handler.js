import axios from "axios";

const FEED_URL = "https://docs.google.com/spreadsheets/d/";
const SPREADSHEET_KEY = "1DWCOQBlzA3mpa2BXYXPmQrF9_-SpoPFbTdDQuCQ83hU";
const QUERY = "pub";
const FORMAT = "output=tsv";

const dataURL = FEED_URL + SPREADSHEET_KEY + "/" + QUERY + "?" + FORMAT;

// with the current public implementation, the entire sheet must be fetched
// the page specifies the row of data to select
const getSheetsData = (page) => {
  const request = axios.get(dataURL).then((response) => {
    // find the line of data matching the desired page
    for (const line of response.data.split("\n")) {
      const [key, value] = line.split("\t");
      if (key === page) {
        return JSON.parse(value);
      }
    }
  });

  request.catch((error) => {
    console.warn("Error ocurred while fetching schedule data:", error);
  });

  return request;
};

export default getSheetsData;
