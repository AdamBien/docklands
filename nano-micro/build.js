#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/nano-micro ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
print($OUT);