#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/wlp-ping ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);