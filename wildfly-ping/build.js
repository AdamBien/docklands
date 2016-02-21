#!/usr/bin/jjs -fv
$ENV.PWD = "widlfly-ping";
var cmd = "docker build -t airhacks/wildfly-ping ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);