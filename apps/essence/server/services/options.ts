import type { GatewayGetOptionsResponse, Options } from '@nextorders/food-schema'

const options: Options = {
  selectorTitle: [
    {
      locale: 'ru',
      value: 'Вкус на бегу',
    },
    {
      locale: 'en',
      value: 'Taste on the run',
    },
    {
      locale: 'ka',
      value: 'გასინჯვა სირბილის დროს',
    },
  ],
  selectorDescription: [
    {
      locale: 'ru',
      value: 'Насладитесь уникальными вкусами и приятной атмосферой',
    },
    {
      locale: 'en',
      value: 'Enjoy unique tastes and a pleasant atmosphere',
    },
    {
      locale: 'ka',
      value: 'დატკბით უნიკალური გემოებით და სასიამოვნო გარემოთი',
    },
  ],
  logoUrl: 'https://storage.yandexcloud.net/next-orders-food-demo/nextorders-food-logo.jpg',
  defaultLocale: 'ru',
  availableLocales: ['ru', 'en', 'ka'],
  countryCode: 'RU',
  currencyCode: 'RUB',
  headLinks: [
    {
      rel: 'shortcut icon',
      href: 'https://storage.yandexcloud.net/next-orders-food-demo/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: 'https://storage.yandexcloud.net/next-orders-food-demo/favicon/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      sizes: 'any',
      href: 'https://storage.yandexcloud.net/next-orders-food-demo/favicon/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      type: 'image/png',
      href: 'https://storage.yandexcloud.net/next-orders-food-demo/favicon/apple-touch-icon.png',
    },
  ],
  headStyles: [
    `@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    
    :root {
      --font-serif: "Nunito", sans-serif !important;
      --font-sans: "Nunito Sans", sans-serif !important;

      --font-weight-light: 300;
      --font-weight-normal: 400;
      --font-weight-medium: 600;
      --font-weight-semibold: 700;
      --font-weight-bold: 800;

      --ui-secondary: #FF7F50;
    }`,
  ],
}

export function handleGetOptions(): GatewayGetOptionsResponse {
  return {
    ok: true,
    type: 'getOptions',
    result: options,
  }
}
