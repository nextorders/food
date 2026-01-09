# 🍔 NextOrders: Food

<p>
  <a href="https://github.com/nextorders/food/blob/main/LICENSE"><img src="https://img.shields.io/static/v1?label=License&message=MIT&colorA=18181B&colorB=FF7F50" alt="License"></a>
  <a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/nextorders/food"><img src="https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&colorA=18181B&colorB=FF7F50" alt="Dev Containers"></a>
  <a href="https://demo.nextorders.space/"><img src="https://img.shields.io/static/v1?label=Demo&message=Open&colorA=18181B&colorB=FF7F50" alt="Demo"></a>
</p>

Modern e-commerce self-hosted platform: clients will be happy to order delicious food!

👉 [Demo: Select a city](https://demo.nextorders.space/)

👉 [Demo: Website](https://demo.nextorders.space/moscow/)

![main-screen-desktop](https://github.com/nextorders/food/blob/main/.github/media/main-screen-desktop.jpg?raw=true)

## 🍣 Features

- ✅ **Fully responsive design** — works perfectly on any device.
- 📄 **Multi‑page SSR** — fast loading + SEO optimization.
- 🌐 **Multi‑language** — supports 5+ locales.
- 🛒 **Persistent cart** — always visible on desktop.
- 🚚 **Delivery & pickup** — flexible fulfillment options.
- 🔍 **Instant search** — find products in the catalog.
- 🏁 **Guest checkout** — no registration required.

[Check out PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fdemo.nextorders.space%2Fmoscow%2F). Maybe it's showing all 100s 😉

## 🥪 Tech Stack

- [Nuxt](https://nuxt.com/): An open source framework that makes web development intuitive and powerful.
- [Nuxt UI](https://ui.nuxt.com/): A collection of UI components for Nuxt.
- [Pinia](https://pinia.vuejs.org/): A state management solution for Vue.
- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [TailwindCSS Motion](https://rombo.co/tailwind/): Nice animations for TailwindCSS.
- [Iconify](https://iconify.design/): An icon library for the web.
- [VueUse](https://vueuse.org/): A collection of essential Vue composable utilities.
- [Zod](https://github.com/colinhacks/zod): A schema definition and validation library for TypeScript and JavaScript.

All dependencies are managed by [pnpm](https://pnpm.io/). Check the [pnpm-workspace.yaml](https://github.com/nextorders/food/blob/main/pnpm-workspace.yaml) for more details.

## 🥒 Repository structure

**There are main apps and services:**
- [Web App](https://github.com/nextorders/food/tree/main/apps/web-app): Web storefront. Client can order delicious food.
- [Web App Selector](https://github.com/nextorders/food/tree/main/apps/web-app-selector): Welcome screen with a list of available storefronts.
- [Essence](https://github.com/nextorders/food/tree/main/apps/essence): An example of a service with business logic and data. Web App and Web App Selector use it via API.

**There are packages:**
- [Food Schema](https://github.com/nextorders/food/tree/main/packages/food-schema): All types and schemas for the project. Here you can understand main data structures.
- [UI](https://github.com/nextorders/food/tree/main/packages/ui): Theme and components for all apps. It is a Nuxt Layer with @nuxt/ui.
- [Core](https://github.com/nextorders/food/tree/main/packages/core): Shared stores and server routes. It is a Nuxt Layer.

## 🌎 Supported Locales

The application currently supports [different languages](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales):

| Code | Language | Native | Link |
|------|----------|--------|------|
| `en` 🇺🇸 | English | English | [en-US.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/en-US.ts) |
| `de` 🇩🇪 | German | Deutsch | [de-DE.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/de-DE.ts) |
| `es` 🇪🇸 | Spanish | Español | [es-ES.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/es-ES.ts) |
| `ka` 🇬🇪 | Georgian | ქართული | [ka-GE.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/ka-GE.ts) |
| `ru` 🇷🇺 | Russian | Русский | [ru-RU.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/ru-RU.ts) |
| `zh_cn` 🇨🇳 | Simplified Chinese | 简体中文 | [zh-CN.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/zh-CN.ts) |

## ☕ How to deploy

⚠️ Warn: work in progress.

## 🍿 How to develop

You can develop in isolated container with prepared options:

<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/nextorders/food"><img src="https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&colorA=18181B&colorB=FF7F50" alt="Dev Containers"></a>

Make a fork. Or clone this repo and use standard command to install dependencies:

```shell
pnpm i
```

## 🍰 License

This project is licensed under the **MIT License** - see the [**License**](https://github.com/nextorders/food/blob/main/LICENSE) file for details.

## 🍕 Main idea and architecture of NextOrders

There is a great desire to create software that is ideal for ordering and delivering food.
It will be a set of solutions that can work together.

![nextorders-arch](https://github.com/nextorders/food/blob/main/.github/media/nextorders-arch-v2.png?raw=true)

Let's see what happens. Give the project a star ⭐. Offer your ideas and make commits.
