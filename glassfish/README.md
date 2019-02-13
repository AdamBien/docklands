# Eclipse (Jakarta EE) GlassFish 5.1 Docker Image

This image packages [GlassFish 5.1](https://projects.eclipse.org/projects/ee4j.glassfish) in a Docker container.

All projects created with [Java EE Essentials Archetype](http://www.adam-bien.com/roller/abien/entry/java_ee_8_essentials_archetype) ship with already with a `Dockerfile`
referencing the recent version of GlassFish 5.1.

# setup

To start a Java EE 8 project, perform:

`mvn archetype:generate -DarchetypeGroupId=com.airhacks -DarchetypeArtifactId=javaee8-essentials-archetype -DarchetypeVersion=0.0.2 -DgroupId=com.airhacks -Dversion=0.0.1 -Darchetype.interactive=false --batch-mode -DartifactId=[PROJECT_NAME]`

# build

cd [PROJECT_NAME]
mvn clean package && docker build -t airhacks/thinfish .

# run

docker run -d -p 8484:8080 --name thinfish airhacks/thinfish




