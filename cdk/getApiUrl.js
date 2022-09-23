// Prints the Lambda Function URL of the Club Site API Lambda
// This is used as an environment variable when building the React client
const cdk_out = require("./cdk.out.json");
console.log(cdk_out["HackClubSite-ServiceStack"].ClubSiteApiFunctionUrl);
