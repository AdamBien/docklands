#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/nano-micro:alpine ."
$EXEC(cmd);
print($OUT);
