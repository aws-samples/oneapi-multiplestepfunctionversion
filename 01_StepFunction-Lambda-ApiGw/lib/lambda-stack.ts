import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import { ManagedPolicy, ServicePrincipal } from 'aws-cdk-lib/aws-iam';

interface LambdaStackProps extends StackProps {
  stateMachine: sfn.StateMachine;
}
export class LambdaStack extends Stack {

  public lambdaFunction: lambda.Function;

  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    const lambdaFunction = new lambda.Function(this, 'myLambdaHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,  // execution environment
      code: lambda.Code.fromAsset('src'),   // code loaded from "src" directory
      handler: 'my-lambda.handler',          // file is "mylambda", function is "handler"
      environment: {
        'sfnArn': props.stateMachine.stateMachineArn,
      },
    });
    lambdaFunction.role?.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName("AWSStepFunctionsFullAccess"));
    lambdaFunction.grantInvoke(new ServicePrincipal('apigateway.amazonaws.com'));

    this.lambdaFunction = lambdaFunction;

  }

}