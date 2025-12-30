import type { GatewayGetMenuResponse, Menu, Product } from '@nextorders/food-schema'

const burgers: Product[] = [
  {
    id: 'wild-west-burger',
    slug: 'wild-west-burger',
    title: [
      {
        locale: 'en',
        value: 'The Wild West Burger',
      },
      {
        locale: 'ru',
        value: 'Бургер "Приключения на Диком Западе"',
      },
      {
        locale: 'ka',
        value: 'ველური დასავლეთის ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Get ready for a trip to the Wild West with our incredible burger! Tender meat, juicy vegetables and crispy bun will take you to the world of cowboys and Indians. Dive into the atmosphere of adventure and enjoy the real taste of the Wild West!',
      },
      {
        locale: 'ru',
        value: 'Приготовьтесь к путешествию на Дикий Запад с нашим невероятным бургером! Нежное мясо, сочные овощи и хрустящая булочка перенесут вас в мир ковбоев и индейцев. Окунитесь в атмосферу приключений и насладитесь настоящим вкусом Дикого Запада!',
      },
      {
        locale: 'ka',
        value: 'მოემზადეთ ველურ დასავლეთში მოგზაურობისთვის ჩვენი წარმოუდგენელი ბურგერით! ნაზი ხორცი, წვნიანი ბოსტნეული და ხრაშუნა ფუნთუშა კოვბოებისა და ინდიელების სამყაროში გადაგიყვანთ. ჩაეფლეთ თავგადასავლების ატმოსფეროში და დატკბით ველური დასავლეთის ნამდვილი გემოთი!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'wild-west-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'wild-west-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/uwzbro4gxzhq462kul2fqy5d/iyov98wlym3mdi5sh1rvevk5.webp',
          },
          {
            id: 'wild-west-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/uwzbro4gxzhq462kul2fqy5d/zg1dmehb0la0424thhpd6s4z.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 370,
        gross: 670,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 285.5,
          protein: 12.3,
          fat: 16.8,
          carbohydrate: 22.1,
        },
      },
    ],
  },
  {
    id: 'tender-clouds-burger',
    slug: 'tender-clouds-burger',
    title: [
      {
        locale: 'en',
        value: 'The Tender Clouds Burger',
      },
      {
        locale: 'ru',
        value: 'Бургер "Нежные облака"',
      },
      {
        locale: 'ka',
        value: 'ნაზი ღრუბლების ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Feel the tenderness of clouds with our special burger! The combination of airy blue cheese, juicy vegetables and flavorful meat will not leave you indifferent. The perfect balance of flavor and pleasure in every bite!',
      },
      {
        locale: 'ru',
        value: 'Почувствуйте нежность облаков с нашим специальным бургером! Сочетание воздушного голубого сыра, сочных овощей и ароматного мяса не оставит вас равнодушными. Идеальный баланс вкуса и удовольствия в каждом кусочке!',
      },
      {
        locale: 'ka',
        value: 'იგრძენით ღრუბლების სინაზე ჩვენი განსაკუთრებული ბურგერით! ჰაეროვანი ლურჯი ყველის, წვნიანი ბოსტნეულისა და არომატული ხორცის კომბინაცია გულგრილს არ დაგტოვებთ. გემოსა და სიამოვნების იდეალური ბალანსი ყოველ ლუკმაში!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'tender-clouds-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'tender-clouds-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/spwe24ppe2n7ukxuc471zlrh/nu27ewqsbxdjdxbxwndbcjjz.webp',
          },
          {
            id: 'tender-clouds-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/spwe24ppe2n7ukxuc471zlrh/acy7mayab2kcg3h2308ptgjc.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 370,
        gross: 690,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 265.2,
          protein: 10.8,
          fat: 14.5,
          carbohydrate: 23.7,
        },
      },
    ],
  },
  {
    id: 'veggie-burger',
    slug: 'veggie-burger',
    title: [
      {
        locale: 'en',
        value: 'Vegetarian paradise: veggie burger',
      },
      {
        locale: 'ru',
        value: 'Рай для вегетарианцев: вегетарианский бургер',
      },
      {
        locale: 'ka',
        value: 'ვეგეტარიანული სამოთხე: ვეგეტარიანული ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Enjoy a vegetarian paradise with our special veggie burger! A delicious combination of vegetables, herbs and nutritious ingredients will give you an unforgettable taste experience. Feel the freshness of nature in every bite of our veggie burger!',
      },
      {
        locale: 'ru',
        value: 'Насладитесь вегетарианским раем с нашим специальным вегетарианским бургером! Восхитительное сочетание овощей, трав и питательных ингредиентов подарит вам незабываемые вкусовые ощущения. Почувствуйте свежесть природы в каждом кусочке нашего вегетарианского бургера!',
      },
      {
        locale: 'ka',
        value: 'ისიამოვნეთ ვეგეტარიანული სამოთხით ჩვენი განსაკუთრებული ვეგეტარიანული ბურგერით! ბოსტნეულის, მწვანილისა და მკვებავი ინგრედიენტების გემრიელი კომბინაცია დაუვიწყარ გემოს გამოცდილებას მოგცემთ. იგრძენით ბუნების სიახლე ჩვენი ვეგეტარიანული ბურგერის ყოველ ლუკმაში!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'veggie-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'veggie-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/h061mthzlq23w3qsmzmdwmft/gue80i6e9u6g28mmbrlffhy4.webp',
          },
          {
            id: 'veggie-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/h061mthzlq23w3qsmzmdwmft/c17rc9duh6cvmnpdu3p9ctx0.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 360,
        gross: 550,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 245.0,
          protein: 8.7,
          fat: 11.2,
          carbohydrate: 27.5,
        },
      },
    ],
  },
  {
    id: 'delicious-onion-burger',
    slug: 'delicious-onion-burger',
    title: [
      {
        locale: 'en',
        value: 'Delicious onion burger',
      },
      {
        locale: 'ru',
        value: 'Вкуснейший бургер с луком',
      },
      {
        locale: 'ka',
        value: 'გემრიელი ხახვის ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover an amazing world of taste with our burger, where tender meat, fresh vegetables and aromatic fried onions come together in a unique combination. Savor every bite and immerse yourself in the atmosphere of true gastronomic pleasure!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительный мир вкуса с нашим бургером, где нежное мясо, свежие овощи и ароматный жареный лук соединяются в уникальном сочетании. Смакуйте каждый кусочек и погрузитесь в атмосферу истинного гастрономического удовольствия!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ გემოების საოცარი სამყარო ჩვენი ბურგერით, სადაც ნაზი ხორცი, ახალი ბოსტნეული და არომატული შემწვარი ხახვი უნიკალურ კომბინაციაში ერწყმის ერთმანეთს. დააგემოვნეთ ყოველი ლუკმა და ჩაეფლეთ ნამდვილი გასტრონომიული სიამოვნების ატმოსფეროში!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'delicious-onion-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'delicious-onion-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/utrtpaw2kef8vwvgm82q2ze1/h29twuipkkp6xijo6osrfto9.webp',
          },
          {
            id: 'delicious-onion-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/utrtpaw2kef8vwvgm82q2ze1/at7i2q9dzqql3vzfdbiybb40.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 350,
        gross: 690,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 295.0,
          protein: 11.8,
          fat: 17.3,
          carbohydrate: 24.2,
        },
      },
    ],
  },
  {
    id: 'galactic-burger',
    slug: 'galactic-burger',
    title: [
      {
        locale: 'en',
        value: 'Galactic burger',
      },
      {
        locale: 'ru',
        value: 'Галактический бургер',
      },
      {
        locale: 'ka',
        value: 'გალაქტიკური ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the galactic burger - an incredible combination of juicy vegetables, appetizing meat and crispy bun. Experience the unique taste of distant stars and immerse yourself in the world of space adventures right at the table!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя галактический бургер - невероятное сочетание сочных овощей, аппетитного мяса и хрустящей булочки. Ощутите неповторимый вкус далеких звезд и погрузитесь в мир космических приключений прямо за столом!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ გალაქტიკური ბურგერი - წვნიანი ბოსტნეულის, მადისაღმძვრელი ხორცისა და ხრაშუნა ფუნთუშას წარმოუდგენელი კომბინაცია. განიცადეთ შორეული ვარსკვლავების უნიკალური გემო და ჩაეფლეთ კოსმოსური თავგადასავლების სამყაროში პირდაპირ მაგიდასთან!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'galactic-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'galactic-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/f57p82y7lye27qgk7f1sp4g8/cy1p4ig7ifybqsjhpu12oalt.webp',
          },
          {
            id: 'galactic-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/f57p82y7lye27qgk7f1sp4g8/j07pe5ns3s6gcbzz3je5a2n1.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 290,
        gross: 640,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 310.5,
          protein: 13.2,
          fat: 18.7,
          carbohydrate: 25.4,
        },
      },
    ],
  },
  {
    id: 'mushroom-boom-burger',
    slug: 'mushroom-boom-burger',
    title: [
      {
        locale: 'en',
        value: 'Mushroom boom: a burger with a secret',
      },
      {
        locale: 'ru',
        value: 'Грибной бум: бургер с секретом',
      },
      {
        locale: 'ka',
        value: 'სოკოს ბუმი: ბურგერი საიდუმლოთი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover a wonderful world of flavor with our new burger! Tender meat, juicy mushrooms and crispy bun - this combination will surely win your heart. Experience the unique flavor of a real mushroom delight!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительный мир вкуса с нашим новым бургером! Нежное мясо, сочные грибы и хрустящая булочка - это сочетание непременно покорит ваше сердце. Ощутите неповторимый вкус настоящего грибного удовольствия!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ გემოების საოცარი სამყარო ჩვენი ახალი ბურგერით! ნაზი ხორცი, წვნიანი სოკო და ხრაშუნა ფუნთუშა - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. განიცადეთ ნამდვილი სოკოს სიამოვნების უნიკალური გემო!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'mushroom-boom-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'mushroom-boom-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/elprxmcw52e81pr5nfcz55sw/qwccjk40vpncji8exv0bdpjx.webp',
          },
          {
            id: 'mushroom-boom-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/elprxmcw52e81pr5nfcz55sw/musq7d68m6ogv6sg1eet19jh.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 370,
        gross: 480,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 275.0,
          protein: 9.8,
          fat: 15.2,
          carbohydrate: 26.3,
        },
      },
    ],
  },
  {
    id: 'jardines-burger',
    slug: 'jardines-burger',
    title: [
      {
        locale: 'en',
        value: 'Jardine\'s Burger',
      },
      {
        locale: 'ru',
        value: 'Бургер "Жардин"',
      },
      {
        locale: 'ka',
        value: 'ჯარდინის ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique flavor of a juicy grilled turkey cutlet combined with a crispy bun and fresh vegetables. Tender turkey meat complemented with aromatic spices and spices will be a real discovery for meat lovers!',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус сочной котлеты из индейки, приготовленной на гриле, в сочетании с хрустящей булочкой и свежими овощами. Нежное мясо индейки, дополненное ароматными специями и пряностями, станет настоящим открытием для любителей мяса!',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ წვნიანი შემწვარი ინდაურის კატლეტის უნიკალური არომატი ხრაშუნა ფუნთუშასთან და ახალ ბოსტნეულთან ერთად. ნაზი ინდაურის ხორცი, არომატული სანელებლებითა და სანელებლებით, ნამდვილი აღმოჩენა იქნება ხორცის მოყვარულთათვის!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'jardines-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'jardines-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/vriq6id8ygb6t71ik19t8wc7/ofpte62xxzx5d0plv8ofy75u.webp',
          },
          {
            id: 'jardines-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/vriq6id8ygb6t71ik19t8wc7/zuqb9tbc2ahsf0dqyoxo5aw1.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 340,
        gross: 690,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 255.0,
          protein: 10.2,
          fat: 12.8,
          carbohydrate: 26.5,
        },
      },
    ],
  },
  {
    id: 'hot-texas-burger',
    slug: 'hot-texas-burger',
    title: [
      {
        locale: 'en',
        value: 'Hot Texas burger',
      },
      {
        locale: 'ru',
        value: 'Горячий техасский бургер',
      },
      {
        locale: 'ka',
        value: 'ცხელი ტეხასური ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Your way to the real Texas flavor! Tender meat, fresh vegetables and an appetizing bun - this burger will definitely not leave you indifferent!',
      },
      {
        locale: 'ru',
        value: 'Ваш путь к настоящему техасскому вкусу! Нежное мясо, свежие овощи и аппетитная булочка - этот бургер точно не оставит вас равнодушным!',
      },
      {
        locale: 'ka',
        value: 'თქვენი გზა ნამდვილი ტეხასური არომატისკენ! ნაზი ხორცი, ახალი ბოსტნეული და მადისაღმძვრელი ფუნთუშა - ეს ბურგერი ნამდვილად არ დაგტოვებთ გულგრილს!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'hot-texas-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'hot-texas-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/nc9l7q5xp1y7d5hs520r7w4s/ckjoazoer49zyxxgcm3xc7ew.webp',
          },
          {
            id: 'hot-texas-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/nc9l7q5xp1y7d5hs520r7w4s/t4lzihp962zsut4fp4ixrg97.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 350,
        gross: 720,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 325.0,
          protein: 14.5,
          fat: 20.1,
          carbohydrate: 23.8,
        },
      },
    ],
  },
  {
    id: 'tender-bacon-burger',
    slug: 'tender-bacon-burger',
    title: [
      {
        locale: 'en',
        value: 'Tender bacon burger',
      },
      {
        locale: 'ru',
        value: 'Нежный бургер с беконом',
      },
      {
        locale: 'ka',
        value: 'ნაზი ბეკონის ბურგერი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Dive into the tenderness of bacon: try our burger! Fragrant bacon, juicy patty and fresh vegetables - an explosion of flavor for real gourmets.',
      },
      {
        locale: 'ru',
        value: 'Окунитесь в нежность бекона: попробуйте наш бургер! Ароматный бекон, сочная котлета и свежие овощи - взрыв вкуса для настоящих гурманов.',
      },
      {
        locale: 'ka',
        value: 'ჩაეფლეთ ბეკონის სინაზეში: გასინჯეთ ჩვენი ბურგერი! არომატული ბეკონი, წვნიანი კატლეტი და ახალი ბოსტნეული - არომატების აფეთქება ნამდვილი გურმანებისთვის.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'tender-bacon-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'ru',
            value: 'Стандарт',
          },
          {
            locale: 'ka',
            value: 'სტანდარტული',
          },
        ],
        images: [
          {
            id: 'tender-bacon-burger-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/jnpl1k1ccqlenfcxh2ad47cx/jzi8p2px4qq5e5vcjyn4ybx0.webp',
          },
          {
            id: 'tender-bacon-burger-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/jnpl1k1ccqlenfcxh2ad47cx/nstzknrddtiql0708xiciaqb.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 340,
        gross: 680,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 305.0,
          protein: 12.4,
          fat: 19.3,
          carbohydrate: 21.7,
        },
      },
    ],
  },
]

