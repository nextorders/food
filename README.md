# 🍔 NextOrders: Food
Modern e-commerce self-hosted platform: clients will be happy to order delicious food!

👉 [Check out demo website](https://demo.nextorders.space/)

🎯 [Admin panel](https://demo.nextorders.space/command-center). Use **demo** as login and password. Read only mode 🔒👮‍♂️

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

## 🌎 Locales

The application has [several localizations](https://github.com/nextorders/food/tree/main/apps/web-app/i18n/locales):

- en | English
- ru | Russian | Русский
- ka | Georgian | ქართული

## 🥒 Repository structure

- [Web App](https://github.com/nextorders/food/tree/main/apps/web-app): Web storefront and Command Center. Client can order delicious food.
- [Essence](https://github.com/nextorders/food/tree/main/apps/essence): Business data collection and data management software.
- [Website](https://github.com/nextorders/food/tree/main/apps/website): Info portal and documentation.

## ☕ How to deploy

⚠️ Warn: work in progress. Be careful with updates! Your images and DB data are at risk.

You can deploy @nextorders/web-app on your server (1GB+ RAM) by this:

```shell
# Connect over SSH and use with args: version, locale, your domain, your email
curl -fsSL https://nextorders.space/food/install.sh | bash -s -- "v0.7.0" "en" "test.nextorders.space" "resolve@nextorders.space"

# It will install Docker, Docker Compose and download latest docker-compose.yaml
# After, it will bring up Traefik to serve web requests, create and autoupdate SSL certificate
# Food app, DB, migrations... You are ready to check your domain!
```

Also, you can use single Docker Image to create container:

```shell
# Use the specific version
docker pull ghcr.io/nextorders/food/web-app:v0.7.0

# Warn: you need an external Redis as DB
```

Check [**.env.example**](https://github.com/nextorders/food/tree/main/apps/web-app/.env.example) for more info about required config variables.

## 🍿 How to develop

You can develop in isolated container with prepared options:

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/nextorders/food)

Make a fork. Or clone this repo and use standard commands:

```shell
git clone https://github.com/nextorders/food
pnpm i
pnpm dev:web-app:compose
pnpm dev:web-app
```

## 🍰 License

This project is licensed under the **MIT License** - see the [**License**](https://github.com/nextorders/food/blob/main/LICENSE) file for details.
