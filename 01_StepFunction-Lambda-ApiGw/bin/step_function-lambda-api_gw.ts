#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StepFunctionStack } from '../lib/stepfunction-stack';
import { LambdaStack } from '../lib/lambda-stack';
import { ApiGatewayStack } from '../lib/apigw-stack';

const app = new cdk.App();
const myStepFunctionStack = new StepFunctionStack(app, 'StepFunctionStack', {
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  // env: { account: '123456789012', region: 'us-east-1' },
});
const myLambdaStack = new LambdaStack(app, 'LambdaStack', {
  stateMachine: myStepFunctionStack.stateMachine,
});
const myApiGatewayStack = new ApiGatewayStack(app, 'ApiGatewayStack', {
  lambdaFunction: myLambdaStack.lambdaFunction,
});