const snacks: Product[] = [
  {
    id: 'wings-of-happiness',
    slug: 'wings-of-happiness',
    title: [
      {
        locale: 'en',
        value: 'Wings of Happiness: Buffalo Hot Breath',
      },
      {
        locale: 'ru',
        value: 'Крылья счастья: Горячее дыхание Баффало',
      },
      {
        locale: 'ka',
        value: 'ბედნიერების ფრთები: ბუფალოს ცხელი სუნთქვა',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Buffalo Fried Wings - spicy, juicy and incredibly delicious! The perfect choice for a fun party.',
      },
      {
        locale: 'ru',
        value: 'Жареные крылышки «Баффало» - пряные, сочные и невероятно вкусные! Идеальный выбор для веселой вечеринки.',
      },
      {
        locale: 'ka',
        value: 'ბუფალოს შემწვარი ფრთები - ცხარე, წვნიანი და წარმოუდგენლად გემრიელი! იდეალური არჩევანია გართობის წვეულებისთვის.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'wings-of-happiness-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'wings-of-happiness-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/geoz5efvfrtpbku5myow8ot6/zlqgkzwsovvcj4bjdohob5q0.webp',
          },
          {
            id: 'wings-of-happiness-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/geoz5efvfrtpbku5myow8ot6/t515cd60u0wzjkdxed11htfu.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 380,
        gross: 890,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 290.0,
          protein: 18.5,
          fat: 21.0,
          carbohydrate: 4.2,
        },
      },
    ],
  },
  {
    id: 'vegetable-bounty',
    slug: 'vegetable-bounty',
    title: [
      {
        locale: 'en',
        value: 'Vegetable bounty',
      },
      {
        locale: 'ru',
        value: 'Овощное изобилие',
      },
      {
        locale: 'ka',
        value: 'ბოსტნეულის სიუხვე',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Enjoy the flavor of fresh vegetables in our vegetable quesadilla! It is the perfect combination of juicy ingredients seasoned with aromatic spices. Don\'t miss the opportunity to try our vegetable quesadilla and get energized with bright flavors!',
      },
      {
        locale: 'ru',
        value: 'Насладитесь вкусом свежих овощей в нашей овощной кесадилье! Это идеальное сочетание сочных ингредиентов, приправленных ароматными специями. Не упустите возможность попробовать нашу овощную кесадилью и зарядиться энергией ярких вкусов!',
      },
      {
        locale: 'ka',
        value: 'დატკბით ახალი ბოსტნეულის არომატით ჩვენს ბოსტნეულის კესადილიაში! ეს არის წვნიანი ინგრედიენტების იდეალური კომბინაცია, რომელიც არომატული სანელებლებით არის შეზავებული. არ გამოტოვოთ შესაძლებლობა, გასინჯოთ ჩვენი ბოსტნეულის კესადილია და მიიღოთ ენერგია ნათელი არომატებით!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'vegetable-bounty-1',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'პორტისთვის',
          },
        ],
        images: [
          {
            id: 'vegetable-bounty-1-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/o2s1qy9woevy5jlur0rjapge/qdjhb8ymm5ku7zkezzvwocbf.webp',
          },
          {
            id: 'vegetable-bounty-1-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/o2s1qy9woevy5jlur0rjapge/gc10ndq5xirqv8pmdh06pp7e.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 320,
        gross: 760,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 215.0,
          protein: 6.8,
          fat: 10.2,
          carbohydrate: 24.5,
        },
      },
    ],
  },
  {
    id: 'cheeseburgerettes',
    slug: 'cheeseburgerettes',
    title: [
      {
        locale: 'en',
        value: 'Cheeseburgerettes',
      },
      {
        locale: 'ru',
        value: 'Чизбургерята',
      },
      {
        locale: 'ka',
        value: 'ჩიზბურგერები',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Tender mini cheeseburgers - the perfect snack for the whole family! Delicious mini-burgers with real American cheese, juicy patty and fresh vegetables. Feel the atmosphere of a real American restaurant right here and now!',
      },
      {
        locale: 'ru',
        value: 'Нежные мини-чизбургеры - идеальный перекус для всей семьи! Вкуснейшие мини-бургеры с настоящим американским сыром, сочной котлетой и свежими овощами. Почувствуйте атмосферу настоящего американского ресторана прямо здесь и сейчас!',
      },
      {
        locale: 'ka',
        value: 'ნაზი მინი ჩიზბურგერები - იდეალური საჭმელი მთელი ოჯახისთვის! გემრიელი მინი ბურგერები ნამდვილი ამერიკული ყველით, წვნიანი კატლეტით და ახალი ბოსტნეულით. იგრძენით ნამდვილი ამერიკული რესტორნის ატმოსფერო აქ და ახლა!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'cheeseburgerettes-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'cheeseburgerettes-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/t1sxbe8qflit6m2l2r3wfr84/hffyl2ilqmwx3bgknenc8kic.webp',
          },
          {
            id: 'cheeseburgerettes-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/t1sxbe8qflit6m2l2r3wfr84/zv369hlyflc0cpj9v6fpkdxx.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 280,
        gross: 670,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 290.0,
          protein: 11.5,
          fat: 17.0,
          carbohydrate: 22.0,
        },
      },
    ],
  },
  {
    id: 'hot-cheese-and-bacon',
    slug: 'hot-cheese-and-bacon',
    title: [
      {
        locale: 'en',
        value: 'Hot cheese and bacon',
      },
      {
        locale: 'ru',
        value: 'Горячий сыр с беконом',
      },
      {
        locale: 'ka',
        value: 'ცხელი ყველი და ბეკონი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of French fries with cheddar cheese and bacon in our restaurant! This is the perfect combination for real gourmets.',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус картофеля фри с сыром чеддер и беконом в нашем ресторане! Это идеальное сочетание для настоящих гурманов.',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ კარტოფილი ფრის უნიკალური გემო ჩედარის ყველით და ბეკონით ჩვენს რესტორანში! ეს ნამდვილი გურმანებისთვის იდეალური კომბინაციაა.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'hot-cheese-and-bacon-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'hot-cheese-and-bacon-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/n9373apfpvv6nt1cy4syzhoz/bjr8xgxc8lqg8a8diccrqul9.webp',
          },
          {
            id: 'hot-cheese-and-bacon-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/n9373apfpvv6nt1cy4syzhoz/l2kw7dlw7vog3oebooy893np.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 260,
        gross: 560,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 320.0,
          protein: 7.8,
          fat: 21.5,
          carbohydrate: 24.2,
        },
      },
    ],
  },
  {
    id: 'cheese-adventures',
    slug: 'cheese-adventures',
    title: [
      {
        locale: 'en',
        value: 'Cheese adventures: nachos with three kinds of cheese',
      },
      {
        locale: 'ru',
        value: 'Сырные приключения: начос с тремя видами сыра',
      },
      {
        locale: 'ka',
        value: 'ყველის თავგადასავლები: ნაჩოსი სამი სახეობის ყველით',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to plunge into the atmosphere of a real Mexican holiday with our unique nachos with cheese! Tender combination of three kinds of cheese and crispy corn tortilla will not leave indifferent even the most sophisticated gourmet. Serve with hot sauce or salsa - the perfect combination for an unforgettable evening with friends and family.',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас окунуться в атмосферу настоящего мексиканского праздника с нашими уникальными начос с сыром! Нежное сочетание трех видов сыра и хрустящей кукурузной тортильи не оставит равнодушным даже самого искушенного гурмана. Подавайте с острым соусом или сальсой - это идеальное сочетание для незабываемого вечера в кругу друзей и семьи.',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით, ჩაეფლოთ ნამდვილი მექსიკური დღესასწაულის ატმოსფეროში ჩვენი უნიკალური ნაჩოსით ყველით! სამი სახეობის ყველის ნაზი კომბინაცია და ხრაშუნა სიმინდის ტორტილია გულგრილს არ დატოვებს ყველაზე დახვეწილ გურმანსაც კი. მიირთვით ცხარე სოუსთან ან სალსასთან ერთად - იდეალური კომბინაცია მეგობრებთან და ოჯახთან ერთად დაუვიწყარი საღამოსთვის.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'cheese-adventures-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'cheese-adventures-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/qxnfnd0vnczdhqikk6hj1gjh/y7c5udk2g17ubqfwvkrx8knd.webp',
          },
          {
            id: 'cheese-adventures-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/qxnfnd0vnczdhqikk6hj1gjh/tt88a75qegorcugnj0snkifh.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 280,
        gross: 620,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 310.0,
          protein: 9.2,
          fat: 18.5,
          carbohydrate: 26.8,
        },
      },
    ],
  },
  {
    id: 'bacon-extravaganza',
    slug: 'bacon-extravaganza',
    title: [
      {
        locale: 'en',
        value: 'Bacon extravaganza',
      },
      {
        locale: 'ru',
        value: 'Беконная феерия',
      },
      {
        locale: 'ka',
        value: 'ბეკონის ექსტრავაგანზა',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover a new level of pleasure with our specialty pizzadilla! Thin dough, appetizing bacon and cheese - this combination is sure to win your heart. Don\'t miss the opportunity to enjoy this incredible taste in the cozy atmosphere of our restaurant!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя новый уровень удовольствия с нашей фирменной пиццадильей! Тонкое тесто, аппетитный бекон и сыр - это сочетание обязательно покорит ваше сердце. Не упустите возможность насладиться этим невероятным вкусом в уютной атмосфере нашего ресторана!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ სიამოვნების ახალი დონე ჩვენი სპეციალური პიცადილასთან ერთად! თხელი ცომი, მადისაღმძვრელი ბეკონი და ყველი - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. არ გამოტოვოთ შესაძლებლობა, დატკბეთ ამ წარმოუდგენელი გემოთი ჩვენი რესტორნის მყუდრო ატმოსფეროში!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'bacon-extravaganza-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'bacon-extravaganza-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ebi7bbxm3je2ryojb08sxqse/ebsvezz9qwgax1bdrie4txvy.webp',
          },
          {
            id: 'bacon-extravaganza-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ebi7bbxm3je2ryojb08sxqse/n0u1vm4plva6izrmtp5ejd0a.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 330,
        gross: 720,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 295.0,
          protein: 11.8,
          fat: 16.2,
          carbohydrate: 27.4,
        },
      },
    ],
  },
  {
    id: 'the-magic-threads-of-gouda',
    slug: 'the-magic-threads-of-gouda',
    title: [
      {
        locale: 'en',
        value: 'The magic threads of Gouda',
      },
      {
        locale: 'ru',
        value: 'Волшебные нити Гауды',
      },
      {
        locale: 'ka',
        value: 'გუდას ჯადოსნური ძაფები',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover an amazing world of flavors with gourmet cheeses that will give you an unforgettable experience with every bite.',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительный мир вкусов с изысканными сырами, которые подарят вам незабываемые впечатления с каждым кусочком.',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ არომატების საოცარი სამყარო გურმანული ყველებით, რომლებიც ყოველი ლუკმის შემდეგ დაუვიწყარ გამოცდილებას მოგანიჭებთ.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'the-magic-threads-of-gouda-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'the-magic-threads-of-gouda-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ewpllhys5iiekvj8lg5r3129/kzo8aljfyyhlwbad72gn4ukt.webp',
          },
          {
            id: 'the-magic-threads-of-gouda-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ewpllhys5iiekvj8lg5r3129/f3k614b3ekadn3a1i633thu9.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 160,
        gross: 470,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 356.0,
          protein: 24.9,
          fat: 27.8,
          carbohydrate: 2.2,
        },
      },
    ],
  },
  {
    id: 'flaming-quesadilla',
    slug: 'flaming-quesadilla',
    title: [
      {
        locale: 'en',
        value: 'Flaming quesadilla: Spicy chicken slices',
      },
      {
        locale: 'ru',
        value: '"Пламенная кесадилья": острые ломтики курицы',
      },
      {
        locale: 'ka',
        value: 'ცეცხლოვანი კესადილია: ცხარე ქათმის ნაჭრები',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to enjoy exquisite chicken quesadilla in our restaurant! Tender chicken fillet, fragrant spices and golden cheese - this combination will surely win your heart. Served with vegetables and salsa sauce. Feel the unique taste of real Mexican cuisine in the cozy atmosphere of our restaurant!',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас насладиться изысканной куриной кесадильей в нашем ресторане! Нежное куриное филе, ароматные специи и золотистый сыр - это сочетание непременно покорит ваше сердце. Подается с овощами и соусом сальса. Почувствуйте неповторимый вкус настоящей мексиканской кухни в уютной атмосфере нашего ресторана!',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით ჩვენს რესტორანში დააგემოვნოთ დახვეწილი ქათმის კესადილია! ნაზი ქათმის ფილე, არომატული სანელებლები და ოქროსფერი ყველი - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. მიირთმევენ ბოსტნეულთან და სალსას სოუსთან ერთად. იგრძენით ნამდვილი მექსიკური სამზარეულოს უნიკალური გემო ჩვენი რესტორნის მყუდრო ატმოსფეროში!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'flaming-quesadilla-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'flaming-quesadilla-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/z6q4v581rc6yd59qgl49zorn/uisxyj3hm1te8559li54a6rl.webp',
          },
          {
            id: 'flaming-quesadilla-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/z6q4v581rc6yd59qgl49zorn/kj5gd6bc8ml8crngyjqfgig1.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 370,
        gross: 760,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 285.0,
          protein: 16.3,
          fat: 14.8,
          carbohydrate: 21.5,
        },
      },
    ],
  },
]

