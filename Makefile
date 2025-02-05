DOCKER_IMAGE_PREFIX=next-orders

.PHONY: build-app-docker-arm64
build-app-docker-arm64:
	docker buildx build \
	  --no-cache \
		--platform linux/arm64 \
		--build-arg APP_VERSION=local\
		-t ${DOCKER_IMAGE_PREFIX}/app:local \
		-f docker/app/Dockerfile .

.PHONY: build-landing-docker-arm64
build-landing-docker-arm64:
	docker buildx build \
	  --no-cache \
		--platform linux/arm64 \
		--build-arg APP_VERSION=local\
		-t ${DOCKER_IMAGE_PREFIX}/landing:local \
		-f docker/landing/Dockerfile .
