import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { Fn, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';


export class ApiGatewayStageStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const apiVersion = process.env.API_VERSION;
    const sfnVersion = process.env.SFN_VERSION;

    if (!apiVersion) throw ('missing api version');
    if (!Number.isNaN(Number(apiVersion))) throw new Error("invalid api version (number expected)");
    if (!sfnVersion) throw ('missing stepfunction version');
    if (!Number.isNaN(Number(sfnVersion))) throw new Error("invalid stepfunction version (number expected)");
    

    const api = apigw.RestApi.fromRestApiId(this, 'myApi', Fn.importValue('apiId'))

    const deployment = new apigw.Deployment(this, 'myDeployment', { api });
    deployment.applyRemovalPolicy(RemovalPolicy.RETAIN_ON_UPDATE_OR_DELETE);

    const stage = new apigw.Stage(this, `V${apiVersion}`, { deployment, stageName: `V${apiVersion}`, variables: { 'sfnVer': `${sfnVersion}` } });
    stage.applyRemovalPolicy(RemovalPolicy.RETAIN)

  }
}
