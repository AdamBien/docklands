# Installation
Connector without connector.properties and worker.properties.

Inherit from this layer and add:

```
COPY connector.properties ${KAFKA_HOME}/config/
COPY worker.properties ${KAFKA_HOME}/config/
```