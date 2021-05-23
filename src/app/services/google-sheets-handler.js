import axios from "axios";

const FEED_URL = "https://spreadsheets.google.com/feeds/cells/";
const SPREADSHEET_KEY = "1DWCOQBlzA3mpa2BXYXPmQrF9_-SpoPFbTdDQuCQ83hU";
const WORKSHEET = "2";
const QUERY = "public/values/";
const CELLS = {
  "members": "R1C2",
};
const FORMAT = "alt=json";

const constructURL = (page) => {
  return (
    FEED_URL +
    SPREADSHEET_KEY +
    "/" +
    WORKSHEET +
    "/" +
    QUERY +
    CELLS[page] +
    "?" +
    FORMAT
  );
};

const extractCell = (data) => data.entry.content.$t;

const getSheetsData = (page) => {
  const dataURL = constructURL(page);
  const request = axios.get(dataURL).then((response) => {
    return JSON.parse(extractCell(response.data));
  });
  request.catch((error) => {
    console.log("Error ocurred while fetching schedule data:", error);
  });
  return request;
};

export default getSheetsData;
