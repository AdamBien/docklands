#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/maven ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);