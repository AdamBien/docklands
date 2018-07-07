#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/varnish-jaxrs-cache ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);