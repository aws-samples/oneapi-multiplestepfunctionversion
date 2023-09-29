# 01_StepFunction-Lambda-ApiGw

## Usage

To deploy the 01_StepFunction-Lambda-ApiGw CDK stackfollow the steps below:

### Steps
1.	Clone the code repository by running the command:
```
git clone git@ssh.gitlab.aws.dev:global-specialist-sa/migration-team/api-gw-sfn-version.git
```
2.	Go to the subfolder [01_StepFunction-Lambda-ApiGw](./01_StepFunction-Lambda-ApiGw)
3.	Install the dependencies running the command:
```
npm install
```
4.	If this is the first run of CDK on the account, run the command:
```
cdk bootstrap
```
5.	Deploy the StepFunction-Lambda-ApiGw  stack running the command:
```
cdk deploy –all
```
### Validation

Once the stack is deployed, you can check in the console for the outcome:
- [CloudFormation](https://console.aws.amazon.com/cloudformation): go to CloudFormation console->Stack. Expect to see ApiGatewayStack, LambdaStack & StepFunctionStack.
- [Step Function](https://console.aws.amazon.com/states): go to Step Functions console->State Machines. Expect to see MyDemoStateMachine Step Function.
- [Lambda](https://console.aws.amazon.com/lambda): go to Lambda console->Functions. Expect to see LambdaStack-myLambdaHandler12345678-1234567890AB function (in your environment 12345678-1234567890AB will be different).
- [API Gateway](https://console.aws.amazon.com/apigateway): go to API Gateway console->APIs. Expect to see my_api API.

### Cleaning up

To avoid incurring future charges, delete the resources following the steps below:
1.	Go to the folder you cloned the code
4.	Go to the [01_StepFunction-Lambda-ApiGw](./01_StepFunction-Lambda-ApiGw)
5.	Destroy the stack running the command:
```
cdk destroy --all
```

## Security

See [CONTRIBUTING](./CONTRIBUTING.md#security-issue-notifications) for more information.

## Code of Conduct

See [CODE OF CONDUCT](./CODE_OF_CONDUCT.md) for more information.

## License

This library is licensed under the MIT-0 License. See the [LICENSE](./LICENSE) file.