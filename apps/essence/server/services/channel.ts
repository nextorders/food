import type { Channel, GatewayGetChannelsResponse, GatewayGetDeliveryByCourierStatusRequest, GatewayGetDeliveryByCourierStatusResponse, GatewayGetSelfPickupStatusRequest, GatewayGetSelfPickupStatusResponse, GatewayGetTimeSlotsRequest, GatewayGetTimeSlotsResponse, PaymentMethod, Schedule } from '@nextorders/food-schema'
import { getOpeningStatus, getTimeSlotsFromNow } from './time'

const paymentMethodsForDelivery: PaymentMethod[] = [
  {
    id: 'cash',
    type: 'cash',
    title: [
      {
        locale: 'en',
        value: 'Cash to the courier',
      },
      {
        locale: 'ru',
        value: 'Наличные курьеру',
      },
      {
        locale: 'ka',
        value: 'ნაღდი ფული კურიერთან',
      },
      {
        locale: 'de',
        value: 'Bargeld an den Kurier',
      },
      {
        locale: 'zh_cn',
        value: '现金交给快递员',
      },
    ],
  },
  {
    id: 'card',
    type: 'card',
    title: [
      {
        locale: 'en',
        value: 'Card to the courier',
      },
      {
        locale: 'ru',
        value: 'Картой курьеру',
      },
      {
        locale: 'ka',
        value: 'კარდი კურიერთან',
      },
      {
        locale: 'de',
        value: 'Karte an den Kurier',
      },
      {
        locale: 'zh_cn',
        value: '刷卡付给快递员',
      },
    ],
  },
]

const paymentMethodsForSelfPickup: PaymentMethod[] = [
  {
    id: 'cash',
    type: 'cash',
    title: [
      {
        locale: 'en',
        value: 'Cash',
      },
      {
        locale: 'ru',
        value: 'Наличные',
      },
      {
        locale: 'ka',
        value: 'ნაღდი',
      },
      {
        locale: 'de',
        value: 'Bargeld',
      },
      {
        locale: 'zh_cn',
        value: '现金',
      },
    ],
  },
]

const deliverySchedule: Schedule = [
  {
    day: 'mon',
    isClosed: false,
    hours: [
      {
        start: '10:00',
        end: '21:00',
      },
    ],
  },
  {
    day: 'tue',
    isClosed: false,
    hours: [
      {
        start: '10:00',
        end: '21:00',
      },
    ],
  },
  {
    day: 'wed',
    isClosed: false,
    hours: [
      {
        start: '10:00',
        end: '21:00',
      },
    ],
  },
  {
    day: 'thu',
    isClosed: false,
    hours: [
      {
        start: '10:00',
        end: '21:00',
      },
    ],
  },
  {
    day: 'fri',
    isClosed: false,
    hours: [
      {
        start: '10:00',
        end: '21:00',
      },
    ],
  },
  {
    day: 'sat',
    isClosed: false,
    hours: [
      {
        start: '09:30',
        end: '21:45',
      },
    ],
  },
  {
    day: 'sun',
    isClosed: false,
    hours: [
      {
        start: '09:30',
        end: '21:45',
      },
    ],
  },
]

const selfPickupSchedule: Schedule = [
  {
    day: 'mon',
    isClosed: false,
    hours: [
      {
        start: '09:30',
        end: '22:00',
      },
    ],
  },
  {
    day: 'tue',
    isClosed: false,
    hours: [
      {
        start: '09:30',
        end: '22:00',
      },
    ],
  },
  {
    day: 'wed',
    isClosed: false,
    hours: [
      {
        start: '09:30',
        end: '22:00',
      },
    ],
  },
  {
    day: 'thu',
    isClosed: false,
    hours: [
      {
        start: '09:30',
        end: '22:00',
      },
    ],
  },
  {
    day: 'fri',
    isClosed: false,
    hours: [
      {
        start: '09:30',
        end: '22:00',
      },
    ],
  },
  {
    day: 'sat',
    isClosed: false,
    hours: [
      {
        start: '09:15',
        end: '22:30',
      },
    ],
  },
  {
    day: 'sun',
    isClosed: false,
    hours: [
      {
        start: '09:15',
        end: '22:30',
      },
    ],
  },
]

