#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiGatewayStageStack } from '../lib/apigwstage-stack';

const app = new cdk.App();
new ApiGatewayStageStack(app, 'ApiGwStageStack', {
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  // env: { account: '123456789012', region: 'us-east-1' },
});