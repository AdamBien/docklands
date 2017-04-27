#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/wildfly-ping:alpine ."
$EXEC(cmd);
print($OUT);
