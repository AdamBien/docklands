#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/java:alpine ."
$EXEC(cmd);
print($OUT);
