#!/bin/sh

java -jar build/libs/app.jar &
SERVER_PID=$!

sleep 5s

wget localhost:8080/v3/api-docs -O build/api-docs.json

kill $SERVER_PID
