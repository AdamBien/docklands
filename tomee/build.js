#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/tomee ."
$EXEC(cmd);
print($OUT);
