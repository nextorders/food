# Essence

Demo backend with in-memory storage. Not for production use.

Implements the Gateway API contract that `@nextorders/core` expects. Used for local development and testing without an external backend.

## Running

```bash
pnpm --filter @nextorders/essence dev
```

Starts on `http://localhost:3503`.

## Gateway protocol

All requests go through `POST /api/storefront/gateway` with JSON body:

```json
{
  "type": "getMenu",
  "body": {}
}
```

Supported types: `getOptions`, `getChannels`, `getMenu`, `getOrder`, `createOrder`, `updateOrder`, `completeOrder`, `addOrderItem`, `incrementOrderItemQuantity`, `decrementOrderItemQuantity`, `getDeliveryByCourierStatus`, `getSelfPickupStatus`, `getTimeSlots`.

## Data

Products, categories, and channel configuration are defined as static data in `server/services/data/`. Orders are stored in an in-memory `Map` and reset on restart.
