# Purpose

This folder contains all the quarkus "immutable" libraries, part of the shared library.
However, the libraries may (will) change on every quarkus release and are therefore
not checked in.

# Setup

Run:
1. mvn io.quarkus:quarkus-maven-plugin:create
2. mvn clean install
3. cp target/lib into this folder