const desserts: Product[] = [
  {
    id: 'apple-extravaganza',
    slug: 'apple-extravaganza',
    title: [
      {
        locale: 'en',
        value: 'Apple extravaganza',
      },
      {
        locale: 'ru',
        value: 'Яблочная феерия',
      },
      {
        locale: 'ka',
        value: 'ვაშლის ექსტრავაგანზა',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'A delicious pie that will give you an unforgettable taste journey! Tender dough, fragrant apples and crispy crust - this combination will surely win your heart. Plunge into the holiday atmosphere with this incredible pie!',
      },
      {
        locale: 'ru',
        value: 'Вкуснейший пирог, который подарит вам незабываемое вкусовое путешествие! Нежное тесто, ароматные яблоки и хрустящая корочка - это сочетание непременно покорит ваше сердце. Окунитесь в атмосферу праздника с этим невероятным пирогом!',
      },
      {
        locale: 'ka',
        value: 'გემრიელი ღვეზელი, რომელიც დაუვიწყარ გემოს მოგზაურობას გაჩუქებთ! ნაზი ცომი, არომატული ვაშლი და ხრაშუნა ცომი - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. ჩაეფლეთ სადღესასწაულო ატმოსფეროში ამ წარმოუდგენელი ღვეზელით!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'apple-extravaganza-1',
        title: [
          {
            locale: 'en',
            value: 'Slice',
          },
          {
            locale: 'ru',
            value: 'Кусок',
          },
          {
            locale: 'ka',
            value: 'ნაჭერი',
          },
        ],
        images: [
          {
            id: 'apple-extravaganza-1-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/apple/3edcaa4ae19111f0aec34e8fe71c43ee_1-min.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 200,
        gross: 250,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 245.0,
          protein: 3.2,
          fat: 9.8,
          carbohydrate: 36.5,
        },
      },
      {
        id: 'apple-extravaganza-2',
        title: [
          {
            locale: 'en',
            value: '2 Slices',
          },
          {
            locale: 'ru',
            value: '2 куска',
          },
          {
            locale: 'ka',
            value: '2 ნაჭერი',
          },
        ],
        images: [
          {
            id: 'apple-extravaganza-2-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/apple/81fdc62ee19111f0aec34e8fe71c43ee_1-min.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 400,
        gross: 410,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 245.0,
          protein: 3.2,
          fat: 9.8,
          carbohydrate: 36.5,
        },
      },
      {
        id: 'apple-extravaganza-3',
        title: [
          {
            locale: 'en',
            value: 'Whole pie',
          },
          {
            locale: 'ru',
            value: 'Весь пирог',
          },
          {
            locale: 'ka',
            value: 'მთლიანი ღვეზელი',
          },
        ],
        images: [
          {
            id: 'apple-extravaganza-3-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/apple/1b7ebd50e19111f0b1c6ee904fec9547_1-min.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 1000,
        gross: 930,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 245.0,
          protein: 3.2,
          fat: 9.8,
          carbohydrate: 36.5,
        },
      },
    ],
  },
  {
    id: 'new-york-chic-cheesecake',
    slug: 'new-york-chic-cheesecake',
    title: [
      {
        locale: 'en',
        value: 'New York chic cheesecake',
      },
      {
        locale: 'ru',
        value: 'Чизкейк "Нью-Йоркский шик"',
      },
      {
        locale: 'ka',
        value: 'ნიუ-იორკული შიკ ჩიზქეიქი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of a real New York cheesecake! The delicate combination of cream cheese, crunchy base and fresh fruit will give you an unforgettable taste sensation. Prepared with love, this dessert will be a perfect end to your evening or a great addition to a friendly meeting.',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус настоящего нью-йоркского чизкейка! Нежное сочетание сливочного сыра, хрустящей основы и свежих фруктов подарит вам незабываемые вкусовые ощущения. Приготовленный с любовью, этот десерт станет прекрасным завершением вашего вечера или отличным дополнением к дружеской встрече.',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ ნამდვილი ნიუ-იორკული ჩიზქეიქის უნიკალური გემო! ნაღების ყველის, ხრაშუნა ცომისა და ახალი ხილის ნაზი კომბინაცია დაუვიწყარ გემოს შეგრძნებას მოგანიჭებთ. სიყვარულით მომზადებული ეს დესერტი თქვენი საღამოს იდეალურ დასასრულს ან მეგობრული შეხვედრის შესანიშნავ დამატებას წარმოადგენს.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'new-york-chic-cheesecake-standard',
        title: [
          {
            locale: 'en',
            value: 'Slice',
          },
          {
            locale: 'ru',
            value: 'Кусок',
          },
          {
            locale: 'ka',
            value: 'ნაჭერი',
          },
        ],
        images: [
          {
            id: 'new-york-chic-cheesecake-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ev9xnnyqkvvgaf7gho1kzb4j/ae7vq4eyx6s91d4b9t0ni3rr.webp',
          },
          {
            id: 'new-york-chic-cheesecake-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ev9xnnyqkvvgaf7gho1kzb4j/k84a651swcim7r7x8zii54hd.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 145,
        gross: 290,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 320.0,
          protein: 5.8,
          fat: 22.4,
          carbohydrate: 26.7,
        },
      },
    ],
  },
  {
    id: 'mango-swirl',
    slug: 'mango-swirl',
    title: [
      {
        locale: 'en',
        value: 'Mango swirl',
      },
      {
        locale: 'ru',
        value: 'Манговый вихрь',
      },
      {
        locale: 'ka',
        value: 'მანგოს სვირინგი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience a real tropical explosion of flavor with our unique dessert! A delicate combination of ripe mango, creamy cream and crispy cookies will give you an unforgettable pleasure. Plunge into the atmosphere of warmth and sunshine with every bite of this amazing treat.',
      },
      {
        locale: 'ru',
        value: 'Испытайте настоящий тропический взрыв вкуса с нашим уникальным десертом! Нежное сочетание спелого манго, сливочного крема и хрустящего печенья подарит вам незабываемое удовольствие. Окунитесь в атмосферу тепла и солнечного света с каждым кусочком этого удивительного лакомства.',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ ნამდვილი ტროპიკული არომატის აფეთქება ჩვენი უნიკალური დესერტით! მწიფე მანგოს, ნაღებისებრი კრემისა და ხრაშუნა ორცხობილების ნაზი კომბინაცია დაუვიწყარ სიამოვნებას მოგანიჭებთ. ამ საოცარი ნუგბარის ყოველი ლუკმისას ჩაეფლეთ სითბოსა და მზის ატმოსფეროში.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'mango-swirl-standard',
        title: [
          {
            locale: 'en',
            value: 'Slice',
          },
          {
            locale: 'ru',
            value: 'Кусок',
          },
          {
            locale: 'ka',
            value: 'ნაჭერი',
          },
        ],
        images: [
          {
            id: 'mango-swirl-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ukb4gwwienmjgddaqyoimxmz/g7v74j9dlwcss43t1nmsy5al.webp',
          },
          {
            id: 'mango-swirl-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ukb4gwwienmjgddaqyoimxmz/bm0xwtcu8y2qar1jsc4pyllm.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 230,
        gross: 560,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 285.0,
          protein: 3.1,
          fat: 15.8,
          carbohydrate: 32.4,
        },
      },
    ],
  },
]

const hotMeals: Product[] = [
  {
    id: 'chicken-and-shrimp',
    slug: 'chicken-and-shrimp',
    title: [
      {
        locale: 'en',
        value: 'Secret passion: chicken and shrimp',
      },
      {
        locale: 'ru',
        value: 'Тайная страсть: курица и креветки',
      },
      {
        locale: 'ka',
        value: 'საიდუმლო გატაცება: ქათამი და კრევეტები',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Chicken and shrimps - a delicate and exquisite combination for real gourmets. Roasted chicken fillet and tiger shrimps in cream sauce will be a perfect main course or addition to a side dish. Delight yourself and your loved ones with this delicious and flavorful hot dish!',
      },
      {
        locale: 'ru',
        value: 'Курица и креветки - нежное и изысканное сочетание для настоящих гурманов. Обжаренное куриное филе и тигровые креветки в сливочном соусе станут прекрасным основным блюдом или дополнением к гарниру. Порадуйте себя и своих близких этим вкусным и ароматным горячим блюдом!',
      },
      {
        locale: 'ka',
        value: 'ქათამი და კრევეტები - ნაზი და დახვეწილი კომბინაცია ნამდვილი გურმანებისთვის. შემწვარი ქათმის ფილე და ნაღების სოუსში შეზავებული ვეფხვისებრი კრევეტები იდეალური ძირითადი კერძი ან გარნირის დამატება იქნება. გაახარეთ საკუთარი თავი და თქვენი საყვარელი ადამიანები ამ გემრიელი და არომატული ცხელი კერძით!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'chicken-and-shrimp-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'chicken-and-shrimp-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/o19jh34uh5djqhyra1r6ifhg/lcnxct0p6xj4ga65nhfx480p.webp',
          },
          {
            id: 'chicken-and-shrimp-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/o19jh34uh5djqhyra1r6ifhg/tatjctr8541nks6a1sj9ioku.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 560,
        gross: 1100,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 215.0,
          protein: 18.2,
          fat: 12.4,
          carbohydrate: 2.1,
        },
      },
    ],
  },
  {
    id: 'triumphant-trio',
    slug: 'triumphant-trio',
    title: [
      {
        locale: 'en',
        value: '"Triumphant Trio": a three-egg dish',
      },
      {
        locale: 'ru',
        value: '"Триумфальное трио": блюдо из трех яиц',
      },
      {
        locale: 'ka',
        value: '„ტრიუმფალური ტრიო“: სამი კვერცხისგან შემდგარი კერძი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'A perfect combination of three eggs fried to a golden crust, with aromatic herbs and delicate cream. This dish will be a real discovery for your palate and will give you an unforgettable experience!',
      },
      {
        locale: 'ru',
        value: 'Идеальное сочетание трех яиц, обжаренных до золотистой корочки, с ароматными травами и нежным кремом. Это блюдо станет настоящим открытием для вашего вкуса и подарит вам незабываемые впечатления!',
      },
      {
        locale: 'ka',
        value: 'ოქროსფერ ქერქამდე შემწვარი სამი კვერცხის, არომატული მწვანილებისა და ნაზი ნაღების იდეალური კომბინაცია. ეს კერძი თქვენი გემოვნებისთვის ნამდვილი აღმოჩენა იქნება და დაუვიწყარ გამოცდილებას მოგანიჭებთ!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'triumphant-trio-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'triumphant-trio-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/zbfk6ms85ra5zcb5dcg3jwkk/im312tvr3zh03v269dn33abu.webp',
          },
          {
            id: 'triumphant-trio-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/zbfk6ms85ra5zcb5dcg3jwkk/y3mfvavfhon6k9qaqaa48g6g.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 320,
        gross: 460,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 245.0,
          protein: 13.8,
          fat: 20.1,
          carbohydrate: 1.2,
        },
      },
    ],
  },
  {
    id: 'firebird-fajitas',
    slug: 'firebird-fajitas',
    title: [
      {
        locale: 'en',
        value: 'Firebird fajitas',
      },
      {
        locale: 'ru',
        value: 'Фахитас "Жар-птица"',
      },
      {
        locale: 'ka',
        value: 'ცეცხლოვანი ჩიტის ფახიტასი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of Mexico with our flavorful chicken fajitas! Tender chicken meat fried with vegetables and spices will be a great addition to your favorite tortillas. Enjoy the bright flavor and get energized by the sun!',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус Мексики с нашими ароматными куриными фахитас! Нежное куриное мясо, обжаренное с овощами и специями, станет отличным дополнением к вашим любимым тортильям. Наслаждайтесь ярким вкусом и заряжайтесь энергией солнца!',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ მექსიკის უნიკალური გემო ჩვენი არომატული ქათმის ფახიტასით! ბოსტნეულითა და სანელებლებით შემწვარი ნაზი ქათმის ხორცი შესანიშნავი დამატება იქნება თქვენი საყვარელი ტორტილიებისთვის. დატკბით ნათელი არომატით და მიიღეთ ენერგია მზისგან!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'firebird-fajitas-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'firebird-fajitas-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/a85j7h0w2gag9vba1ueiqchg/yw4ju4247pctosszpjj7tuj7.webp',
          },
          {
            id: 'firebird-fajitas-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/a85j7h0w2gag9vba1ueiqchg/qu0j0eaf0qa6h0n3pp7womhh.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 680,
        gross: 1290,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 185.0,
          protein: 14.2,
          fat: 9.8,
          carbohydrate: 10.5,
        },
      },
    ],
  },
  {
    id: 'grilled-salmon-with-chimichurri',
    slug: 'grilled-salmon-with-chimichurri',
    title: [
      {
        locale: 'en',
        value: 'Grilled salmon with chimichurri',
      },
      {
        locale: 'ru',
        value: 'Лосось на гриле с чимичурри',
      },
      {
        locale: 'ka',
        value: 'გრილზე შემწვარი ორაგული ჩიმიჩურით',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience an explosion of flavor with our hot dish Grilled Salmon with chimichurri! Flavorful spiced salmon is grilled until golden and then served with a refreshing chimichurri sauce. The perfect balance of flavor and aroma for your enjoyment!',
      },
      {
        locale: 'ru',
        value: 'Испытайте взрыв вкуса с нашим горячим блюдом «Лосось на гриле с чимичурри»! Ароматный лосось со специями обжаривается на гриле до золотистого цвета, а затем подается с освежающим соусом чимичурри. Идеальный баланс вкуса и аромата для вашего удовольствия!',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ არომატების აფეთქება ჩვენი ცხელი კერძით: გრილზე შემწვარი ორაგული ჩიმიჩურით! არომატული სანელებლებით შეზავებული ორაგული იწვება ოქროსფერ შეფერილობამდე და შემდეგ მიირთმევა გამაგრილებელ ჩიმიჩურის სოუსთან ერთად. გემოსა და არომატის იდეალური ბალანსი თქვენი სიამოვნებისთვის!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'grilled-salmon-with-chimichurri-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'grilled-salmon-with-chimichurri-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/w50416t27ia8mmtnv9c5tenf/rppbthi0yn3lkyrxo6gqfwpy.webp',
          },
          {
            id: 'grilled-salmon-with-chimichurri-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/w50416t27ia8mmtnv9c5tenf/peps6bmovg7lwima8ohltrnh.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 395,
        gross: 1890,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 195.0,
          protein: 22.4,
          fat: 11.3,
          carbohydrate: 2.1,
        },
      },
    ],
  },
  {
    id: 'seafood-kingdom',
    slug: 'seafood-kingdom',
    title: [
      {
        locale: 'en',
        value: 'Seafood Kingdom',
      },
      {
        locale: 'ru',
        value: 'Королевство морепродуктов',
      },
      {
        locale: 'ka',
        value: 'ზღვის პროდუქტების სამეფო',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Tender sautéed cod and shrimps - an exquisite combination of seafood flavors in a fragrant tomato sauce. This hot dish will become a real decoration of your table and will delight your guests!',
      },
      {
        locale: 'ru',
        value: 'Нежная соте из трески и креветок - изысканное сочетание вкусов морепродуктов в ароматном томатном соусе. Это горячее блюдо станет настоящим украшением вашего стола и приведет в восторг ваших гостей!',
      },
      {
        locale: 'ka',
        value: 'ნაზი შემწვარი ვირთევზა და კრევეტები - ზღვის პროდუქტების არომატების დახვეწილი კომბინაცია არომატულ პომიდვრის სოუსში. ეს ცხელი კერძი თქვენი სუფრის ნამდვილ დეკორაციად იქცევა და სტუმრებს აღაფრთოვანებს!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'seafood-kingdom-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'seafood-kingdom-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ops6nhjn1b64emyhjb2znkwt/be2qt63zw0lwuhgj97byth4p.webp',
          },
          {
            id: 'seafood-kingdom-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ops6nhjn1b64emyhjb2znkwt/rrr21lv093vnvvha1r0e234k.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 460,
        gross: 1790,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 175.0,
          protein: 16.8,
          fat: 8.2,
          carbohydrate: 7.5,
        },
      },
    ],
  },
  {
    id: 'jambalaya-with-chicken',
    slug: 'jambalaya-with-chicken',
    title: [
      {
        locale: 'en',
        value: 'Jambalaya with chicken and shrimp in kanjun style',
      },
      {
        locale: 'ru',
        value: 'Джамбалайя с курицей и креветками в стиле канжун',
      },
      {
        locale: 'ka',
        value: 'ჯამბალაია ქათმის ხორცითა და კრევეტებით კანჯუნის სტილში',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the unique flavor of jambalaya with chicken and shrimps in Kanjun style! This hot dish combines French and Spanish culinary traditions and will please even the most demanding gourmets. Try it and see for yourself!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя неповторимый вкус джамбалайи с курицей и креветками по-канжунски! Это горячее блюдо сочетает в себе французские и испанские кулинарные традиции и порадует даже самых требовательных гурманов. Попробуйте и убедитесь сами!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ჯამბალაიას უნიკალური არომატი ქათმით და კრევეტებით კანჯუნის სტილში! ეს ცხელი კერძი აერთიანებს ფრანგულ და ესპანურ კულინარიულ ტრადიციებს და მოეწონება ყველაზე მომთხოვნი გურმანებსაც კი. გასინჯეთ და თავად დარწმუნდით!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'jambalaya-with-chicken-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'jambalaya-with-chicken-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/shrnqlr0cfnob02tmv6ejtua/yodhwua24wy2g7arr5jm072q.webp',
          },
          {
            id: 'jambalaya-with-chicken-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/shrnqlr0cfnob02tmv6ejtua/muujn5i21dtldxplfu31ncyc.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 390,
        gross: 990,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 210.0,
          protein: 12.5,
          fat: 9.8,
          carbohydrate: 18.3,
        },
      },
    ],
  },
]

