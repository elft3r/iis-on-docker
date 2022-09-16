# CDK for Terraform and HCL Interoperability

CDK for Terraform offers you the possibility to use it in existing Terraform
Projects. You can find more information in the [HCL Interoperability
documentation](https://www.terraform.io/cdktf/concepts/hcl-interoperability).

In this example we create a Terraform module written with CDK for Terraform. To
show this, we create a Docker Container locally. So make sure you have [Docker
Desktop](https://www.docker.com/products/docker-desktop/) running.

## Steps to deploy one module

1. Switch to the [cdktf](./cdktf/) directory: `cd cdktf`
1. Install the dependencies: `npm install`
1. Synthesize the Terraform code: `cdktf synth`
1. Move the modules over to the [hcl](./hcl/) directory: `cp -rf cdktf.out/stacks/* ../hcl/modules `
1. Switch to the [hcl](./hcl/) directory: `cd ../hcl`
1. Prepare the working directory: `terraform init`
1. Deploy the infrastructure: `terraform apply`
1. Check the deployment: `docker container ls`
1. Destroy the infrastructure: `terraform destroy`

## Steps to deploy two modules

1. Switch to the [cdktf](./cdktf/) directory: `cd cdktf`
1. Install the dependencies: `npm install`
1. Edit the [main.ts](./cdktf/main.ts#L40) file and add the following line:

   `new MyStack(app, "learn-cdktf-docker-2");`

1. Synthesize the Terraform code: `cdktf synth`
1. Move the modules over to the [hcl](./hcl/) directory: `cp -rf cdktf.out/stacks/* ../hcl/modules `
1. Switch to the [hcl](./hcl/) directory: `cd ../hcl`
1. Edit the [main.tf](./hcl/main.tf) file and add the following lines at the
   end:

   ```
   module "learn_cdktf_2" {
     source = "./modules/learn-cdktf-docker-2"

     port = 8080
   }

   output "name_2" {
     value = module.learn_cdktf_2.container_id
   }
   ```

1. Prepare the working directory: `terraform init`
1. Deploy the infrastructure: `terraform apply`
1. Check the deployment: `docker container ls`
1. Destroy the infrastructure: `terraform destroy`
