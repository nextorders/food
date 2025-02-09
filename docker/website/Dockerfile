# Base image
FROM node:22.13.1-alpine AS base

# Builder stage
FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY packages ./packages
COPY apps/website ./apps/website
RUN npm install -g pnpm --ignore-scripts && \
    pnpm i --frozen-lockfile --ignore-scripts && \
    pnpm build --filter @next-orders/website

# Production stage
FROM base AS production
RUN apk add --no-cache curl
WORKDIR /app

# Copy built artifacts from builder
COPY --from=builder /app/apps/website/.output .

# Running as non-root is a security best practice
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Configuration
ARG VERSION=nightly
LABEL maintainer="hmbanan666@hotmail.com" \
    description="NextOrders Website" \
    version=${VERSION}
ENV VERSION=${VERSION} \
    NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s \
    CMD curl -f http://localhost:3000/ || exit 1

# Run the application
ENTRYPOINT ["node"]
CMD ["/app/server/index.mjs"]