const salads: Product[] = [
  {
    id: 'salad-with-grilled-chicken',
    slug: 'salad-with-grilled-chicken',
    title: [
      {
        locale: 'en',
        value: 'Spicy appetizer: salad with grilled chicken',
      },
      {
        locale: 'ru',
        value: 'Пикантная закуска: салат с курицей-гриль',
      },
      {
        locale: 'ka',
        value: 'ცხარე მადისაღმძვრელი: სალათი შემწვარი ქათმით',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to enjoy a savory appetizer! Our signature salad with grilled chicken is a perfect combination of juicy chicken, fresh vegetables and flavorful sauce. Don\'t miss the opportunity to try this exquisite dish in our restaurant and be energized for the whole day!',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас насладиться пикантной закуской! Наш фирменный салат с курицей-гриль - это идеальное сочетание сочной курицы, свежих овощей и ароматного соуса. Не упустите возможность попробовать это изысканное блюдо в нашем ресторане и зарядиться энергией на весь день!',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით გემრიელი მადისაღმძვრელის დასაგემოვნებლად! ჩვენი ფირმული სალათი შემწვარი ქათმით წვნიანი ქათმის, ახალი ბოსტნეულისა და არომატული სოუსის იდეალური კომბინაციაა. არ გამოტოვოთ შესაძლებლობა, დააგემოვნოთ ეს დახვეწილი კერძი ჩვენს რესტორანში და მთელი დღის განმავლობაში ენერგიით აღსავსე იყოთ!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'salad-with-grilled-chicken-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'salad-with-grilled-chicken-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/kb8pauix6d5zocxusphuqku5/pqmsrfkw9oues9gplhlpiwdr.webp',
          },
          {
            id: 'salad-with-grilled-chicken-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/kb8pauix6d5zocxusphuqku5/z1ujr2llzx514vi7gdjfrxpu.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 340,
        gross: 650,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 165.0,
          protein: 14.8,
          fat: 9.2,
          carbohydrate: 5.1,
        },
      },
    ],
  },
  {
    id: 'fire-whirl-buffalo-chicken-salad',
    slug: 'fire-whirl-buffalo-chicken-salad',
    title: [
      {
        locale: 'en',
        value: '"Fire Whirl": Buffalo Chicken Salad',
      },
      {
        locale: 'ru',
        value: '"Огненный вихрь": Салат с курицей Баффало',
      },
      {
        locale: 'ka',
        value: '„ცეცხლოვანი ტრიალი“: ბუფალოს ქათმის სალათი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to enjoy the exquisite taste of Buffalo chicken salad in our restaurant! Tender chicken meat marinated in spicy sauce is perfectly combined with lettuce leaves, carrots, celery and original blue cheese dressing. This dish will be a real discovery for lovers of spicy and unusual flavor combinations!',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас насладиться изысканным вкусом салата с курицей «Баффало» в нашем ресторане! Нежное куриное мясо, маринованное в пикантном соусе, идеально сочетается с листьями салата, морковью, сельдереем и оригинальной заправкой из голубого сыра. Это блюдо станет настоящим открытием для любителей острых и необычных вкусовых сочетаний!',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით ჩვენს რესტორანში დააგემოვნოთ ბუფალოს ქათმის სალათის დახვეწილი გემო! ცხარე სოუსში მარინირებული ნაზი ქათმის ხორცი იდეალურად ერწყმის სალათის ფურცლებს, სტაფილოს, ნიახურს და ორიგინალურ ცისფერი ყველის სოუსს. ეს კერძი ნამდვილი აღმოჩენა იქნება ცხარე და უჩვეულო არომატული კომბინაციების მოყვარულთათვის!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'fire-whirl-buffalo-chicken-salad-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'fire-whirl-buffalo-chicken-salad-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/z2hy62gsmqt4wyxomhrcu9bs/aa70m84en9msdptlr9ww2b8a.webp',
          },
          {
            id: 'fire-whirl-buffalo-chicken-salad-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/z2hy62gsmqt4wyxomhrcu9bs/vdpzw3rs3910domtrjjgr364.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 320,
        gross: 780,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 195.0,
          protein: 13.4,
          fat: 12.8,
          carbohydrate: 6.2,
        },
      },
    ],
  },
  {
    id: 'charming-shrimp-caesar-salad',
    slug: 'charming-shrimp-caesar-salad',
    title: [
      {
        locale: 'en',
        value: 'Charming shrimp: Caesar salad',
      },
      {
        locale: 'ru',
        value: 'Очаровательные креветки: Салат "Цезарь"',
      },
      {
        locale: 'ka',
        value: 'მომხიბვლელი კრევეტები: კეისრის სალათი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of Caesar salad with shrimps in our restaurant! Tender combination of juicy shrimps, crispy salad leaves and flavorful sauce will win your heart. A perfect choice for a romantic dinner or a friendly meeting.',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус салата «Цезарь» с креветками в нашем ресторане! Нежное сочетание сочных креветок, хрустящих листьев салата и ароматного соуса покорит ваше сердце. Идеальный выбор для романтического ужина или дружеской встречи.',
      },
      {
        locale: 'ka',
        value: 'ჩვენს რესტორანში დააგემოვნეთ კრევეტებით შეზავებული ცეზარის სალათის უნიკალური გემო! წვნიანი კრევეტების, ხრაშუნა სალათის ფოთლებისა და არომატული სოუსის ნაზი კომბინაცია თქვენს გულს მოიგებს. იდეალური არჩევანია რომანტიკული ვახშმისთვის ან მეგობრული შეხვედრისთვის.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'charming-shrimp-caesar-salad-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'charming-shrimp-caesar-salad-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/zj4960h8y8z9s16msmjnmjg1/xz8moqbnr4sjos1du34syr0q.webp',
          },
          {
            id: 'charming-shrimp-caesar-salad-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/zj4960h8y8z9s16msmjnmjg1/f06t5uz2xb8pr9nv1w28hizm.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 240,
        gross: 870,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 210.0,
          protein: 14.5,
          fat: 13.2,
          carbohydrate: 7.8,
        },
      },
    ],
  },
  {
    id: 'barbecue-flip-salad',
    slug: 'barbecue-flip-salad',
    title: [
      {
        locale: 'en',
        value: '"Barbecue Flip": an explosion of flavor and aroma',
      },
      {
        locale: 'ru',
        value: '"Барбекю флип": взрыв вкуса и аромата',
      },
      {
        locale: 'ka',
        value: '„ბარბექიუ ფლიპი“: გემოსა და არომატის აფეთქება',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Try our signature BBQ chicken salad - a perfect combination of juicy chicken, bacon, tomatoes and eggs with BBQ sauce. The delicate taste and flavor of this dish will be remembered for a long time!',
      },
      {
        locale: 'ru',
        value: 'Попробуйте наш фирменный салат с курицей BBQ - идеальное сочетание сочной курицы, бекона, помидоров и яиц с соусом барбекю. Нежный вкус и аромат этого блюда запомнится вам надолго!',
      },
      {
        locale: 'ka',
        value: 'გასინჯეთ ჩვენი ფირმული BBQ ქათმის სალათი - წვნიანი ქათმის, ბეკონის, პომიდვრისა და კვერცხის იდეალური კომბინაცია BBQ სოუსთან ერთად. ამ კერძის ნაზი გემო და არომატი დიდხანს დაგამახსოვრდებათ!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'barbecue-flip-salad-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'barbecue-flip-salad-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/sf2fo6cgk1etjwxws62vvbm3/l6mup9b70rrto1o9uea9kmy5.webp',
          },
          {
            id: 'barbecue-flip-salad-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/sf2fo6cgk1etjwxws62vvbm3/acnwc44ircv7zp8xkirghcha.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 310,
        gross: 680,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 240.0,
          protein: 12.8,
          fat: 16.5,
          carbohydrate: 9.3,
        },
      },
    ],
  },
  {
    id: 'cobbs-chic',
    slug: 'cobbs-chic',
    title: [
      {
        locale: 'en',
        value: 'Cobb\'s chic',
      },
      {
        locale: 'ru',
        value: 'Кобб шик',
      },
      {
        locale: 'ka',
        value: 'კობის შიკი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the exquisite taste of the legendary Cobb salad in our restaurant! This combination of tender chicken, juicy avocado, fresh tomatoes, crispy bacon and fragrant blue cheese will not leave you indifferent. An ideal choice for those who appreciate real American cuisine and want to enjoy the unique flavor.',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя изысканный вкус легендарного салата «Кобб» в нашем ресторане! Это сочетание нежной курицы, сочного авокадо, свежих помидоров, хрустящего бекона и ароматного голубого сыра не оставит вас равнодушными. Идеальный выбор для тех, кто ценит настоящую американскую кухню и хочет насладиться неповторимым вкусом.',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ლეგენდარული კობის სალათის დახვეწილი გემო ჩვენს რესტორანში! ნაზი ქათმის, წვნიანი ავოკადოს, ახალი პომიდვრის, ხრაშუნა ბეკონისა და არომატული ლურჯი ყველის ეს კომბინაცია გულგრილს არ დაგტოვებთ. იდეალური არჩევანია მათთვის, ვინც აფასებს ნამდვილ ამერიკულ სამზარეულოს და სურს დატკბეს უნიკალური არომატით.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'cobbs-chic-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'cobbs-chic-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/uqrzz58v8crz49qgrkk62r3j/ych02tsy4qqi19wzmlmsq2u6.webp',
          },
          {
            id: 'cobbs-chic-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/uqrzz58v8crz49qgrkk62r3j/ywgqrjy23y0e471sj8xgc3k4.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 270,
        gross: 650,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 235.0,
          protein: 11.8,
          fat: 19.2,
          carbohydrate: 6.4,
        },
      },
    ],
  },
  {
    id: 'imperial-caesar',
    slug: 'imperial-caesar',
    title: [
      {
        locale: 'en',
        value: 'Imperial Caesar',
      },
      {
        locale: 'ru',
        value: 'Имперский Цезарь',
      },
      {
        locale: 'ka',
        value: 'იმპერიული კეისარი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of classic Caesar salad in our restaurant! Tender combination of juicy salad leaves, fragrant parmesan and golden croutons seasoned with special Worcester sauce will give you an unforgettable gastronomic pleasure.',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус классического салата «Цезарь» в нашем ресторане! Нежное сочетание сочных листьев салата, ароматного пармезана и золотистых сухариков, приправленных специальным вустерским соусом, подарит вам незабываемое гастрономическое удовольствие.',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ კლასიკური ცეზარის სალათის უნიკალური გემო ჩვენს რესტორანში! წვნიანი სალათის ფოთლების, არომატული პარმეზანისა და ოქროსფერი კრუტონების ნაზი კომბინაცია, რომელიც განსაკუთრებული ვუსტერის სოუსით არის შეზავებული, დაუვიწყარ გასტრონომიულ სიამოვნებას მოგანიჭებთ.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'imperial-caesar-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'imperial-caesar-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/h4o1xsovjqbn45cwivafzvpb/i9eaz3n6j7kgjzupj73gcjb6.webp',
          },
          {
            id: 'imperial-caesar-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/h4o1xsovjqbn45cwivafzvpb/vcxx296g145kjd916ousoili.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 165,
        gross: 620,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 225.0,
          protein: 13.6,
          fat: 15.8,
          carbohydrate: 8.2,
        },
      },
    ],
  },
  {
    id: 'cosmic-explosion-of-flavor',
    slug: 'cosmic-explosion-of-flavor',
    title: [
      {
        locale: 'en',
        value: 'Cosmic explosion of flavor',
      },
      {
        locale: 'ru',
        value: 'Космический взрыв вкуса',
      },
      {
        locale: 'ka',
        value: 'არომატების კოსმიური აფეთქება',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover an amazing combination of fresh vegetables, tender chicken and fragrant spices. Enjoy the unique taste and energize the bright stars on your table!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительное сочетание свежих овощей, нежной курицы и ароматных специй. Насладитесь уникальным вкусом и зарядите энергией ярких звезд на вашем столе!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ახალი ბოსტნეულის, ნაზი ქათმისა და არომატული სანელებლების საოცარი კომბინაცია. დატკბით უნიკალური გემოთი და გაამდიდრეთ თქვენი სუფრის კაშკაშა ვარსკვლავები ენერგიით!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'cosmic-explosion-of-flavor-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'cosmic-explosion-of-flavor-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/onn25f23z7d74vc42m62s2ga/ply4pr8w6ud2m2xhho60t3j4.webp',
          },
          {
            id: 'cosmic-explosion-of-flavor-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/onn25f23z7d74vc42m62s2ga/ly4tuo2j1ado1eqiteq0q5j1.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 240,
        gross: 530,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 155.0,
          protein: 11.2,
          fat: 7.8,
          carbohydrate: 10.4,
        },
      },
    ],
  },
  {
    id: 'greek-oasis-of-flavor',
    slug: 'greek-oasis-of-flavor',
    title: [
      {
        locale: 'en',
        value: 'Greek oasis of flavor',
      },
      {
        locale: 'ru',
        value: 'Греческий оазис вкуса',
      },
      {
        locale: 'ka',
        value: 'არომატების ბერძნული ოაზისი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Greek salad is a classic source of freshness and vitamins. Enjoy the perfect combination of ripe tomatoes, crunchy cucumbers, sweet peppers, red onions and tender olives. Season it all with fragrant olive oil and add original feta - and your table will turn into a real feast of taste!',
      },
      {
        locale: 'ru',
        value: 'Греческий салат - это классический источник свежести и витаминов. Насладитесь идеальным сочетанием спелых помидоров, хрустящих огурцов, сладкого перца, красного лука и нежных оливок. Заправьте все это ароматным оливковым маслом и добавьте оригинальную фету - и ваш стол превратится в настоящий праздник вкуса!',
      },
      {
        locale: 'ka',
        value: 'ბერძნული სალათი სიახლისა და ვიტამინების კლასიკური წყაროა. ისიამოვნეთ მწიფე პომიდვრის, ხრაშუნა კიტრის, ტკბილი წიწაკის, წითელი ხახვისა და ნაზი ზეთისხილის იდეალური კომბინაციით. შეაზავეთ არომატული ზეითუნის ზეთით და დაუმატეთ ორიგინალური ფეტა - და თქვენი სუფრა ნამდვილ გემოს ნადიმად გადაიქცევა!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'greek-oasis-of-flavor-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'greek-oasis-of-flavor-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/txwa77rkoaffvqu5rttfqx6i/sx4pwe6uvx78531edespnm3l.webp',
          },
          {
            id: 'greek-oasis-of-flavor-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/txwa77rkoaffvqu5rttfqx6i/nwx9u6ntusj3ufn06hjen1tt.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 275,
        gross: 560,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 135.0,
          protein: 3.8,
          fat: 10.2,
          carbohydrate: 5.4,
        },
      },
    ],
  },
]

