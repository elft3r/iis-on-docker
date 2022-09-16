import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";
import { Container, Image, DockerProvider } from "@cdktf/provider-docker";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DockerProvider(this, "docker", {});

    const port = new TerraformVariable(this, "port", {
      type: "number",
      default: 8000,
      description: "The external port for the container",
    });

    const dockerImage = new Image(this, "nginxImage", {
      name: "nginx:latest",
      keepLocally: false,
    });

    const container = new Container(this, "nginxContainer", {
      name: name,
      image: dockerImage.latest,
      ports: [
        {
          internal: 80,
          external: port.value,
        },
      ],
    });

    new TerraformOutput(this, "container_id", {
      value: container.id,
    });
  }
}

const app = new App();
new MyStack(app, "learn-cdktf-docker");
new MyStack(app, "learn-cdktf-docker-2");

app.synth();
