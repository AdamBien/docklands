#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/tomee-ping ."
$EXEC(cmd);
print($OUT);
