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
    value: `© 2024—2025 ООО «Выдуманная компания»
ОГРН 12345, ИНН 12345
236000, Калининградская область, г. Калининград, ул. Театральная, д. 33А

Информация на сайте не является публичной офертой.
Изображения товаров могут отличаться от оригинала.`,
  },
  {
    locale: 'en',
    value: `© 2024—2025 Fictitious Company LLC
OGRN 12345, INN 12345
236000, Kaliningrad Oblast, Kaliningrad, Teatralnaya St., 33A

The information on this website does not constitute a public offer.
Product images may differ from the original.`,
  },
  {
    locale: 'ka',
    value: `© 2024—2025 შპს «ფიქტიუშენ კომპანი»
OGRN 12345, INN 12345
236000, კალინინგრადის ოლქი, კალინინგრადი, თეატრალნაიას ქ., 33A

ამ ვებსაიტზე განთავსებული ინფორმაცია არ წარმოადგენს საჯარო შეთავაზებას.
პროდუქტის სურათები შეიძლება განსხვავდებოდეს ორიგინალისგან.`,
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
