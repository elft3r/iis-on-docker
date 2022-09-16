# CDK Example

This CDK app deploy's a EC2 instance that can be accessed via SSH.

## Steps

1. Create a **Key Pair** with the name `HashiTalks-DACH` and place the private
   key in this folder.

   **NOTE:** You need to change the permission of the file `chmod 400 HashiTalks-DACH.pem`

1. Install the dependencies: `npm install`
1. Deploy the infrastructure: `cdk deploy`
1. Connect to the EC2 instance with the provided ssh command.
1. Cleanup: `cdk destroy`
