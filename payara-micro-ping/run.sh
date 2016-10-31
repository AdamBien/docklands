NAME=payara-micro-ping
docker kill ${NAME}
docker rm ${NAME}
docker run -d -p 8080:8080--name ${NAME}  airhacks/payara-micro-ping
