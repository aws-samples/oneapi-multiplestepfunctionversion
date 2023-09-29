import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { CfnOutput, CfnParameter, Fn, Stack, StackProps } from 'aws-cdk-lib';


interface ApiGwStackProps extends StackProps {
  lambdaFunction: lambda.Function;
}

export class ApiGatewayStack extends Stack {
  constructor(scope: Construct, id: string, props: ApiGwStackProps) {
    super(scope, id, props);

    // Then, create the API construct, integrate with lambda
    const api = new apigw.RestApi(this, 'my_api', { deploy: false });
    new CfnOutput(this, 'api', {value: api.restApiId, exportName: 'apiId'});
    const integration = new apigw.LambdaIntegration(props.lambdaFunction);
    
    api.root.addMethod('GET', integration)
  }
}
