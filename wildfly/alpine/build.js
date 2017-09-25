#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/wildfly:alpine ."
$EXEC(cmd);
print($OUT);
