# How to get started with IIS on Docker

I wrote a blog post and recorded YouTube Videos to explain, how you can get
started with IIS on Docker. IIS is the Internet Information Services for Windows
Server. You can find more information about it [here](https://www.iis.net).

These are the links to the blog and videos:

- [:page_facing_up: How to get started with IIS on Docker](https://blog.56k.cloud/how-to-get-started-with-iis-on-docker/)
- [:tv: :us: Getting started with IIS on Docker](https://youtu.be/z726_zDvMLk)
- [:tv: :de: Erste Schritte mit IIS auf Docker](https://youtu.be/a92xI0dT3dM)

## Content

There are two main resources in this repository:

- [`Dockerfile`](Dockerfile)

  The instructions to build the image

- [`wwwroot`](./wwwroot/)

  The content of the website

## Additional Information

I didn’t cover how to get started with Docker on Windows in this post. You can
find more information about that in the official documentation:

- [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Install Docker on Windows Server](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/deploy-containers-on-server)

For more information about IIS on Docker, you can head over to the following links:

- IIS Container Images on [Docker Hub](https://hub.docker.com/_/microsoft-windows-servercore-iis)
- IIS Docker Images on [GitHub Repo](https://github.com/microsoft/iis-docker)
