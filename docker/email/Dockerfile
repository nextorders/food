FROM node:22.13.1-alpine AS base

FROM base AS builder
WORKDIR /app

COPY . .

RUN npm install -g pnpm --ignore-scripts \
  && pnpm i --frozen-lockfile --ignore-scripts \
  && pnpm build --filter @next-orders/email

FROM base
WORKDIR /app
COPY --from=builder /app/apps/email/.output .

ARG VERSION=nightly
ENV VERSION=${VERSION}
ENV NODE_ENV=production

EXPOSE 3000

CMD ["/app/server/index.mjs"]
