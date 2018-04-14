#!/bin/sh -x
varnishd -u varnish -F -f /etc/varnish/default.vcl -a :6081 -n airhacks