const links: Channel['links'] = {
  aside: [
    {
      label: [
        {
          locale: 'ru',
          value: '8 800 123-45-69',
        },
        {
          locale: 'en',
          value: '8 800 123-45-69',
        },
        {
          locale: 'ka',
          value: '8 800 123-45-69',
        },
        {
          locale: 'de',
          value: '8 800 123-45-69',
        },
        {
          locale: 'zh_cn',
          value: '8 800 123-45-69',
        },
      ],
      to: 'tel:88001234569',
      icon: 'i-lucide-phone-call',
    },
  ],
  footer: [
    {
      label: [
        {
          locale: 'ru',
          value: 'Публичная оферта',
        },
        {
          locale: 'en',
          value: 'Public Offer',
        },
        {
          locale: 'ka',
          value: 'საჯარო შეთავაზება',
        },
        {
          locale: 'de',
          value: 'Öffentliches Angebot',
        },
        {
          locale: 'zh_cn',
          value: '公开要约',
        },
      ],
      to: '#',
    },
    {
      label: [
        {
          locale: 'ru',
          value: 'Политика конфиденциальности',
        },
        {
          locale: 'en',
          value: 'Privacy Policy',
        },
        {
          locale: 'ka',
          value: 'კონფიდენციალურობის პოლიტიკა',
        },
        {
          locale: 'de',
          value: 'Datenschutzrichtlinie',
        },
        {
          locale: 'zh_cn',
          value: '隐私政策',
        },
      ],
      to: '#',
    },
    {
      label: [
        {
          locale: 'ru',
          value: 'Софт для e-commerce',
        },
        {
          locale: 'en',
          value: 'Software for e-commerce',
        },
        {
          locale: 'ka',
          value: 'პროგრამული უზრუნველყოფა ელექტრონული კომერციისთვის',
        },
        {
          locale: 'de',
          value: 'Software für den E-Commerce',
        },
        {
          locale: 'zh_cn',
          value: '电子商务软件',
        },
      ],
      to: 'https://nextorders.ru/',
      target: '_blank',
    },
  ],
  social: [
    {
      to: 'https://github.com/hmbanan666',
      icon: 'i-simple-icons:github',
      target: '_blank',
    },
    {
      to: 'https://t.me/hmbanan666',
      icon: 'i-simple-icons:telegram',
      target: '_blank',
    },
  ],
}

const copyright: Channel['copyright'] = [
  {
    locale: 'ru',
    value: `© 2024—2026 ООО «Выдуманная компания»
ОГРН 12345, ИНН 12345
236000, Калининградская область, г. Калининград, ул. Театральная, д. 33А

Информация на сайте не является публичной офертой.
Изображения товаров могут отличаться от оригинала.`,
  },
  {
    locale: 'en',
    value: `© 2024—2026 Fictitious Company LLC
OGRN 12345, INN 12345
236000, Kaliningrad Oblast, Kaliningrad, Teatralnaya St., 33A

The information on this website does not constitute a public offer.
Product images may differ from the original.`,
  },
  {
    locale: 'ka',
    value: `© 2024—2026 შპს «ფიქტიუშენ კომპანი»
OGRN 12345, INN 12345
236000, კალინინგრადის ოლქი, კალინინგრადი, თეატრალნაიას ქ., 33A

ამ ვებსაიტზე განთავსებული ინფორმაცია არ წარმოადგენს საჯარო შეთავაზებას.
პროდუქტის სურათები შეიძლება განსხვავდებოდეს ორიგინალისგან.`,
  },
  {
    locale: 'de',
    value: `© 2024–2026 Fictitious Company LLC
OGRN 12345, INN 12345
236000 Kaliningrad Oblast, Kaliningrad, Teatralnaya Str. 33A

Die Informationen auf dieser Website stellen kein öffentliches Angebot dar. 
Produktabbildungen können vom Original abweichen.`,
  },
  {
    locale: 'zh_cn',
    value: `© 2024—2026 Fictitious Company LLC

OGRN 12345, INN 12345

236000, 加里宁格勒州, 加里宁格勒市, 剧院街33A号

本网站上的信息不构成公开要约。

产品图片可能与实物有所不同。`,
  },
]

