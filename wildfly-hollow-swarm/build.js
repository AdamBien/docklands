#!/usr/bin/jjs -fv --language=es6
const cmd = "docker build -t airhacks/wildfly-hollow-swarm ."
const System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);