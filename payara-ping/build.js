#!/usr/bin/jjs -fv
$ENV.PWD = "payara-ping";
var cmd = "docker build -t airhacks/payara-ping ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
print($OUT);