const soups: Product[] = [
  {
    id: 'generous-borscht',
    slug: 'generous-borscht',
    title: [
      {
        locale: 'en',
        value: 'Generous borscht',
      },
      {
        locale: 'ru',
        value: 'Щедрый борщ',
      },
      {
        locale: 'ka',
        value: 'უხვი ბორშტი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'An exquisite dish for true gourmets. Tender meat, fragrant vegetables and thick sour cream create a unique taste that you will remember for a long time.',
      },
      {
        locale: 'ru',
        value: 'Изысканное блюдо для истинных гурманов. Нежное мясо, ароматные овощи и густая сметана создают неповторимый вкус, который вы запомните надолго.',
      },
      {
        locale: 'ka',
        value: 'ნამდვილი გურმანებისთვის დახვეწილი კერძი. ნაზი ხორცი, არომატული ბოსტნეული და სქელი არაჟანი ქმნის უნიკალურ გემოს, რომელიც დიდხანს დაგამახსოვრდებათ.',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'generous-borscht-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'generous-borscht-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ubi2ox88o9u0n2b1kxarwdfp/qrq19yrxo82qdmnif3v3r7sf.webp',
          },
          {
            id: 'generous-borscht-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/ubi2ox88o9u0n2b1kxarwdfp/nmtfpbblfwola52plc8h8g09.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 340,
        gross: 410,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 215.0,
          protein: 12.4,
          fat: 14.8,
          carbohydrate: 6.3,
        },
      },
    ],
  },
  {
    id: 'the-charm-of-the-loire',
    slug: 'the-charm-of-the-loire',
    title: [
      {
        locale: 'en',
        value: 'The charm of the Loire',
      },
      {
        locale: 'ru',
        value: 'Очарование Луары',
      },
      {
        locale: 'ka',
        value: 'ლუარის ხიბლი',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the real French onion soup in our restaurant! Tender creamy broth, golden onions and spicy thyme create a unique flavor combination. Try this exquisite soup and feel the atmosphere of France right here in our cozy place!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя настоящий французский луковый суп в нашем ресторане! Нежный сливочный бульон, золотистый лук и пряный тимьян создают неповторимое вкусовое сочетание. Попробуйте этот изысканный суп и почувствуйте атмосферу Франции прямо здесь, в нашем уютном месте!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ნამდვილი ფრანგული ხახვის წვნიანი ჩვენს რესტორანში! ნაზი კრემისებრი ბულიონი, ოქროსფერი ხახვი და ცხარე თიამი ქმნის უნიკალურ არომატულ კომბინაციას. გასინჯეთ ეს დახვეწილი წვნიანი და იგრძენით საფრანგეთის ატმოსფერო აქ, ჩვენს მყუდრო ადგილას!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'the-charm-of-the-loire-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'the-charm-of-the-loire-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/b29mdjyu22mtbgsehn3r3aqd/ir8e66rc2n0hwqjqn314xxvy.webp',
          },
          {
            id: 'the-charm-of-the-loire-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/b29mdjyu22mtbgsehn3r3aqd/krp9ug06k8kifuhhyupzw8kj.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 290,
        gross: 420,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 145.0,
          protein: 3.2,
          fat: 8.4,
          carbohydrate: 12.6,
        },
      },
    ],
  },
  {
    id: 'friendship-sandwich-club',
    slug: 'friendship-sandwich-club',
    title: [
      {
        locale: 'en',
        value: 'Friendship! Sandwich! Club!',
      },
      {
        locale: 'ru',
        value: 'Дружба! Сэндвич! Клуб!',
      },
      {
        locale: 'ka',
        value: 'მეგობრობა! სენდვიჩი! კლუბი!',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Try our delicious and hearty chicken noodle and bun sandwich! Tender chicken meat, juicy vegetables and crispy bun - a great choice for your lunch or dinner. Experience the unique taste of home cooking in the cozy atmosphere of our restaurant!',
      },
      {
        locale: 'ru',
        value: 'Попробуйте наш вкусный и сытный сэндвич с куриной лапшой и булочкой! Нежное куриное мясо, сочные овощи и хрустящая булочка - отличный выбор для вашего обеда или ужина. Ощутите неповторимый вкус домашней кухни в уютной атмосфере нашего ресторана!',
      },
      {
        locale: 'ka',
        value: 'გასინჯეთ ჩვენი გემრიელი და გულიანი ქათმის ლაფშითა და ფუნთუშით შეზავებული სენდვიჩი! ნაზი ქათმის ხორცი, წვნიანი ბოსტნეული და ხრაშუნა ფუნთუშა - შესანიშნავი არჩევანი თქვენი სადილისა თუ ვახშმისთვის. განიცადეთ ხელნაკეთი კერძების უნიკალური გემო ჩვენი რესტორნის მყუდრო ატმოსფეროში!',
      },
    ],
    isAvailableForPurchase: true,
    variants: [
      {
        id: 'friendship-sandwich-club-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
        ],
        images: [
          {
            id: 'friendship-sandwich-club-standard-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/rjj61it54j5g36rwl80cwvnl/woypsv3ozra98ben43f9yrsm.webp',
          },
          {
            id: 'friendship-sandwich-club-standard-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/rjj61it54j5g36rwl80cwvnl/qduq7sq0e5c0bvb1u81t814w.jpg',
          },
        ],
        weightUnit: 'g',
        weightValue: 510,
        gross: 570,
        net: 0,
        sku: null,
        nutritionFacts: {
          calories: 265.0,
          protein: 10.8,
          fat: 11.4,
          carbohydrate: 29.2,
        },
      },
    ],
  },
]

