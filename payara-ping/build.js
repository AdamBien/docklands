#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/payara-ping ."
$EXEC(cmd);
print($OUT);