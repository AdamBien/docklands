#!/usr/bin/jjs -fv
$ENV.PWD = "payara-configured";
var cmd = "docker build --no-cache -t airhacks/payara-configured ."
$EXEC(cmd);
print($OUT);