#!/usr/bin/jjs -fv
$ENV.PWD = "java";
var cmd = "docker build -t airhacks/java ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);