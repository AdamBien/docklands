#!/usr/bin/jjs -fv
$ENV.PWD = "nano";
var cmd = "docker build --no-cache -t airhacks/nano ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
print($OUT);