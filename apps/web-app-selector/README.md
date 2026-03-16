# Web App Selector

Landing page that displays available channels and redirects users to the appropriate `web-app` instance.

Each channel represents a separate storefront (restaurant, cafe, etc.) with its own URL, menu, and settings.

## Running

```bash
pnpm --filter @nextorders/web-app-selector dev
```

Starts on `http://localhost:3502`.

## How it works

1. Fetches list of channels from `/api/channel/list`
2. Displays them as selectable cards
3. On selection, saves `selector-channel-id` to `localStorage` and redirects to the channel URL

## Configuration

Requires `NUXT_API_URL` and `NUXT_API_TOKEN` environment variables pointing to a backend that implements the Gateway API (e.g., `essence` for development).
