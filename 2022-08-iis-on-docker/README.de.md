# Erste Schritte mit IIS auf Docker

:us: [English](./README.md)

Ich habe einen Blogbeitrag geschrieben und YouTube-Videos aufgenommen, wo ich
die ersten Schritte mit ISS auf Docker erkläre. IIS ist der
Internet-Informationsdienst für Windows Server. Weitere Informationen dazu
findest du [hier](https://www.iis.net).

Hier sind die Links zu dem Blogeintrag und den Videos:

- [:page_facing_up: :us: How to get started with IIS on Docker](https://blog.56k.cloud/how-to-get-started-with-iis-on-docker/)
- [:tv: :us: Getting started with IIS on Docker](https://youtu.be/z726_zDvMLk)
- [:tv: :de: Erste Schritte mit IIS auf Docker](https://youtu.be/a92xI0dT3dM)

---

## Inhalt

Es befinden sich zwei wichtige Ressource in diesem Verzeichnis:

- [`Dockerfile`](./Dockerfile)

  Enthält die Befehle um das Docker Image zu bauen

- [`wwwroot`](./wwwroot/)

  Enthält den Inhalt für die Webseite

---

## Weitere Informationen

In dem Video habe ich nicht im Detail erklärt, wie man mit Docker und
Containern auf Windows anfängt. Hierzu findest du mehr Informationen in der
offiziellen Dokumentation:

- [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Windows Container Dokumentation](https://docs.microsoft.com/en-us/virtualization/windowscontainers/)

Weitere Informationen zu IIS auf Docker, kannst du unter folgenden Links finden:

- IIS Container Images auf dem [Docker Hub](https://hub.docker.com/_/microsoft-windows-servercore-iis)
- IIS Docker Images auf [GitHub Repo](https://github.com/microsoft/iis-docker)
