# 🍔 NextOrders: Food
Modern e-commerce self-hosted platform: clients will be happy to order delicious food!

👉 [Check out demo website](https://demo.nextorders.space/)

![main-screen-desktop](https://github.com/nextorders/food/blob/main/.github/media/main-screen-desktop.jpg?raw=true)

## 🍕 Main idea and architecture of NextOrders

There is a great desire to create software that is ideal for ordering and delivering food.
It will be a set of solutions that can work together. It is important that each element can be easily replaced later.
So the project does not become one big monolith.

![nextorders-arch](https://github.com/nextorders/food/blob/main/.github/media/next-orders-arch.png?raw=true)

I'm currently working on the first version of the website. Next year there will be a new version that will easily replace the old one as the Main API with business logic will remain the same.

Let's see what happens. Give the project a star ⭐. Offer your ideas and make commits.

## 🍣 Customer and Seller Features (WIP)

- 📱 100% adaptive layout
- 🤹 Multi-page structure with priority on fast page loading and SEO
- 🛒 The cart is always in sight on desktop
- 🚚 Possibility to choose delivery or pickup
- 🔍 Quick search in the product catalog
- 🏷️ The client can use a promotional code
- 📈 The best offers and promotions are shown in the desired section
- 🏁 Quick order, without forced registration on the site

## 🥪 Tech Features (WIP)

- Website has its own backend, where API data does not break out
- Most of the code is rendered on the server: less load on the client

[Check out PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fdemo.nextorders.space%2F). Maybe it's showing all 100s 😉

## 🌎 Supported Locales

The application currently supports [different languages](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales):

* `en` | English [🇺🇸 en-US](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/en-US.ts)
* `de` | German | Deutsch [🇩🇪 de-DE](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/de-DE.ts)
* `ka` | Georgian | ქართული [🇬🇪 ka-GE](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/ka-GE.ts)
* `ru` | Russian | Русский [🇷🇺 ru-RU](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/ru-RU.ts)
* `zh_cn` | Chinese | 中文 [🇨🇳 zh-CN](https://github.com/nextorders/food/tree/main/packages/ui/i18n/locales/zh-CN.ts)

## 🥒 Repository structure

- [Food Schema](https://github.com/nextorders/food/tree/main/packages/food-schema): All types and schemas for the project. Here you can understand main data structures.
- [Web App](https://github.com/nextorders/food/tree/main/apps/web-app): Web storefront. Client can order delicious food.
- [Web App Selector](https://github.com/nextorders/food/tree/main/apps/web-app-selector): Welcome screen with a list of available storefronts.
- [Essence](https://github.com/nextorders/food/tree/main/apps/essence): An example of a service with business logic and data. Web App and Web App Selector use it via API.

## ☕ How to deploy

⚠️ Warn: work in progress.

## 🍿 How to develop

You can develop in isolated container with prepared options:

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/nextorders/food)

Make a fork. Or clone this repo and use standard commands:

```shell
git clone https://github.com/nextorders/food
pnpm i
```

## 🍰 License

This project is licensed under the **MIT License** - see the [**License**](https://github.com/nextorders/food/blob/main/LICENSE) file for details.