const channels: Channel[] = [{
  id: 'moscow',
  selectorTitle: [
    {
      locale: 'ru',
      value: 'Москва',
    },
    {
      locale: 'en',
      value: 'Moscow',
    },
    {
      locale: 'ka',
      value: 'მოსკოვი',
    },
    {
      locale: 'de',
      value: 'Moskau',
    },
    {
      locale: 'zh_cn',
      value: '莫斯科',
    },
  ],
  title: [
    {
      locale: 'ru',
      value: 'Вкус на бегу в Москве',
    },
    {
      locale: 'en',
      value: 'Taste on the run in Moscow',
    },
    {
      locale: 'ka',
      value: 'გასინჯვა მოსკოვში',
    },
    {
      locale: 'de',
      value: 'Geschmackserlebnisse für unterwegs in Moskau',
    },
    {
      locale: 'zh_cn',
      value: '在莫斯科享受便捷的味觉体验',
    },
  ],
  description: [
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
    {
      locale: 'de',
      value: 'Genießen Sie einzigartige Geschmackserlebnisse und eine angenehme Atmosphäre',
    },
    {
      locale: 'zh_cn',
      value: '享受独特的口味和愉悦的氛围',
    },
  ],
  url: 'https://demo.nextorders.space/moscow',
  timeZone: '+03:00',
  isActive: true,
  deliveryByCourier: {
    isAvailable: true,
    conditions: [
      {
        locale: 'ru',
        value: `Доставка осуществляется в течение 1-2 часов после оформления заказа.

Минимальная сумма заказа для бесплатной доставки составляет 1500 руб.

Стоимость доставки рассчитывается в зависимости от расстояния до пункта выдачи или адреса доставки и может составлять от 0 до 1000 руб.

Заказ может быть оплачен при получении наличными или картой.

В случае отмены заказа или изменения его условий доставка оплачивается в полном объеме.

Заведение оставляет за собой право отказать в доставке в случае большого количества заказов или технических проблем.`,
      },
      {
        locale: 'en',
        value: `Delivery is carried out within 1-2 hours after placing an order.

The minimum order amount for free delivery is 1500 rubles.

The cost of delivery is calculated depending on the distance to the delivery point or delivery address and can be from 0 to 1000 rubles.

The order can be paid upon receipt in cash or by card.

In case of canceling the order or changing its conditions, delivery is paid in full.

The institution reserves the right to refuse delivery in case of a large number of orders or technical problems.`,
      },
      {
        locale: 'ka',
        value: `მიწოდება ხორციელდება შეკვეთის განთავსებიდან 1-2 საათის განმავლობაში.

უფასო მიწოდების მინიმალური შეკვეთის ოდენობაა 1500 რუბლი.

მიწოდების ღირებულება გამოითვლება მიწოდების წერტილამდე ან მიწოდების მისამართამდე მანძილის მიხედვით და შეიძლება იყოს 0-დან 1000 რუბლამდე.

შეკვეთის გადახდა შესაძლებელია მიღებისთანავე ნაღდი ფულით ან ბარათით.

შეკვეთის გაუქმების ან მისი პირობების შეცვლის შემთხვევაში, მიწოდება სრულად იხდის.

დაწესებულება იტოვებს უფლებას უარი თქვას მიწოდებაზე შეკვეთების დიდი რაოდენობის ან ტექნიკური პრობლემების შემთხვევაში.`,
      },
      {
        locale: 'de',
        value: `Die Lieferung erfolgt innerhalb von 1–2 Stunden nach Bestelleingang.

Der Mindestbestellwert für kostenlose Lieferung beträgt 1500 Rubel.

Die Lieferkosten richten sich nach der Entfernung zum Lieferort bzw. zur Lieferadresse und betragen zwischen 0 und 1000 Rubel.

Die Bezahlung kann bei Erhalt bar oder per Karte erfolgen.

Bei Stornierung oder Änderung der Bestellung ist der volle Lieferpreis zu entrichten.

Das Unternehmen behält sich das Recht vor, die Lieferung bei hohem Bestellaufkommen oder technischen Problemen zu verweigern.`,
      },
      {
        locale: 'zh_cn',
        value: `下单后1-2小时内发货。

订单金额满1500卢布即可享受免运费。

运费根据送货地点或送货地址的距离计算, 费用范围为0至1000卢布。

订单可在收货时以现金或银行卡支付。

如需取消订单或更改订单内容，需支付全额运费。

如遇订单量过大或出现技术问题，本机构保留拒绝发货的权利。`,
      },
    ],
    minAmountForDelivery: 800,
    schedule: deliverySchedule,
    paymentMethods: paymentMethodsForDelivery,
  },
  selfPickup: {
    isAvailable: true,
    conditions: [
      {
        locale: 'ru',
        value: `При самовывозе заказ будет готов к получению в течение 1–2 часов с момента оформления. 

Для самовывоза нет требования к минимальной сумме заказа — вы можете оформить заказ на любую сумму. Самовынос осуществляется бесплатно, дополнительная плата за него не взимается. 

Оплатить заказ вы можете при получении как наличными, так и банковской картой. В случае отмены заказа или внесения в него изменений предварительная оплата, если она была произведена, возвращается вам полностью. 

Заведение вправе отказать в предоставлении услуги самовывоза при высокой загруженности или возникновении технических неполадок, влияющих на обработку заказов.`,
      },
      {
        locale: 'en',
        value: `For in-store pickup, your order will be ready for pickup within 1-2 hours of placing it.

There is no minimum order amount for in-store pickup—you can order any amount. In-store pickup is free, and there is no additional charge.

You can pay for your order upon pickup in cash or by credit card. If you cancel or change your order, your prepayment, if any, will be refunded in full.

The establishment reserves the right to refuse in-store pickup if it is overbooked or if technical issues affect order processing.`,
      },
      {
        locale: 'ka',
        value: `მაღაზიაში ასაღებად, თქვენი შეკვეთა მზად იქნება ასაღებად მისი განთავსებიდან 1-2 საათში.

მაღაზიაში ასაღებად მინიმალური შეკვეთის ოდენობა არ არსებობს - შეგიძლიათ შეუკვეთოთ ნებისმიერი თანხა. მაღაზიაში ასაღებად მომსახურება უფასოა და დამატებითი გადასახადი არ არის.

შეკვეთის გადახდა შეგიძლიათ ნაღდი ფულით ან საკრედიტო ბარათით აღებისას. თუ შეკვეთას გააუქმებთ ან შეცვლით, თქვენი წინასწარი გადახდა, თუ ასეთი მოხდა, სრულად დაგიბრუნდებათ.

დაწესებულებას უფლება აქვს უარი თქვას მაღაზიაში ასაღებად, თუ ის გადატვირთულია ან თუ ტექნიკური პრობლემები გავლენას ახდენს შეკვეთის დამუშავებაზე.`,
      },
      {
        locale: 'de',
        value: `Bei Abholung im Geschäft ist Ihre Bestellung innerhalb von 1–2 Stunden abholbereit.

Es gibt keinen Mindestbestellwert für die Abholung im Geschäft – Sie können beliebig viel bestellen. Die Abholung ist kostenlos und es fallen keine zusätzlichen Gebühren an.

Sie können Ihre Bestellung bei Abholung bar oder mit Kreditkarte bezahlen. Wenn Sie Ihre Bestellung stornieren oder ändern, wird Ihre Vorauszahlung, falls vorhanden, vollständig zurückerstattet.

Das Geschäft behält sich das Recht vor, die Abholung im Geschäft abzulehnen, falls es überbucht ist oder technische Probleme die Bestellabwicklung beeinträchtigen.`,
      },
      {
        locale: 'zh_cn',
        value: `选择店内自提，您的订单将在下单后 1-2 小时内准备好。

店内自提没有最低消费金额限制，您可以订购任意金额。店内自提免费，不收取任何额外费用。

您可以在取货时使用现金或信用卡付款。如果您取消或更改订单，我们将全额退还您的预付款（如有）。

如果店内自提订单已满或出现技术问题影响订单处理，本店保留拒绝自提订单的权利。`,
      },
    ],
    schedule: selfPickupSchedule,
    warehouses: [
      {
        id: 'kitchen-1',
        title: [
          {
            locale: 'en',
            value: 'Kolotushkina 12',
          },
          {
            locale: 'ru',
            value: 'Колотушкина 12',
          },
          {
            locale: 'ka',
            value: 'კოლოტუშკინა 12',
          },
          {
            locale: 'de',
            value: 'Kolotushkina 12',
          },
          {
            locale: 'zh_cn',
            value: 'Kolotushkina 12',
          },
        ],
        address: {
          street: [
            {
              locale: 'en',
              value: 'Kolotushkina 12',
            },
            {
              locale: 'ru',
              value: 'ул. Колотушкина, 12',
            },
            {
              locale: 'ka',
              value: 'კოლოტუშკინა 12',
            },
            {
              locale: 'de',
              value: 'Kolotushkina 12',
            },
            {
              locale: 'zh_cn',
              value: 'Kolotushkina 12',
            },
          ],
        },
      },
      {
        id: 'kitchen-2',
        title: [
          {
            locale: 'en',
            value: 'Lenina 46',
          },
          {
            locale: 'ru',
            value: 'Ленина 46',
          },
          {
            locale: 'ka',
            value: 'ლენინა 46',
          },
          {
            locale: 'de',
            value: 'Lenina 46',
          },
          {
            locale: 'zh_cn',
            value: 'Lenina 46',
          },
        ],
        address: {
          street: [
            {
              locale: 'en',
              value: 'Lenina 46',
            },
            {
              locale: 'ru',
              value: 'ул. Ленина, 46',
            },
            {
              locale: 'ka',
              value: 'ლენინა 46',
            },
            {
              locale: 'de',
              value: 'Lenina 46',
            },
            {
              locale: 'zh_cn',
              value: 'Lenina 46',
            },
          ],
        },
      },
    ],
    paymentMethods: paymentMethodsForSelfPickup,
  },
  copyright,
  links,
},
{
  id: 'peterburg',
  selectorTitle: [
    {
      locale: 'ru',
      value: 'Санкт-Петербург',
    },
    {
      locale: 'en',
      value: 'Saint Petersburg',
    },
    {
      locale: 'ka',
      value: 'სანქტ-პეტერბურგი',
    },
    {
      locale: 'de',
      value: 'Sankt Petersburg',
    },
    {
      locale: 'zh_cn',
      value: '圣彼得堡',
    },
  ],
  title: [
    {
      locale: 'ru',
      value: 'Вкус на бегу в Санкт-Петербурге',
    },
    {
      locale: 'en',
      value: 'Taste on the run in Saint Petersburg',
    },
    {
      locale: 'ka',
      value: 'გასინჯეთ სანქტ-პეტერბურგში',
    },
    {
      locale: 'de',
      value: 'Geschmackserlebnisse für unterwegs in Sankt Petersburg',
    },
    {
      locale: 'zh_cn',
      value: '在圣彼得堡享受便捷的美食之旅',
    },
  ],
  description: [
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
    {
      locale: 'de',
      value: 'Genießen Sie einzigartige Geschmackserlebnisse und eine angenehme Atmosphäre',
    },
    {
      locale: 'zh_cn',
      value: '享受独特的口味和愉悦的氛围',
    },
  ],
  url: 'https://demo.nextorders.space/peterburg',
  timeZone: '+03:00',
  isActive: true,
  deliveryByCourier: {
    isAvailable: true,
    conditions: undefined,
    minAmountForDelivery: 1000,
    paymentMethods: [],
  },
  selfPickup: {
    isAvailable: true,
    conditions: undefined,
    paymentMethods: [],
  },
  copyright,
  links,
}]

