#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/wildfly-ping ."
$EXEC(cmd);
print($OUT);
