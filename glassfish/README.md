# Eclipse (Jakarta EE) GlassFish 5.1 Docker Image

This image packages [GlassFish 5.1](https://projects.eclipse.org/projects/ee4j.glassfish) in a Docker container.

All projects created with [Java EE Essentials Archetype](http://www.adam-bien.com/roller/abien/entry/java_ee_8_essentials_archetype) ship with already with a `Dockerfile`
referencing the recent version of GlassFish 5.1.

# optional: create base docker image

This step is optional, `airhacks/glassfish` already resides in dockerhub.

Build the "super" image first: [Java 8 image](https://github.com/AdamBien/docklands/tree/master/java/java8): 
`docker build -t airhacks/java .`

# project setup

To start a Java EE 8 project, perform:

`mvn archetype:generate -DarchetypeGroupId=com.airhacks -DarchetypeArtifactId=javaee8-essentials-archetype -DarchetypeVersion=0.0.2 -DgroupId=com.airhacks -Dversion=0.0.1 -Darchetype.interactive=false --batch-mode -DartifactId=[PROJECT_NAME]`

# build

`cd [PROJECT_NAME]
mvn clean package && docker build -t airhacks/thinfish .`

# run

`docker run -d -p 8484:8080 --name thinfish airhacks/thinfish`

# invoke

`curl http://localhost:8484/thinfish/resources/ping`

output:

```
HTTP/1.1 200 OK
Server: GlassFish Server Open Source Edition  5.1.0 
X-Powered-By: Servlet/3.1 JSP/2.3 (GlassFish Server Open Source Edition  5.1.0  Java/Oracle Corporation/1.8)
Content-Type: text/plain
Content-Length: 16

Enjoy Java EE 8!% 
```






