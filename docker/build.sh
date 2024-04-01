docker rm -f nuxt3-starter-local

docker rmi nuxt3-starter-local

docker build --platform linux/amd64 \
--build-arg ENV=local.env \
--file ./docker/Dockerfile \
-t nuxt3-starter-local .

docker run --name nuxt3-starter-local \
-p 3000:3000 \
--restart unless-stopped \
-d nuxt3-starter-local:latest
