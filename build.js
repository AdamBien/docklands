#!/usr/bin/jjs -fv
var images = ["java", "payara", "payara-configured", "payara-ping", "wildfly", "wildfly-ping", "nano", "nano-micro", "tomee", "tomee-ping"];
var flavours = ["alpine", ""];

var builder = function(images, flavour) {

    if (flavour != "") flavour = "/" + flavour;

    for each(image in images) {
        print("\n\n");
        print("Building ${image}" + flavour);
        $ENV.PWD = image + flavour;
        load(image + flavour + "/build.js");
        print("Image " + image + flavour + " built!");
    }
}

var main = function() {

    for each(flavour in flavours) {
        builder(images, flavour);
    }
}

main();
