import axios from "axios";

const FEED_URL = "https://docs.google.com/spreadsheets/d/";
const SPREADSHEET_KEY = "1DWCOQBlzA3mpa2BXYXPmQrF9_-SpoPFbTdDQuCQ83hU";
const QUERY = "pub";
const FORMAT = "output=tsv";

const dataURL = FEED_URL + SPREADSHEET_KEY + "/" + QUERY + "?" + FORMAT;

const getSheetsData = (page) => {
  const request = axios.get(dataURL).then((response) => {
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
