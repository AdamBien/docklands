#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/nano ."
$EXEC(cmd);
print($OUT);
