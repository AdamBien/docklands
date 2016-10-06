NAME=payara-ping
docker kill ${NAME}
docker rm ${NAME}
docker run -d -p 8080:8080 -p 4848:4848 --name ${NAME}  airhacks/payara-ping
