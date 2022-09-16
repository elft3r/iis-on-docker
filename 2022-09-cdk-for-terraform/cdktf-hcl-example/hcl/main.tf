terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.21.0"
    }
  }
}

module "learn_cdktf" {
  source = "./modules/learn-cdktf-docker"
}

output "name" {
  value = module.learn_cdktf.container_id
}

module "learn_cdktf_2" {
  source = "./modules/learn-cdktf-docker-2"

  port = 8080
}

output "name_2" {
  value = module.learn_cdktf_2.container_id
}
