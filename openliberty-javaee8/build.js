#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/openliberty-webprofile7 ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
