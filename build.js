#!/usr/bin/jjs -fv
var images = ["java", "payara", "payara-configured", "payara-ping", "wildfly", "wildfly-ping", "nano", "nano-micro", "tomee", "tomee-ping"];
for each(image in images) {
    print("\n\n");
    print("Building ${image}");
    $ENV.PWD = image;
    load("${image}/build.js");
    print("Image ${image} built!");
}
