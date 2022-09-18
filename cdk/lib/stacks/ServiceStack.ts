import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

import ClubSiteApi from "../services/ClubSiteApi";

class ServiceStack extends Stack {
	clubSiteApi: ClubSiteApi;

	constructor(scope: Construct, id: string, env?: StackProps) {
		super(scope, id, env);

		this.clubSiteApi = new ClubSiteApi(this, "ClubSiteApi");
	}
}

export default ServiceStack;
