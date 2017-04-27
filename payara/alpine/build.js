#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/payara:alpine ."
$EXEC(cmd);
print($OUT);
