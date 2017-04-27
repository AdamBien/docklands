#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/nano:alpine ."
$EXEC(cmd);
print($OUT);
