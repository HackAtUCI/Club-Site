import {
	Architecture,
	Code,
	Function as LambdaFunction,
	FunctionUrlAuthType,
	Runtime,
} from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

interface ClubSiteApiProps {
	environment: {
		[key: string]: string;
	};
}

class ClubSiteApi extends Construct {
	lambdaFunction: LambdaFunction;

	constructor(scope: Construct, id: string, { environment }: ClubSiteApiProps) {
		super(scope, id);
		this.lambdaFunction = new LambdaFunction(this, "ApiLambda", {
			code: Code.fromAsset("../server/"),
			handler: "index.handler",
			runtime: Runtime.NODEJS_16_X,
			architecture: Architecture.ARM_64,
			environment,
			memorySize: 512,
			logRetention: RetentionDays.ONE_MONTH,
		});

		const functionUrl = this.lambdaFunction.addFunctionUrl({
			authType: FunctionUrlAuthType.NONE,
			cors: {
				allowedOrigins: ["https://hack.ics.uci.edu"],
			},
		});
	}
}

export default ClubSiteApi;
