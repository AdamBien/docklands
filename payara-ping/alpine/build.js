#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/payara-ping:alpine ."
$EXEC(cmd);
print($OUT);
