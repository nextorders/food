FROM node:22.13.1-alpine AS base

FROM base AS builder
WORKDIR /app

COPY . .

RUN npm install -g pnpm --ignore-scripts \
  && pnpm i --frozen-lockfile --ignore-scripts \
  && pnpm build --filter @next-orders/website

FROM base
WORKDIR /app

COPY --from=builder /app/apps/website/.output .

ARG VERSION=nightly
ENV VERSION=${VERSION}
ENV NODE_ENV=production

EXPOSE 3000

CMD ["/app/server/index.mjs"]