const categories: Menu['categories'] = [
  {
    id: 'burgers',
    slug: 'burgers',
    title: [
      {
        locale: 'en',
        value: 'Burgers',
      },
      {
        locale: 'ru',
        value: 'Бургеры',
      },
      {
        locale: 'ka',
        value: 'ბურგერები',
      },
    ],
    icon: 'i-fluent-emoji-flat:hamburger',
    products: burgers,
  },
  {
    id: 'hot-meals',
    slug: 'hot-meals',
    title: [
      {
        locale: 'en',
        value: 'Hot Meals',
      },
      {
        locale: 'ru',
        value: 'Горячие блюда',
      },
      {
        locale: 'ka',
        value: 'ცხელი კერძები',
      },
    ],
    icon: 'i-fluent-emoji-flat:spaghetti',
    products: hotMeals,
  },
  {
    id: 'salads',
    slug: 'salads',
    title: [
      {
        locale: 'en',
        value: 'Salads',
      },
      {
        locale: 'ru',
        value: 'Салаты',
      },
      {
        locale: 'ka',
        value: 'სალათები',
      },
    ],
    icon: 'i-fluent-emoji-flat:green-salad',
    products: salads,
  },
  {
    id: 'soups',
    slug: 'soups',
    title: [
      {
        locale: 'en',
        value: 'Soups',
      },
      {
        locale: 'ru',
        value: 'Супы',
      },
      {
        locale: 'ka',
        value: 'სუპები',
      },
    ],
    icon: 'i-fluent-emoji-flat:pot-of-food',
    products: soups,
  },
  {
    id: 'snacks',
    slug: 'snacks',
    title: [
      {
        locale: 'en',
        value: 'Snacks',
      },
      {
        locale: 'ru',
        value: 'Закуски',
      },
      {
        locale: 'ka',
        value: 'სასუსნავები',
      },
    ],
    icon: 'i-fluent-emoji-flat:sandwich',
    products: snacks,
  },
  {
    id: 'desserts',
    slug: 'desserts',
    title: [
      {
        locale: 'en',
        value: 'Desserts',
      },
      {
        locale: 'ru',
        value: 'Десерты',
      },
      {
        locale: 'ka',
        value: 'დესერტები',
      },
    ],
    icon: 'i-fluent-emoji-flat:shortcake',
    products: desserts,
  },
]

const menu: Menu = {
  id: 'default-menu',
  title: [
    {
      locale: 'en',
      value: 'Default Menu',
    },
    {
      locale: 'ru',
      value: 'Обычное меню',
    },
    {
      locale: 'ka',
      value: 'ნაგულისხმევი მენიუ',
    },
  ],
  slug: 'default-menu',
  isActive: true,
  categories,
}

export function handleGetMenu(): GatewayGetMenuResponse {
  return {
    ok: true,
    type: 'getMenu',
    result: menu,
  }
}
