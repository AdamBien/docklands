#!/usr/bin/jjs -fv
$ENV.PWD = "wildfly";
var cmd = "docker build -t airhacks/wildfly ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
print($OUT);