# docklands
Minimalistic Java EE Dockerfiles

## Motivation

Simplest viable dockerfiles for Java EE projects (aka microservices) aiming for build speed and productivity.

## Usage

Each folder represents a Dockerfile which can be build by executing the `build.js` command. Recent builds already exist in [https://hub.docker.com/u/airhacks/](https://hub.docker.com/u/airhacks/). To run the image use the "airhacks" name e.g. `docker run -d -p 8080:8080 --name payara-ping airhacks/payara-ping`.

You can either make the `build.js` executable or run it with `jjs -scripting build.js`

Some images are executable. You will find a `run.sh` script in this case.

Heavily used in [javaeemicro.services](http://javaeemicro.services)

Docklands was used in the screencast: "The Memory Usage of Java EE 7 Application Servers Running On Docker":

[![The Memory Usage of Java EE 7 Application Servers Running On Docker](https://i.ytimg.com/vi/i-r9bU3y3Y0/mqdefault.jpg)](https://www.youtube.com/embed/i-r9bU3y3Y0?rel=0)

Docklands projects are also directly available from the official docker hub: [https://hub.docker.com/u/airhacks/](https://hub.docker.com/u/airhacks/)
