# Build the server application
FROM gradle:8.4.0-jdk17-alpine AS server-builder
WORKDIR /usr/src/app
COPY server/build.gradle.kts ./
# Download gradle dependencies to the cache layer and force the step to pass since there are no sources yet
RUN gradle build || return 0
COPY server ./
RUN gradle build
COPY docker-save-api-docs.sh ./
# Download the OAS from the server application
RUN sh docker-save-api-docs.sh

# Create the image of the server application
FROM eclipse-temurin:17-jre-alpine AS server
WORKDIR /usr/src/app
COPY --from=server-builder /usr/src/app/build/libs/app.jar ./
ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8080

# Generate frontend sources for communication with the server based on the downloaded OAS
FROM openapitools/openapi-generator-cli:v7.0.1 AS frontend-openapi-builder
WORKDIR /usr/src/app
COPY --from=server-builder /usr/src/app/build/api-docs.json ./
RUN docker-entrypoint.sh generate \
    -i api-docs.json \
    -g typescript-angular \
    -o generated \
    --additional-properties=stringEnums=true

# Build the frontend from versioned and generated sources
FROM node:18.18.0-alpine AS frontend-builder
RUN npm install --global npm@10.2.0
WORKDIR /usr/src/app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY --from=frontend-openapi-builder /usr/src/app/generated src/app/generated
COPY frontend ./
RUN npm run build -- --configuration production

# Create the image of the frontend application
FROM nginx:1.25.2-alpine AS frontend
COPY frontend-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-builder /usr/src/app/dist/typesafe-apis-with-swagger-and-openapi /usr/share/nginx/html
EXPOSE 80
