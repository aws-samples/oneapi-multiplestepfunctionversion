import { CfnStateMachineVersion, DefinitionBody, LogLevel, StateMachine, StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs'
import { Construct } from 'constructs';
import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';

export class StepFunctionStack extends Stack {

  public stateMachine: StateMachine;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const expressLogGroup = new LogGroup(this, 'MyStepFunctionLogs', {
      retention: RetentionDays.ONE_DAY,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const stateMachine = new StateMachine(this, 'MyStateMachine', {
      definitionBody: DefinitionBody.fromString('{"StartAt":"Pass","States":{"Pass":{"Type":"Pass","Result":"version Alpha","End":true}}}'),
      stateMachineType: StateMachineType.EXPRESS,
      stateMachineName: 'MyDemoStateMachine',
      logs: {
        destination: expressLogGroup,
        level: LogLevel.ALL,
        includeExecutionData: true,
      },
    });

    const stateMachineVersion = new CfnStateMachineVersion(this, 'MyStateMachineVersion', {
      stateMachineArn: stateMachine.stateMachineArn,
      description: 'This is a new StateMachine version'
    });

    this.stateMachine = stateMachine;

  }
}