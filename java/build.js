#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/java ."
$EXEC(cmd);
print($OUT);