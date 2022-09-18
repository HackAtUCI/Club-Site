import { App } from "aws-cdk-lib";

import ServiceStack from "./stacks/ServiceStack";

const app = new App();

const serviceStack = new ServiceStack(app, "HackClubSite-ServiceStack", {
	env: { region: "us-west-2" },
});
