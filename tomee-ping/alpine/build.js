#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/tomee-ping:alpine ."
$EXEC(cmd);
print($OUT);
