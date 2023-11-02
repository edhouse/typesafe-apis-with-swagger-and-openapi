#!/bin/sh

# Start the server application and save its PID
java -jar build/libs/app.jar &
SERVER_PID=$!

# Wait for the server application to start
# This could be solved in a more elegant way, like prompting some server endpoint until it responds with 200 OK,
# but for the purpose of an example, it is easier to just wait.
# If your machine is slower, you might need to increase the sleeping time.
sleep 5s

# Download the OAS from the server endpoint
wget localhost:8080/v3/api-docs -O build/api-docs.json

# Stop the server application
kill $SERVER_PID
