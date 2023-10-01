import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

import ClubSiteApi from "../services/ClubSiteApi";

class ServiceStack extends Stack {
	clubSiteApi: ClubSiteApi;

	constructor(scope: Construct, id: string, env?: StackProps) {
		super(scope, id, env);

		const environment = {};
		this.clubSiteApi = new ClubSiteApi(this, "ClubSiteApi", { environment });

		const functionUrlOutput = new CfnOutput(this, "ClubSiteApiFunctionUrl", {
			value: this.clubSiteApi.functionUrl.url,
		});
	}
}

export default ServiceStack;
