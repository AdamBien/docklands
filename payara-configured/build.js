#!/usr/bin/jjs -fv
var cmd = "docker build --build-arg INVALIDATE-CACHE=TRUE -t airhacks/payara-configured ."
$EXEC(cmd);
print($OUT);