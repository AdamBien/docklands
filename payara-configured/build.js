#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/payara-configured ."
$EXEC(cmd);
print($OUT);
