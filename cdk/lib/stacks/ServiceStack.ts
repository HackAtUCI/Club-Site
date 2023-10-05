import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

import ClubSiteApi from "../services/ClubSiteApi";

class ServiceStack extends Stack {
	clubSiteApi: ClubSiteApi;

	constructor(scope: Construct, id: string, env?: StackProps) {
		super(scope, id, env);

		const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
		if (!FB_PAGE_TOKEN) {
			throw Error("Environment variable FB_PAGE_TOKEN is not defined");
		}
		const environment = {
			FB_PAGE_TOKEN,
		};
		this.clubSiteApi = new ClubSiteApi(this, "ClubSiteApi", { environment });

		const functionUrlOutput = new CfnOutput(this, "ClubSiteApiFunctionUrl", {
			value: this.clubSiteApi.functionUrl.url,
		});
	}
}

export default ServiceStack;
