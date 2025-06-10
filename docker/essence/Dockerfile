FROM node:22.16.0-alpine AS base

# Builder stage
FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY packages ./packages
COPY apps/essence ./apps/essence
RUN npm install --ignore-scripts -g pnpm && \
    pnpm i --frozen-lockfile && \
    pnpm build --filter @nextorders/essence

# Production stage
FROM base AS production
RUN apk add --no-cache curl
WORKDIR /app

# Copy built artifacts from builder
COPY --from=builder /app/apps/essence/.output .
COPY docker/essence/health-check.sh ./

# Running as non-root is a security best practice
# Make the Health check script executable
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup && \
    chmod +x ./health-check.sh
USER appuser

# Configuration
ARG VERSION=nightly
LABEL maintainer="hmbanan666@hotmail.com" \
    description="NextOrders: Essence" \
    version=${VERSION}
ENV VERSION=${VERSION} \
    NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

EXPOSE 3000

# Health check using exec form
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s \
    CMD ["health-check.sh"]

# Run the application
ENTRYPOINT ["node"]
CMD ["/app/server/index.mjs"]
