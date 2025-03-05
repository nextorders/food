FROM node:22.14.0-alpine AS base

# Builder stage
FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/email ./apps/email
RUN npm install --ignore-scripts -g pnpm && \
    pnpm i --frozen-lockfile --ignore-scripts && \
    pnpm build --filter @next-orders/email

# Production stage
FROM base AS production
WORKDIR /app

# Copy built artifacts from builder
COPY --from=builder /app/apps/email/.output .

# Running as non-root is a security best practice
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup
USER appuser

# Configuration
ARG VERSION=nightly
LABEL maintainer="hmbanan666@hotmail.com" \
    description="NextOrders Email Service" \
    version=${VERSION}
ENV VERSION=${VERSION} \
    NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

EXPOSE 3000

# Run the application
ENTRYPOINT ["node"]
CMD ["/app/server/index.mjs"]
