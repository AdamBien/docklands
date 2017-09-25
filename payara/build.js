#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/payara ."
$EXEC(cmd);
print($OUT);
