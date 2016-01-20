#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/payara ."
$EXEC(cmd);
print($OUT);