export function handleGetChannels(): GatewayGetChannelsResponse {
  return {
    ok: true,
    type: 'getChannels',
    result: channels,
  }
}

export function handleGetDeliveryByCourierStatus({ channelId }: GatewayGetDeliveryByCourierStatusRequest['body']): GatewayGetDeliveryByCourierStatusResponse {
  const channel = channels.find((channel) => channel.id === channelId)
  if (!channel || !channel.deliveryByCourier?.schedule) {
    throw createError({
      statusCode: 404,
      message: 'Channel not found',
    })
  }

  return {
    ok: true,
    type: 'getDeliveryByCourierStatus',
    result: getOpeningStatus(channel.deliveryByCourier.schedule, channel.timeZone),
  }
}

export function handleGetSelfPickupStatus({ channelId }: GatewayGetSelfPickupStatusRequest['body']): GatewayGetSelfPickupStatusResponse {
  const channel = channels.find((channel) => channel.id === channelId)
  if (!channel || !channel.selfPickup?.schedule) {
    throw createError({
      statusCode: 404,
      message: 'Channel not found',
    })
  }

  return {
    ok: true,
    type: 'getSelfPickupStatus',
    result: getOpeningStatus(channel.selfPickup.schedule, channel.timeZone),
  }
}

export function handleGetTimeSlots(data: GatewayGetTimeSlotsRequest['body']): GatewayGetTimeSlotsResponse {
  const channel = channels.find((channel) => channel.id === data.channelId)
  if (!channel) {
    throw createError({
      statusCode: 404,
      message: 'Channel not found',
    })
  }

  const shedule = data.deliveryMethod === 'deliveryByCourier' ? channel.deliveryByCourier.schedule : channel.selfPickup.schedule
  if (!shedule) {
    throw createError({
      statusCode: 404,
      message: 'Schedule not found',
    })
  }

  return {
    ok: true,
    type: 'getTimeSlots',
    result: getTimeSlotsFromNow(shedule, channel.timeZone),
  }
}
