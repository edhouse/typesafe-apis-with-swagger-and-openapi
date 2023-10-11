# Typesafe APIs with Swagger and OpenAPI

Example project of frontend and server API communication using Swagger and OpenAPI.

## Prerequisites

The following applications are installed:

* NodeJS (version min 18.18.0): You can download it from <https://nodejs.org/>
* NPM (version min 10.2.0) - packed with NodeJS, update with `npm install --global npm`
* Angular CLI - execute `npm install --global @angular/cli`
* Execute `npm ci` in the `frontend` directory to install all dependencies
* Java (version min 17), you can download it from:
  * Oracle: <https://www.oracle.com/java/technologies/downloads/>
  * Adoptium: <https://adoptium.net/>
* Gradle (min version 8.4), you can download if from: <https://gradle.org/releases/>
* Docker Engine: <https://docs.docker.com/engine/install/>
* Docker Compose: <https://docs.docker.com/compose/install/>

## Building the apps locally

Go to the `server` directory and execute `gradle build`.

With the server app running (see instructions below), go to the `frontend` directory and execute `npm run openapi:generate`.
If you are following examples from the start, you may need to execute `npm ci` again to install new dependencies.

## Running the apps locally

First go to the `server` directory, execute `java -jar .\build\libs\server.jar` and leave it running.

Then go to the `frontend` directory, execute `ng serve` and open <http://localhost:4200/> in your browser.

## Building the apps with Docker

To build Docker images execute `docker compose build`.

## Running the apps with Docker

To start Docker containers execute `docker compose up`.
Alternatively execute `docker compose up --build` to build and start all containers without previous build.

## Client-server communication examples

There are several branches with examples of client-server communication.
You can also check individual commits to see the project setup creation step by step.

The following list contains the branch name and a description of an example:

* feature/example-01-http-client - Communication created manually using Angular HttpClient
* feature/example-02-openapi-generator - Communication created by OpenAPI generator
* feature/example-03-enums - Enums handled as references
* feature/example-04-docker - OpenAPI generator in Docker
