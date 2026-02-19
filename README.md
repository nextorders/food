# 🍔 NextOrders: Food

<p>
  <a href="https://github.com/nextorders/food/actions/workflows/ci.yml"><img src="https://github.com/nextorders/food/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/nextorders/food/blob/main/LICENSE"><img src="https://img.shields.io/static/v1?label=License&message=MIT&colorA=18181B&colorB=FF7F50" alt="License"></a>
  <a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/nextorders/food"><img src="https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&colorA=18181B&colorB=FF7F50" alt="Dev Containers"></a>
  <a href="https://demo.nextorders.space/"><img src="https://img.shields.io/static/v1?label=Demo&message=Open&colorA=18181B&colorB=FF7F50" alt="Demo"></a>
</p>

Self-hosted website for food delivery. Your brand, your customers, zero middleman fees.

👉 [Demo: Select a city](https://demo.nextorders.space/)

👉 [Demo: Website](https://demo.nextorders.space/moscow/)

> Loved the taste? Give a star ⭐ — it's like leaving a tip for the chef!

![main-screen-desktop](https://github.com/nextorders/food/blob/main/.github/media/main-screen-desktop.jpg?raw=true)

## 🎯 Who is this for?

| Who | Current pain | How NextOrders helps |
|-----|--------------|---------------------|
| **Small restaurants & cafes** | Aggregators (Uber Eats, DoorDash, etc.) take 20-35% commission | Your own website with zero commission fees |
| **Restaurant chains** | Custom development is expensive, or stuck with legacy systems | Modern, production-ready frontend out of the box |
| **Ghost kitchens** | Full dependency on aggregators, no direct customer relationship | Direct channel to customers, own brand presence |
| **Dev agencies & integrators** | Building food delivery sites from scratch for each client | Ready-to-deploy solution, just connect your backend |

**The idea is simple**: deploy the `web-app` container, connect it to your own service that implements `food-schema`, and you have a modern food ordering website.

## 🍣 Features

**Performance & SEO**
- **PageSpeed 100** — [check it yourself](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fdemo.nextorders.space%2Fmoscow%2F). Fast loading, great Core Web Vitals.
- **Multi‑page SSR** — SEO-friendly, indexable by search engines.

**Global ready**
- **11+ languages** — EN, DE, ES, FR, RU, ZH, and more.
- **Multi‑city support** — separate storefronts for different locations.

**Conversion focused**
- **Most often added** — shows items frequently bought together.
- **Product video** — boost conversion with video on product pages.
- **Persistent cart** — always visible on desktop.
- **Delivery & pickup** — flexible fulfillment options.

## 🍕 Architecture

NextOrders separates the **frontend** (this repo) from the **backend** (your business logic).

![nextorders-arch](https://github.com/nextorders/food/blob/main/.github/media/nextorders-arch-v2.png?raw=true)

- **Web App** — storefront that customers see and use
- **Your Backend** — serves your menu, prices, and handles orders
- **Shared schema** — typed contract between frontend and backend (see [Food Schema](https://github.com/nextorders/food/tree/main/packages/food-schema))

You keep full control over your data and business logic. The frontend just needs an API that follows the schema.

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

11+ languages out of the box: English, German, Spanish, French, Russian, Chinese, and more.

<details>
<summary>Full list of supported languages</summary>

| Code | Language | Native | Link |
|------|----------|--------|------|
| `en` 🇺🇸 | English | English | [en-US.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/en-US.ts) |
| `de` 🇩🇪 | German | Deutsch | [de-DE.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/de-DE.ts) |
| `el` 🇬🇷 | Greek | Ελληνικά | [el-GR.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/el-GR.ts) |
| `es` 🇪🇸 | Spanish | Español | [es-ES.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/es-ES.ts) |
| `fr` 🇫🇷 | French | Français | [fr-FR.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/fr-FR.ts) |
| `hi` 🇮🇳 | Hindi | हिंदी | [hi-IN.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/hi-IN.ts) |
| `it` 🇮🇹 | Italian | Italiano | [it-IT.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/it-IT.ts) |
| `ka` 🇬🇪 | Georgian | ქართული | [ka-GE.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/ka-GE.ts) |
| `pt` 🇵🇹 | Portuguese | Português | [pt-PT.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/pt-PT.ts) |
| `ru` 🇷🇺 | Russian | Русский | [ru-RU.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/ru-RU.ts) |
| `zh_cn` 🇨🇳 | Simplified Chinese | 简体中文 | [zh-CN.ts](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/zh-CN.ts) |

</details>

## 🚀 Quick Start

```shell
git clone https://github.com/nextorders/food.git
cd food
pnpm i
pnpm dev
```

Open `http://localhost:3000` — you'll see the city selector. Pick a city to explore the storefront.

You can also develop in an isolated container with prepared options:

<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/nextorders/food"><img src="https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&colorA=18181B&colorB=FF7F50" alt="Dev Containers"></a>

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b my-feature`
3. Make your changes and commit: `git commit -m 'feat: add my feature'`
4. Push to your fork: `git push origin my-feature`
5. Open a Pull Request

Please follow existing code style and conventions. For bug reports and feature requests, use [GitHub Issues](https://github.com/nextorders/food/issues).

## 🍰 License

This project is licensed under the **MIT License** - see the [**License**](https://github.com/nextorders/food/blob/main/LICENSE) file for details.
