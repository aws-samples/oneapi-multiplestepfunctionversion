var aws = require('aws-sdk')
exports.handler = (event, context, callback) => {
    const sfnVer = event.stageVariables.sfnVer;
    const sfnArn = process.env.sfnArn;

  var params = {
    stateMachineArn: sfnArn,
    input: JSON.stringify({})
  };
  var stepfunctions = new aws.StepFunctions()
  stepfunctions.startSyncExecution(params, (err, data) => {
    if (err) {
    console.log(err);
    const response = {
        statusCode: 500,
        body: JSON.stringify({
        message: err
        })
    };
    callback(null, response);
    } else {
    console.log(data);

    const response = {
        statusCode: 200,
        body: JSON.stringify({
        message: data
        })
    };
    callback(null, response);
    }
});
}
