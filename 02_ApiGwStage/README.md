# 02_ApiGwStage

## Usage

To deploy the 02_ApiGwStage CDK stackfollow the steps below:

### Steps
1.	Go to the folder you cloned the code
2.	Go to the subfolder 02_ApiGwStage
3.	Install the dependencies running the command:
```
npm install
```
4.	Set the environment variable API_VERSION to a numeric value (for example 1)running the command:
For *NIX
```
export API_VERSION=1
```
For WIN
```
set API_VERSION=1
```
5.	Set the environment variable SFN_VERSION to a numeric value (for example 1) running the command:
For *NIX
```
export SFN_VERSION=1
```
For WIN
```
set SFN_VERSION=1
```
6.	Deploy the stack running the command:
```
cdk deploy
```

### Validation

Once the stack is deployed, you can check in the console for the outcome:
- [API Gateway](https://console.aws.amazon.com/apigateway): go to API Gateway console->Stages. Expect to see V1 stage (created before) and V2 stage (created now).
- Click on V1 and then click on invoke URL to see the results. Expect to see “version Alpha”
- Click on V2 and then click on invoke URL to see the results. Expect to see “version Beta”

### Cleaning up

To avoid incurring future charges, delete the resources following the steps below:
1.	Go to the folder you cloned the code
2.	Go to the subfolder [02_ApiGwStage](./02_ApiGwStage)
3.	Destroy the stack running the command:
```
cdk destroy 
```
4. Because the actual resources are created with a Retain  Policy, go to API Gateway->Stages and delete every stage you previously created

## Security

See [CONTRIBUTING](./CONTRIBUTING.md#security-issue-notifications) for more information.

## Code of Conduct

See [CODE OF CONDUCT](./CODE_OF_CONDUCT.md) for more information.

## License

This library is licensed under the MIT-0 License. See the [LICENSE](./LICENSE) file.