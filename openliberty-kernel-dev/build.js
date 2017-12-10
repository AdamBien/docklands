#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/openliberty-kernel-dev ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
