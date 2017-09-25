#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/nano-micro ."
$EXEC(cmd);
print($OUT);
