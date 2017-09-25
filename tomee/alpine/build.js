#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/tomee:alpine ."
$EXEC(cmd);
print($OUT);
