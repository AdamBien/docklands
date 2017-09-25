#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/wildfly ."
$EXEC(cmd);
print($OUT);
