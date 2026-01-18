import type { GatewayGetOptionsResponse, Options } from '@nextorders/food-schema'

const options: Options = {
  selectorTitle: [
    {
      locale: 'ru',
      value: 'Вкус на бегу',
    },
    {
      locale: 'el',
      value: 'Γεύση εν κινήσει',
    },
    {
      locale: 'en',
      value: 'Taste on the run',
    },
    {
      locale: 'es',
      value: 'Sabor sobre la marcha',
    },
    {
      locale: 'fr',
      value: 'Savoureux sur le pouce',
    },
    {
      locale: 'ka',
      value: 'გასინჯვა სირბილის დროს',
    },
    {
      locale: 'de',
      value: 'Geschmack für unterwegs',
    },
    {
      locale: 'zh_cn',
      value: '随时随地品尝美味',
    },
  ],
  selectorDescription: [
    {
      locale: 'ru',
      value: 'Насладитесь уникальными вкусами и приятной атмосферой',
    },
    {
      locale: 'el',
      value: 'Απολαύστε μοναδικές γεύσεις και μια ευχάριστη ατμόσφαιρα',
    },
    {
      locale: 'en',
      value: 'Enjoy unique tastes and a pleasant atmosphere',
    },
    {
      locale: 'es',
      value: 'Disfrute de sabores únicos y un ambiente agradable',
    },
    {
      locale: 'fr',
      value: 'Savourez des goûts uniques et une ambiance agréable',
    },
    {
      locale: 'ka',
      value: 'დატკბით უნიკალური გემოებით და სასიამოვნო გარემოთი',
    },
    {
      locale: 'de',
      value: 'Genießen Sie einzigartige Geschmackserlebnisse und eine angenehme Atmosphäre',
    },
    {
      locale: 'zh_cn',
      value: '享受独特的口味和愉悦的氛围',
    },
  ],
  logoUrl: 'https://storage.yandexcloud.net/next-orders-food-demo/nextorders-food-logo.jpg',
  defaultLocale: 'ru',
  availableLocales: ['ru', 'el', 'en', 'es', 'fr', 'ka', 'de', 'zh_cn'],
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
  headScripts: [
    {
      type: 'text/javascript',
      textContent: `
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106171766', 'ym');

        ym(106171766, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
    },
  ],
}

export function handleGetOptions(): GatewayGetOptionsResponse {
  return {
    ok: true,
    type: 'getOptions',
    result: options,
  }
}
