import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput, S3Backend } from "cdktf";
import { AwsProvider, ec2 } from "@cdktf/provider-aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "AWS", {
      region: "eu-central-1",
    });

    const instance = new ec2.Instance(this, "compute", {
      ami: "ami-0854da2f8540b70a2",
      instanceType: "t4g.micro",
      keyName: "HashiTalks-DACH",
      tags: {
        Name: "HashiTalks: DACH",
      },
    });

    new TerraformOutput(this, "IP Address", {
      value: instance.publicIp,
    });
  }
}

const app = new App();
const stack = new MyStack(app, "cdktf-example");

new S3Backend(stack, {
  bucket: "hashitalks-dach-cdk-for-terraform",
  key: "cdktf-example",
});

app.synth();
