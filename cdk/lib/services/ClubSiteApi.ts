import {
	Architecture,
	Code,
	Function as LambdaFunction,
	Runtime,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

class ClubSiteApi extends Construct {
	lambdaFunction: LambdaFunction;

	constructor(scope: Construct, id: string) {
		super(scope, id);
		this.lambdaFunction = new LambdaFunction(this, "ApiLambda", {
			code: Code.fromAsset("../server/"),
			handler: "main",
			runtime: Runtime.NODEJS_16_X,
			architecture: Architecture.ARM_64,
			memorySize: 512,
		});

		const functionUrl = this.lambdaFunction.addFunctionUrl();
	}
}

export default ClubSiteApi;
