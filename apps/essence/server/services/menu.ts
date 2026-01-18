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
        locale: 'el',
        value: 'Το Μπέργκερ της Άγριας Δύσης',
      },
      {
        locale: 'es',
        value: 'La hamburguesa del salvaje oeste',
      },
      {
        locale: 'fr',
        value: 'Le Burger du Far West',
      },
      {
        locale: 'it',
        value: 'L\'hamburger del selvaggio West',
      },
      {
        locale: 'ru',
        value: 'Бургер "Приключения на Диком Западе"',
      },
      {
        locale: 'ka',
        value: 'ველური დასავლეთის ბურგერი',
      },
      {
        locale: 'de',
        value: 'Der Wildwest-Burger',
      },
      {
        locale: 'zh_cn',
        value: '西部汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Get ready for a trip to the Wild West with our incredible burger! Tender meat, juicy vegetables and crispy bun will take you to the world of cowboys and Indians. Dive into the atmosphere of adventure and enjoy the real taste of the Wild West!',
      },
      {
        locale: 'el',
        value: 'Ετοιμαστείτε για ένα ταξίδι στην Άγρια Δύση με το απίστευτο burger μας! Τρυφερό κρέας, ζουμερά λαχανικά και τραγανό ψωμάκι θα σας ταξιδέψουν στον κόσμο των καουμπόηδων και των Ινδιάνων. Βουτήξτε στην ατμόσφαιρα της περιπέτειας και απολαύστε την πραγματική γεύση της Άγριας Δύσης!',
      },
      {
        locale: 'es',
        value: '¡Prepárate para un viaje al Salvaje Oeste con nuestra increíble hamburguesa! Carne tierna, verduras jugosas y pan crujiente te transportarán al mundo de los vaqueros y los indios. ¡Sumérgete en la atmósfera de aventura y disfruta del auténtico sabor del Salvaje Oeste!',
      },
      {
        locale: 'fr',
        value: 'Préparez-vous à un voyage au cœur du Far West avec notre incroyable burger ! Viande tendre, légumes juteux et pain croustillant vous transporteront dans l\'univers des cowboys et des Indiens. Plongez dans une ambiance d\'aventure et savourez les saveurs authentiques du Far West!',
      },
      {
        locale: 'it',
        value: 'Preparati per un viaggio nel Selvaggio West con il nostro incredibile hamburger! Carne tenera, verdure succose e panino croccante ti porteranno nel mondo dei cowboy e degli indiani. Immergiti nell\'atmosfera dell\'avventura e gusta il vero sapore del Selvaggio West!',
      },
      {
        locale: 'ru',
        value: 'Приготовьтесь к путешествию на Дикий Запад с нашим невероятным бургером! Нежное мясо, сочные овощи и хрустящая булочка перенесут вас в мир ковбоев и индейцев. Окунитесь в атмосферу приключений и насладитесь настоящим вкусом Дикого Запада!',
      },
      {
        locale: 'ka',
        value: 'მოემზადეთ ველურ დასავლეთში მოგზაურობისთვის ჩვენი წარმოუდგენელი ბურგერით! ნაზი ხორცი, წვნიანი ბოსტნეული და ხრაშუნა ფუნთუშა კოვბოებისა და ინდიელების სამყაროში გადაგიყვანთ. ჩაეფლეთ თავგადასავლების ატმოსფეროში და დატკბით ველური დასავლეთის ნამდვილი გემოთი!',
      },
      {
        locale: 'de',
        value: 'Machen Sie sich bereit für eine Reise in den Wilden Westen mit unserem unglaublichen Burger! Zartes Fleisch, saftiges Gemüse und eine knusprige Brötchenhülle werden Sie in die Welt der Cowboys und Indianer versetzen. Tauchen Sie ein in die Atmosphäre der Abenteuer und genießen Sie den wahren Geschmack des Wilden Westens!',
      },
      {
        locale: 'zh_cn',
        value: '准备好用我们美味的汉堡开启一段狂野西部之旅吧！鲜嫩多汁的牛肉饼、爽口的蔬菜和酥脆的面包，带你进入牛仔和印第安人的世界。沉浸在冒险的氛围中，尽享真正的西部风味！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'wild-west-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        video: {
          id: 'wild-west-burger-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/wild-west-burger-min.mp4',
        },
        weightUnit: 'g',
        weightValue: 370,
        price: 670,
        sku: null,
        nutritionFacts: {
          calories: 285.5,
          protein: 12.3,
          fat: 16.8,
          carbohydrate: 22.1,
        },
      },
    ],
    composition: {
      ingredients: [
        {
          title: [
            {
              locale: 'en',
              value: 'Beef cutlet',
            },
            {
              locale: 'el',
              value: 'Μοσχαρίσια μπριζόλα',
            },
            {
              locale: 'es',
              value: 'Corte de carne de res',
            },
            {
              locale: 'fr',
              value: 'Tranche de viande',
            },
            {
              locale: 'it',
              value: 'Cotoletta di manzo',
            },
            {
              locale: 'ru',
              value: 'Котлета из говядины',
            },
            {
              locale: 'ka',
              value: 'გრეინის კოტერა',
            },
            {
              locale: 'de',
              value: 'Rindfleisch',
            },
            {
              locale: 'zh_cn',
              value: '牛肉切块',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Bread with sesame',
            },
            {
              locale: 'el',
              value: 'Ψωμί με σουσάμι',
            },
            {
              locale: 'es',
              value: 'Pan con semilla',
            },
            {
              locale: 'fr',
              value: 'Pain au sésame',
            },
            {
              locale: 'it',
              value: 'Pane con sesamo',
            },
            {
              locale: 'ru',
              value: 'Булочка с кунжутом',
            },
            {
              locale: 'ka',
              value: 'კუნზიტის ბუნე',
            },
            {
              locale: 'de',
              value: 'Brot mit Sesam',
            },
            {
              locale: 'zh_cn',
              value: '有芝麻的面包',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Soft cheese',
            },
            {
              locale: 'el',
              value: 'Μαλακό τυρί',
            },
            {
              locale: 'es',
              value: 'Queso suave',
            },
            {
              locale: 'fr',
              value: 'Fromage doux',
            },
            {
              locale: 'it',
              value: 'Formaggio morbido',
            },
            {
              locale: 'ru',
              value: 'Плавленый сыр',
            },
            {
              locale: 'ka',
              value: 'სუფერი',
            },
            {
              locale: 'de',
              value: 'Weichem Käse',
            },
            {
              locale: 'zh_cn',
              value: '软化的奶酪',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Barbecue sauce',
            },
            {
              locale: 'el',
              value: 'Σάλτσα μπάρμπεκιου',
            },
            {
              locale: 'es',
              value: 'Salsa de barbacoa',
            },
            {
              locale: 'fr',
              value: 'Sauce barbecue',
            },
            {
              locale: 'it',
              value: 'Salsa barbecue',
            },
            {
              locale: 'ru',
              value: 'Соус барбекю',
            },
            {
              locale: 'ka',
              value: 'ბარბაკის სასულე',
            },
            {
              locale: 'de',
              value: 'Barbecue Sauce',
            },
            {
              locale: 'zh_cn',
              value: '烧烤酱',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Pickled cucumbers',
            },
            {
              locale: 'el',
              value: 'Αγγούρια τουρσί',
            },
            {
              locale: 'es',
              value: 'Pepinillos en vinagre',
            },
            {
              locale: 'fr',
              value: 'Cornichons',
            },
            {
              locale: 'it',
              value: 'Cetrioli sottaceto',
            },
            {
              locale: 'ru',
              value: 'Маринованные огурцы',
            },
            {
              locale: 'ka',
              value: 'მარინული აგური',
            },
            {
              locale: 'de',
              value: 'Pickled cucumbers',
            },
            {
              locale: 'zh_cn',
              value: '腌黄瓜',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Lettuce leaves',
            },
            {
              locale: 'el',
              value: 'Φύλλα μαρουλιού',
            },
            {
              locale: 'es',
              value: 'Hojas de lechuga',
            },
            {
              locale: 'fr',
              value: 'Feuilles de salade',
            },
            {
              locale: 'it',
              value: 'Foglie di lattuga',
            },
            {
              locale: 'ru',
              value: 'Листья салата',
            },
            {
              locale: 'ka',
              value: 'სალათის კონები',
            },
            {
              locale: 'de',
              value: 'Salatblaetter',
            },
            {
              locale: 'zh_cn',
              value: '生菜叶',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Tomato',
            },
            {
              locale: 'el',
              value: 'Ντομάτα',
            },
            {
              locale: 'es',
              value: 'Tomate',
            },
            {
              locale: 'fr',
              value: 'Tomate',
            },
            {
              locale: 'it',
              value: 'Pomodoro',
            },
            {
              locale: 'ru',
              value: 'Помидор',
            },
            {
              locale: 'ka',
              value: 'ტომანი',
            },
            {
              locale: 'de',
              value: 'Tomate',
            },
            {
              locale: 'zh_cn',
              value: '番茄',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Onion',
            },
            {
              locale: 'el',
              value: 'Κρεμμύδι',
            },
            {
              locale: 'es',
              value: 'Cebolla',
            },
            {
              locale: 'fr',
              value: 'Oignon',
            },
            {
              locale: 'it',
              value: 'Cipolla',
            },
            {
              locale: 'ru',
              value: 'Лук репчатый',
            },
            {
              locale: 'ka',
              value: 'ლუკი',
            },
            {
              locale: 'de',
              value: 'Zwiebel',
            },
            {
              locale: 'zh_cn',
              value: '洋葱',
            },
          ],
        },
        {
          title: [
            {
              locale: 'en',
              value: 'Bacon',
            },
            {
              locale: 'el',
              value: 'Μπέικον',
            },
            {
              locale: 'es',
              value: 'Bacon',
            },
            {
              locale: 'fr',
              value: 'Bacon',
            },
            {
              locale: 'it',
              value: 'Bacon',
            },
            {
              locale: 'ru',
              value: 'Бекон',
            },
            {
              locale: 'ka',
              value: 'ბაკონი',
            },
            {
              locale: 'de',
              value: 'Bacon',
            },
            {
              locale: 'zh_cn',
              value: '培根',
            },
          ],
        },
      ],
    },
    badges: [
      {
        id: 'new',
        title: [
          {
            locale: 'en',
            value: 'New!',
          },
          {
            locale: 'el',
            value: 'Νέος!',
          },
          {
            locale: 'es',
            value: 'Nuevo!',
          },
          {
            locale: 'fr',
            value: 'Nouveau!',
          },
          {
            locale: 'it',
            value: 'Nuovo!',
          },
          {
            locale: 'ru',
            value: 'Новинка!',
          },
          {
            locale: 'ka',
            value: 'ახალი!',
          },
          {
            locale: 'de',
            value: 'Neu!',
          },
          {
            locale: 'zh_cn',
            value: '新的!',
          },
        ],
      },
    ],
    recommendedProducts: [
      {
        id: 'wild-west-burger-to-cobbs-chic-standard',
        productId: 'cobbs-chic',
        productVariantId: 'cobbs-chic-standard',
      },
      {
        id: 'wild-west-burger-to-mango-swirl-standard',
        productId: 'mango-swirl',
        productVariantId: 'mango-swirl-standard',
      },
      {
        id: 'wild-west-burger-to-cheese-adventures-standard',
        productId: 'cheese-adventures',
        productVariantId: 'cheese-adventures-standard',
      },
      {
        id: 'wild-west-burger-to-cosmic-explosion-of-flavor-standard',
        productId: 'cosmic-explosion-of-flavor',
        productVariantId: 'cosmic-explosion-of-flavor-standard',
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
        locale: 'el',
        value: 'The Tender Clouds Burger',
      },
      {
        locale: 'es',
        value: 'La hamburguesa Tender Clouds',
      },
      {
        locale: 'fr',
        value: 'Le burger Tender Clouds',
      },
      {
        locale: 'it',
        value: 'L\'hamburger Nuvole Soffici',
      },
      {
        locale: 'ru',
        value: 'Бургер "Нежные облака"',
      },
      {
        locale: 'ka',
        value: 'ნაზი ღრუბლების ბურგერი',
      },
      {
        locale: 'de',
        value: 'Der zarte Wolken-Burger',
      },
      {
        locale: 'zh_cn',
        value: '嫩云汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Feel the tenderness of clouds with our special burger! The combination of airy blue cheese, juicy vegetables and flavorful meat will not leave you indifferent. The perfect balance of flavor and pleasure in every bite!',
      },
      {
        locale: 'el',
        value: 'Νιώστε την τρυφερότητα των σύννεφων με το ξεχωριστό μας burger! Ο συνδυασμός από αφράτο μπλε τυρί, ζουμερά λαχανικά και γευστικό κρέας δεν θα σας αφήσει αδιάφορους. Η τέλεια ισορροπία γεύσης και απόλαυσης σε κάθε μπουκιά!',
      },
      {
        locale: 'es',
        value: '¡Siente la ternura de las nubes con nuestra hamburguesa especial! La combinación de queso azul ligero, verduras jugosas y carne sabrosa no te dejará indiferente. ¡El equilibrio perfecto entre sabor y placer en cada bocado!',
      },
      {
        locale: 'fr',
        value: 'Savourez la douceur d\'un nuage avec notre burger spécial ! L\'alliance d\'un fromage bleu aérien, de légumes juteux et d\'une viande savoureuse vous séduira. Un équilibre parfait de saveurs et de plaisir à chaque bouchée!',
      },
      {
        locale: 'it',
        value: 'Senti la morbidezza delle nuvole con il nostro burger speciale! La combinazione di formaggio blu soffice, verdure succose e carne saporita non ti lascerà indifferente. Il perfetto equilibrio tra gusto e piacere in ogni morso!',
      },
      {
        locale: 'ru',
        value: 'Почувствуйте нежность облаков с нашим специальным бургером! Сочетание воздушного голубого сыра, сочных овощей и ароматного мяса не оставит вас равнодушными. Идеальный баланс вкуса и удовольствия в каждом кусочке!',
      },
      {
        locale: 'ka',
        value: 'იგრძენით ღრუბლების სინაზე ჩვენი განსაკუთრებული ბურგერით! ჰაეროვანი ლურჯი ყველის, წვნიანი ბოსტნეულისა და არომატული ხორცის კომბინაცია გულგრილს არ დაგტოვებთ. გემოსა და სიამოვნების იდეალური ბალანსი ყოველ ლუკმაში!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie die Zartheit unseres Spezialburgers! Die Kombination aus luftigem Blauschimmelkäse, saftigem Gemüse und aromatischem Fleisch wird Sie begeistern. Ein perfekter Genuss in jedem Bissen!',
      },
      {
        locale: 'zh_cn',
        value: '感受我们特制汉堡如云朵般柔软的口感！轻盈的蓝纹奶酪、鲜嫩多汁的蔬菜和风味浓郁的肉饼完美融合，定会让您回味无穷。每一口都是味蕾的极致享受！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'tender-clouds-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        video: {
          id: 'tender-clouds-burger-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/tender-clouds-burger.mp4',
        },
        weightUnit: 'g',
        weightValue: 370,
        price: 690,
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
        locale: 'el',
        value: 'Χορτοφαγικός παράδεισος: χορτοφαγικό μπιφτέκι',
      },
      {
        locale: 'es',
        value: 'Paraíso vegetariano: hamburguesa vegetariana',
      },
      {
        locale: 'fr',
        value: 'Le paradis des végétariens: le burger végétarien',
      },
      {
        locale: 'it',
        value: 'Paradiso vegetariano: burger vegetariano',
      },
      {
        locale: 'ru',
        value: 'Рай для вегетарианцев: вегетарианский бургер',
      },
      {
        locale: 'ka',
        value: 'ვეგეტარიანული სამოთხე: ვეგეტარიანული ბურგერი',
      },
      {
        locale: 'de',
        value: 'Vegetarisches Paradies: Veggie-Burger',
      },
      {
        locale: 'zh_cn',
        value: '素食者的天堂：素汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Enjoy a vegetarian paradise with our special veggie burger! A delicious combination of vegetables, herbs and nutritious ingredients will give you an unforgettable taste experience. Feel the freshness of nature in every bite of our veggie burger!',
      },
      {
        locale: 'el',
        value: 'Απολαύστε έναν χορτοφαγικό παράδεισο με το ξεχωριστό χορτοφαγικό μας burger! Ένας νόστιμος συνδυασμός λαχανικών, βοτάνων και θρεπτικών συστατικών θα σας χαρίσει μια αξέχαστη γευστική εμπειρία. Νιώστε τη φρεσκάδα της φύσης σε κάθε μπουκιά του χορτοφαγικού μας burger!',
      },
      {
        locale: 'es',
        value: '¡Disfruta de un paraíso vegetariano con nuestra hamburguesa vegetariana especial! Una deliciosa combinación de verduras, hierbas e ingredientes nutritivos te brindará una experiencia de sabor inolvidable. ¡Siente la frescura de la naturaleza en cada bocado!',
      },
      {
        locale: 'fr',
        value: 'Savourez un paradis végétarien avec notre burger végétarien spécial ! Un délicieux mélange de légumes, d\'herbes et d\'ingrédients nutritifs vous offrira une expérience gustative inoubliable. Goûtez à la fraîcheur de la nature à chaque bouchée de notre burger végétarien !',
      },
      {
        locale: 'it',
        value: 'Goditi un paradiso vegetariano con il nostro speciale veggie burger! Una deliziosa combinazione di verdure, erbe e ingredienti nutrienti ti regalerà un\'esperienza di gusto indimenticabile. Senti la freschezza della natura in ogni morso del nostro veggie burger!',
      },
      {
        locale: 'ru',
        value: 'Насладитесь вегетарианским раем с нашим специальным вегетарианским бургером! Восхитительное сочетание овощей, трав и питательных ингредиентов подарит вам незабываемые вкусовые ощущения. Почувствуйте свежесть природы в каждом кусочке нашего вегетарианского бургера!',
      },
      {
        locale: 'ka',
        value: 'ისიამოვნეთ ვეგეტარიანული სამოთხით ჩვენი განსაკუთრებული ვეგეტარიანული ბურგერით! ბოსტნეულის, მწვანილისა და მკვებავი ინგრედიენტების გემრიელი კომბინაცია დაუვიწყარ გემოს გამოცდილებას მოგცემთ. იგრძენით ბუნების სიახლე ჩვენი ვეგეტარიანული ბურგერის ყოველ ლუკმაში!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie ein vegetarisches Paradies mit unserem speziellen Veggie-Burger! Eine köstliche Kombination aus Gemüse, Kräutern und nahrhaften Zutaten sorgt für ein unvergessliches Geschmackserlebnis. Spüren Sie die Frische der Natur in jedem Bissen unseres Veggie-Burgers!',
      },
      {
        locale: 'zh_cn',
        value: '来品尝我们特制的素食汉堡，享受素食者的天堂！蔬菜、香草和营养食材的美味组合，将带给您难忘的味蕾体验。每一口都让您感受到大自然的清新！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'veggie-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        video: {
          id: 'veggie-burger-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/veggie-burger.mp4',
        },
        weightUnit: 'g',
        weightValue: 360,
        price: 550,
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
    id: 'combo-burgers',
    slug: 'combo-burgers',
    title: [
      {
        locale: 'en',
        value: 'Powerful combo: three burgers',
      },
      {
        locale: 'el',
        value: 'Δυνατός συνδυασμός: τρία μπιφτέκια',
      },
      {
        locale: 'es',
        value: 'Combo potente: tres hamburguesas',
      },
      {
        locale: 'fr',
        value: 'Combo puissant : trois hamburgers',
      },
      {
        locale: 'it',
        value: 'Combinazione potente: tre hamburger',
      },
      {
        locale: 'ru',
        value: 'Мощное комбо: три бургера',
      },
      {
        locale: 'ka',
        value: 'ძლიერი კომბინაცია: სამი ბურგერი',
      },
      {
        locale: 'de',
        value: 'Starke Kombination: drei Burger',
      },
      {
        locale: 'zh_cn',
        value: '强力组合：三个汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Each burger is a perfect harmony of crispy bun, flavorful patty, and fresh ingredients, all brought together in a unique flavor symphony. This combo will be the star of any gathering: whether it\'s a friendly evening, a picnic, or simply a feast for the senses. Indulge in the pleasure—order your combo now and get a triple helping of gastronomic delight!',
      },
      {
        locale: 'el',
        value: 'Κάθε burger είναι μια τέλεια αρμονία από τραγανό ψωμάκι, γευστικό μπιφτέκι και φρέσκα υλικά, όλα συνδυασμένα σε μια μοναδική συμφωνία γεύσεων. Αυτός ο συνδυασμός θα είναι το αστέρι κάθε συγκέντρωσης: είτε πρόκειται για μια φιλική βραδιά, ένα πικνίκ, είτε απλώς για μια γιορτή των αισθήσεων. Αφεθείτε στην απόλαυση - παραγγείλτε τον συνδυασμό σας τώρα και απολαύστε μια τριπλή μερίδα γαστρονομικής απόλαυσης!',
      },
      {
        locale: 'es',
        value: 'Cada hamburguesa es la armonía perfecta de pan crujiente, carne sabrosa e ingredientes frescos, todo ello combinado en una sinfonía de sabores única. Este combo será la estrella de cualquier reunión: ya sea una velada con amigos, un picnic o simplemente un deleite para los sentidos. ¡Date un capricho! ¡Pide tu combo ahora y recibe una ración triple de delicias gastronómicas!',
      },
      {
        locale: 'fr',
        value: 'Chaque burger est une harmonie parfaite entre un pain croustillant, un steak savoureux et des ingrédients frais, le tout formant une symphonie de saveurs unique. Ce combo sera la star de toutes vos réceptions : soirée entre amis, pique-nique ou simple festin pour les sens. Faites-vous plaisir – commandez votre combo dès maintenant et offrez-vous une triple dose de délice gastronomique !',
      },
      {
        locale: 'it',
        value: 'Ogni hamburger è una perfetta armonia di panino croccante, polpetta saporita e ingredienti freschi, tutti riuniti in una sinfonia di sapori unica. Questa combinazione sarà la star di ogni incontro: che sia una serata tra amici, un picnic o semplicemente una festa per i sensi. Concediti il piacere: ordina ora la tua combo e ricevi una tripla dose di delizia gastronomica!',
      },
      {
        locale: 'ru',
        value: 'Каждый бургер — это идеальная гармония хрустящей булочки, ароматной котлеты и свежих ингредиентов, собранных в неповторимую вкусовую симфонию. Такое комбо станет звездой любой встречи: будь то дружеский вечер, пикник или просто желание устроить праздник живота. Не отказывайте себе в удовольствии — закажите комбо прямо сейчас и получите тройную порцию гастрономического восторга!',
      },
      {
        locale: 'ka',
        value: 'თითოეული ბურგერი წარმოადგენს ხრაშუნა ფუნთუშას, არომატულ კატლეტსა და ახალ ინგრედიენტებს, რომლებიც უნიკალურ არომატულ სიმფონიაშია გაერთიანებული. ეს კომბინაცია ნებისმიერი შეკრების ვარსკვლავი გახდება: იქნება ეს მეგობრული საღამო, პიკნიკი თუ უბრალოდ გრძნობებისთვის განკუთვნილი ნადიმი. ჩაეფლეთ სიამოვნებაში - შეუკვეთეთ თქვენი კომბინაცია ახლავე და მიიღეთ გასტრონომიული სიამოვნების სამმაგი პორცია!',
      },
      {
        locale: 'de',
        value: 'Jeder Burger ist eine perfekte Harmonie aus knusprigem Brötchen, saftigem Patty und frischen Zutaten – ein einzigartiges Geschmackserlebnis. Diese Kombination wird der Star jeder Zusammenkunft sein: ob gemütlicher Abend mit Freunden, Picknick oder einfach ein Fest für die Sinne. Gönnen Sie sich den Genuss – bestellen Sie jetzt Ihre Kombi und erleben Sie dreifachen Gaumenschmaus!',
      },
      {
        locale: 'zh_cn',
        value: '每一款汉堡都完美融合了酥脆的面包、鲜嫩多汁的肉饼和新鲜的食材，谱写出一曲独特的味觉交响曲。无论是朋友小聚、野餐，还是单纯的味蕾盛宴，这款汉堡组合都将成为聚会的焦点。尽情享受吧——现在就下单，体验三重美食盛宴！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'combo-burgers-combo',
        title: [
          {
            locale: 'en',
            value: 'Combo',
          },
          {
            locale: 'el',
            value: 'Συνδυασμός',
          },
          {
            locale: 'es',
            value: 'Combinación',
          },
          {
            locale: 'fr',
            value: 'Combo',
          },
          {
            locale: 'it',
            value: 'Combo',
          },
          {
            locale: 'ru',
            value: 'Комбо',
          },
          {
            locale: 'ka',
            value: 'კომბო',
          },
          {
            locale: 'de',
            value: 'Combo',
          },
          {
            locale: 'zh_cn',
            value: '组合',
          },
        ],
        images: [
          {
            id: 'combo-burgers-combo-webp-md',
            size: 'md',
            format: 'webp',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/combo/4f736c6df14411f09c603256d845a97d_1.webp',
          },
          {
            id: 'combo-burgers-combo-jpeg-md',
            size: 'md',
            format: 'jpeg',
            url: 'https://storage.yandexcloud.net/next-orders-food-demo/products/combo/4f736c6df14411f09c603256d845a97d_1-min.jpg',
          },
        ],
        video: {
          id: 'combo-burgers-combo-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/a3e05a78f14611f08accbe6545623af7.mp4',
        },
        weightUnit: 'g',
        weightValue: 980,
        price: 1890,
        originalPrice: 2020,
        sku: null,
        nutritionFacts: {
          calories: 312.5,
          protein: 12.2,
          fat: 17.7,
          carbohydrate: 24.4,
        },
      },
    ],
    composition: {
      products: [
        {
          id: 'combo-burgers-to-delicious-onion-burger',
          productId: 'delicious-onion-burger',
          productVariantId: 'delicious-onion-burger-standard',
        },
        {
          id: 'combo-burgers-to-galactic-burger',
          productId: 'galactic-burger',
          productVariantId: 'galactic-burger-standard',
        },
        {
          id: 'combo-burgers-to-jardines-burger',
          productId: 'jardines-burger',
          productVariantId: 'jardines-burger-standard',
        },
      ],
    },
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
        locale: 'el',
        value: 'Νόστιμο μπιφτέκι κρεμμυδιού',
      },
      {
        locale: 'es',
        value: 'Deliciosa hamburguesa de cebolla',
      },
      {
        locale: 'fr',
        value: 'Délicieux burger à l\'oignon',
      },
      {
        locale: 'it',
        value: 'Delizioso hamburger alla cipolla',
      },
      {
        locale: 'ru',
        value: 'Вкуснейший бургер с луком',
      },
      {
        locale: 'ka',
        value: 'გემრიელი ხახვის ბურგერი',
      },
      {
        locale: 'de',
        value: 'Köstlicher Zwiebelburger',
      },
      {
        locale: 'zh_cn',
        value: '美味的洋葱汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover an amazing world of taste with our burger, where tender meat, fresh vegetables and aromatic fried onions come together in a unique combination. Savor every bite and immerse yourself in the atmosphere of true gastronomic pleasure!',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε έναν εκπληκτικό κόσμο γεύσεων με το burger μας, όπου το τρυφερό κρέας, τα φρέσκα λαχανικά και τα αρωματικά τηγανητά κρεμμύδια συνδυάζονται μοναδικά. Απολαύστε κάθε μπουκιά και βυθιστείτε στην ατμόσφαιρα της πραγματικής γαστρονομικής απόλαυσης!',
      },
      {
        locale: 'es',
        value: 'Descubre un mundo de sabores increíbles con nuestra hamburguesa, donde la carne tierna, las verduras frescas y la aromática cebolla frita se unen en una combinación única. ¡Saborea cada bocado y sumérgete en la atmósfera de un auténtico placer gastronómico!',
      },
      {
        locale: 'fr',
        value: 'Découvrez un univers de saveurs exceptionnel avec notre burger, où viande tendre, légumes frais et oignons frits aromatiques s\'unissent dans une combinaison unique. Savourez chaque bouchée et plongez dans une atmosphère de pur plaisir gastronomique !',
      },
      {
        locale: 'it',
        value: 'Scopri un mondo di sapori incredibili con il nostro hamburger, dove carne tenera, verdure fresche e cipolle fritte aromatiche si uniscono in una combinazione unica. Assapora ogni morso e immergiti nell\'atmosfera del vero piacere gastronomico!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительный мир вкуса с нашим бургером, где нежное мясо, свежие овощи и ароматный жареный лук соединяются в уникальном сочетании. Смакуйте каждый кусочек и погрузитесь в атмосферу истинного гастрономического удовольствия!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ გემოების საოცარი სამყარო ჩვენი ბურგერით, სადაც ნაზი ხორცი, ახალი ბოსტნეული და არომატული შემწვარი ხახვი უნიკალურ კომბინაციაში ერწყმის ერთმანეთს. დააგემოვნეთ ყოველი ლუკმა და ჩაეფლეთ ნამდვილი გასტრონომიული სიამოვნების ატმოსფეროში!',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie mit unserem Burger eine faszinierende Geschmackswelt: Zartes Fleisch, frisches Gemüse und aromatische Röstzwiebeln vereinen sich zu einer einzigartigen Kombination. Genießen Sie jeden Bissen und tauchen Sie ein in ein wahres Fest für die Sinne!',
      },
      {
        locale: 'zh_cn',
        value: '品尝我们汉堡带来的奇妙味觉体验，鲜嫩的肉饼、新鲜的蔬菜和香气四溢的炸洋葱完美融合，带来独一无二的味觉享受。细细品味每一口，沉浸在真正的美食盛宴中！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'delicious-onion-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        price: 690,
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
        locale: 'el',
        value: 'Γαλαξιακό μπέργκερ',
      },
      {
        locale: 'es',
        value: 'Hamburguesa galáctica',
      },
      {
        locale: 'fr',
        value: 'Burger galactique',
      },
      {
        locale: 'it',
        value: 'Hamburger galattico',
      },
      {
        locale: 'ru',
        value: 'Галактический бургер',
      },
      {
        locale: 'ka',
        value: 'გალაქტიკური ბურგერი',
      },
      {
        locale: 'de',
        value: 'Galaktischer Burger',
      },
      {
        locale: 'zh_cn',
        value: '银河汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the galactic burger - an incredible combination of juicy vegetables, appetizing meat and crispy bun. Experience the unique taste of distant stars and immerse yourself in the world of space adventures right at the table!',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε το γαλαξιακό μπέργκερ - έναν απίστευτο συνδυασμό ζουμερών λαχανικών, λαχταριστού κρέατος και τραγανού ψωμιού. Ζήστε τη μοναδική γεύση των μακρινών αστεριών και βυθιστείτε στον κόσμο των διαστημικών περιπετειών ακριβώς από το τραπέζι!',
      },
      {
        locale: 'es',
        value: 'Descubre la hamburguesa galáctica: una increíble combinación de jugosas verduras, apetitosa carne y pan crujiente. ¡Siente el sabor único de las estrellas lejanas y sumérgete en el mundo de las aventuras espaciales desde la mesa!',
      },
      {
        locale: 'fr',
        value: 'Découvrez le burger galactique : une combinaison incroyable de légumes juteux, de viande savoureuse et de pain croustillant. Goûtez aux saveurs uniques des étoiles lointaines et plongez dans l’univers des aventures spatiales, directement à votre table !',
      },
      {
        locale: 'it',
        value: 'Scopri l\'hamburger galattico: un\'incredibile combinazione di verdure succose, carne appetitosa e panino croccante. Vivi il gusto unico delle stelle lontane e immergiti nel mondo delle avventure spaziali direttamente a tavola!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя галактический бургер - невероятное сочетание сочных овощей, аппетитного мяса и хрустящей булочки. Ощутите неповторимый вкус далеких звезд и погрузитесь в мир космических приключений прямо за столом!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ გალაქტიკური ბურგერი - წვნიანი ბოსტნეულის, მადისაღმძვრელი ხორცისა და ხრაშუნა ფუნთუშას წარმოუდგენელი კომბინაცია. განიცადეთ შორეული ვარსკვლავების უნიკალური გემო და ჩაეფლეთ კოსმოსური თავგადასავლების სამყაროში პირდაპირ მაგიდასთან!',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie den galaktischen Burger – eine unglaubliche Kombination aus saftigem Gemüse, zartem Fleisch und knusprigem Brötchen. Erleben Sie den einzigartigen Geschmack ferner Sterne und tauchen Sie direkt am Tisch in die Welt der Weltraumabenteuer ein!',
      },
      {
        locale: 'zh_cn',
        value: '探索银河汉堡——鲜嫩多汁的蔬菜、诱人的肉饼和酥脆的面包完美融合。品尝来自遥远星辰的独特滋味，在餐桌上即可沉浸于太空冒险的世界！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'galactic-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        price: 640,
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
        locale: 'el',
        value: 'Έκρηξη μανιταριών: ένα burger με ένα μυστικό',
      },
      {
        locale: 'es',
        value: 'El boom de los hongos: una hamburguesa con un secreto',
      },
      {
        locale: 'fr',
        value: 'Le boom des champignons : un burger avec un secret',
      },
      {
        locale: 'it',
        value: 'Boom di funghi: un burger con un segreto',
      },
      {
        locale: 'ru',
        value: 'Грибной бум: бургер с секретом',
      },
      {
        locale: 'ka',
        value: 'სოკოს ბუმი: ბურგერი საიდუმლოთი',
      },
      {
        locale: 'de',
        value: 'Pilzboom: Ein Burger mit Geheimnis',
      },
      {
        locale: 'zh_cn',
        value: '蘑菇热潮：一款蕴藏秘密的汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover a wonderful world of flavor with our new burger! Tender meat, juicy mushrooms and crispy bun - this combination will surely win your heart. Experience the unique flavor of a real mushroom delight!',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε έναν υπέροχο κόσμο γεύσεων με το νέο μας burger! Τρυφερό κρέας, ζουμερά μανιτάρια και τραγανό ψωμάκι - αυτός ο συνδυασμός σίγουρα θα κερδίσει την καρδιά σας. Ζήστε τη μοναδική γεύση μιας πραγματικής απόλαυσης μανιταριών!',
      },
      {
        locale: 'es',
        value: '¡Descubre un mundo de sabores con nuestra nueva hamburguesa! Carne tierna, champiñones jugosos y pan crujiente: esta combinación te conquistará. ¡Experimenta el sabor único de una auténtica delicia de champiñones!',
      },
      {
        locale: 'fr',
        value: 'Découvrez un univers de saveurs exceptionnelles avec notre nouveau burger ! Viande tendre, champignons juteux et pain croustillant : cette combinaison vous séduira à coup sûr. Goûtez à la saveur unique d\'un véritable délice aux champignons !',
      },
      {
        locale: 'it',
        value: 'Scopri un meraviglioso mondo di sapori con il nostro nuovo burger! Carne tenera, funghi succosi e panino croccante: questa combinazione conquisterà sicuramente il tuo cuore. Vivi il sapore unico di una vera delizia ai funghi!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительный мир вкуса с нашим новым бургером! Нежное мясо, сочные грибы и хрустящая булочка - это сочетание непременно покорит ваше сердце. Ощутите неповторимый вкус настоящего грибного удовольствия!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ გემოების საოცარი სამყარო ჩვენი ახალი ბურგერით! ნაზი ხორცი, წვნიანი სოკო და ხრაშუნა ფუნთუშა - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. განიცადეთ ნამდვილი სოკოს სიამოვნების უნიკალური გემო!',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie mit unserem neuen Burger eine wunderbare Geschmackswelt! Zartes Fleisch, saftige Champignons und ein knuspriges Brötchen – diese Kombination wird Sie begeistern. Erleben Sie den einzigartigen Geschmack eines echten Champignon-Genusses!',
      },
      {
        locale: 'zh_cn',
        value: '用我们全新推出的汉堡，探索美妙的味蕾世界！鲜嫩的牛肉饼、多汁的蘑菇和酥脆的面包——这样的组合定能俘获您的味蕾。体验真正蘑菇带来的独特美味！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'mushroom-boom-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        price: 480,
        sku: null,
        nutritionFacts: {
          calories: 275.0,
          protein: 9.8,
          fat: 15.2,
          carbohydrate: 26.3,
        },
      },
    ],
    badges: [
      {
        id: 'boom',
        title: [
          {
            locale: 'en',
            value: 'Boom!',
          },
          {
            locale: 'el',
            value: 'Κεραία!',
          },
          {
            locale: 'es',
            value: '¡Boom!',
          },
          {
            locale: 'fr',
            value: 'Boom!',
          },
          {
            locale: 'it',
            value: 'Boom!',
          },
          {
            locale: 'ru',
            value: 'Бум!',
          },
          {
            locale: 'ka',
            value: 'ბუმი!',
          },
          {
            locale: 'de',
            value: 'Boom!',
          },
          {
            locale: 'zh_cn',
            value: '爆炸!',
          },
        ],
      },
      {
        id: 'mushroom',
        title: [
          {
            locale: 'en',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'el',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'es',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'fr',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'it',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'ru',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'ka',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'de',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
          {
            locale: 'zh_cn',
            value: '🍄‍🟫🍄‍🟫🍄‍🟫🤩',
          },
        ],
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
        locale: 'el',
        value: 'Jardine\'s Burger',
      },
      {
        locale: 'es',
        value: 'Hamburguesa de Jardine',
      },
      {
        locale: 'fr',
        value: 'Burger de Jardine',
      },
      {
        locale: 'it',
        value: 'Burger di Jardine',
      },
      {
        locale: 'ru',
        value: 'Бургер "Жардин"',
      },
      {
        locale: 'ka',
        value: 'ჯარდინის ბურგერი',
      },
      {
        locale: 'de',
        value: 'Jardines Burger',
      },
      {
        locale: 'zh_cn',
        value: '贾丁汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique flavor of a juicy grilled turkey cutlet combined with a crispy bun and fresh vegetables. Tender turkey meat complemented with aromatic spices and spices will be a real discovery for meat lovers!',
      },
      {
        locale: 'el',
        value: 'Ζήστε τη μοναδική γεύση ενός ζουμερού ψητού μπιφτεκιού γαλοπούλας σε συνδυασμό με ένα τραγανό ψωμάκι και φρέσκα λαχανικά. Το τρυφερό κρέας γαλοπούλας, συμπληρωμένο με αρωματικά μπαχαρικά και μπαχαρικά, θα αποτελέσει μια πραγματική ανακάλυψη για τους λάτρεις του κρέατος!',
      },
      {
        locale: 'es',
        value: 'Experimente el sabor único de una jugosa chuleta de pavo a la parrilla, combinada con un pan crujiente y verduras frescas. ¡La tierna carne de pavo, acompañada de especias aromáticas, será un verdadero descubrimiento para los amantes de la carne!',
      },
      {
        locale: 'fr',
        value: 'Découvrez la saveur unique d\'une escalope de dinde grillée et juteuse, accompagnée d\'un pain croustillant et de légumes frais. La tendresse de la dinde, sublimée par des épices aromatiques, ravira les amateurs de viande !',
      },
      {
        locale: 'it',
        value: 'Vivi il sapore unico di una succosa cotoletta di tacchino alla griglia abbinata a un panino croccante e verdure fresche. La carne tenera di tacchino, arricchita da spezie aromatiche, sarà una vera scoperta per gli amanti della carne!',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус сочной котлеты из индейки, приготовленной на гриле, в сочетании с хрустящей булочкой и свежими овощами. Нежное мясо индейки, дополненное ароматными специями и пряностями, станет настоящим открытием для любителей мяса!',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ წვნიანი შემწვარი ინდაურის კატლეტის უნიკალური არომატი ხრაშუნა ფუნთუშასთან და ახალ ბოსტნეულთან ერთად. ნაზი ინდაურის ხორცი, არომატული სანელებლებითა და სანელებლებით, ნამდვილი აღმოჩენა იქნება ხორცის მოყვარულთათვის!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie den einzigartigen Geschmack eines saftigen, gegrillten Putenschnitzels auf einem knusprigen Brötchen mit frischem Gemüse. Zartes Putenfleisch, verfeinert mit aromatischen Gewürzen, ist eine wahre Entdeckung für Fleischliebhaber!',
      },
      {
        locale: 'zh_cn',
        value: '体验鲜嫩多汁的烤火鸡排搭配酥脆面包和新鲜蔬菜的独特风味。鲜嫩的火鸡肉佐以香气四溢的香料，必将为肉食爱好者带来真正的味觉盛宴！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'jardines-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        price: 690,
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
        locale: 'el',
        value: 'Ζεστό μπέργκερ από το Τέξας',
      },
      {
        locale: 'es',
        value: 'Hamburguesa caliente de Texas',
      },
      {
        locale: 'fr',
        value: 'Burger texan épicé',
      },
      {
        locale: 'it',
        value: 'Hamburger piccante del Texas',
      },
      {
        locale: 'ru',
        value: 'Горячий техасский бургер',
      },
      {
        locale: 'ka',
        value: 'ცხელი ტეხასური ბურგერი',
      },
      {
        locale: 'de',
        value: 'Heißer Texas-Burger',
      },
      {
        locale: 'zh_cn',
        value: '德州辣汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Your way to the real Texas flavor! Tender meat, fresh vegetables and an appetizing bun - this burger will definitely not leave you indifferent!',
      },
      {
        locale: 'el',
        value: 'Ο δρόμος σας για την πραγματική γεύση του Τέξας! Τρυφερό κρέας, φρέσκα λαχανικά και ένα λαχταριστό ψωμάκι - αυτό το μπιφτέκι σίγουρα δεν θα σας αφήσει αδιάφορους!',
      },
      {
        locale: 'es',
        value: '¡Tu camino al auténtico sabor texano! Carne tierna, verduras frescas y un pan apetitoso: ¡esta hamburguesa no te dejará indiferente!',
      },
      {
        locale: 'fr',
        value: 'Découvrez les vraies saveurs du Texas ! Viande tendre, légumes frais et un pain appétissant : ce burger vous séduira à coup sûr !',
      },
      {
        locale: 'it',
        value: 'Il tuo viaggio verso il vero sapore del Texas! Carne tenera, verdure fresche e un panino appetitoso: questo burger sicuramente non ti lascerà indifferente!',
      },
      {
        locale: 'ru',
        value: 'Ваш путь к настоящему техасскому вкусу! Нежное мясо, свежие овощи и аппетитная булочка - этот бургер точно не оставит вас равнодушным!',
      },
      {
        locale: 'ka',
        value: 'თქვენი გზა ნამდვილი ტეხასური არომატისკენ! ნაზი ხორცი, ახალი ბოსტნეული და მადისაღმძვრელი ფუნთუშა - ეს ბურგერი ნამდვილად არ დაგტოვებთ გულგრილს!',
      },
      {
        locale: 'de',
        value: 'So erleben Sie echten Texas-Geschmack! Zartes Fleisch, frisches Gemüse und ein appetitliches Brötchen – dieser Burger wird Sie garantiert begeistern!',
      },
      {
        locale: 'zh_cn',
        value: '带你体验真正的德州风味！鲜嫩的肉饼、新鲜的蔬菜和美味的面包——这款汉堡绝对会让你赞不绝口！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'hot-texas-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        price: 720,
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
        locale: 'el',
        value: 'Τρυφερό μπέργκερ με μπέικον',
      },
      {
        locale: 'es',
        value: 'Hamburguesa de tocino tierno',
      },
      {
        locale: 'fr',
        value: 'Burger au bacon tendre',
      },
      {
        locale: 'it',
        value: 'Hamburger al bacon tenero',
      },
      {
        locale: 'ru',
        value: 'Нежный бургер с беконом',
      },
      {
        locale: 'ka',
        value: 'ნაზი ბეკონის ბურგერი',
      },
      {
        locale: 'de',
        value: 'Zarter Bacon-Burger',
      },
      {
        locale: 'zh_cn',
        value: '嫩培根汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Dive into the tenderness of bacon: try our burger! Fragrant bacon, juicy patty and fresh vegetables - an explosion of flavor for real gourmets.',
      },
      {
        locale: 'el',
        value: 'Βουτήξτε στην τρυφερότητα του μπέικον: δοκιμάστε το burger μας! Αρωματικό μπέικον, ζουμερό μπιφτέκι και φρέσκα λαχανικά - μια έκρηξη γεύσης για πραγματικούς καλοφαγάδες.',
      },
      {
        locale: 'es',
        value: 'Sumérgete en la ternura del tocino: ¡prueba nuestra hamburguesa! Tocino aromático, carne jugosa y verduras frescas: una explosión de sabor para los verdaderos gourmets.',
      },
      {
        locale: 'fr',
        value: 'Laissez-vous séduire par la tendresse du bacon : essayez notre burger ! Bacon parfumé, steak juteux et légumes frais – une explosion de saveurs pour les vrais gourmets.',
      },
      {
        locale: 'it',
        value: 'Immergiti nella tenerezza del bacon: prova il nostro burger! Bacon profumato, polpetta succosa e verdure fresche: un\'esplosione di sapore per veri intenditori.',
      },
      {
        locale: 'ru',
        value: 'Окунитесь в нежность бекона: попробуйте наш бургер! Ароматный бекон, сочная котлета и свежие овощи - взрыв вкуса для настоящих гурманов.',
      },
      {
        locale: 'ka',
        value: 'ჩაეფლეთ ბეკონის სინაზეში: გასინჯეთ ჩვენი ბურგერი! არომატული ბეკონი, წვნიანი კატლეტი და ახალი ბოსტნეული - არომატების აფეთქება ნამდვილი გურმანებისთვის.',
      },
      {
        locale: 'de',
        value: 'Tauchen Sie ein in die Zartheit von Speck: Probieren Sie unseren Burger! Duftender Speck, saftiges Patty und frisches Gemüse – eine Geschmacksexplosion für echte Feinschmecker.',
      },
      {
        locale: 'zh_cn',
        value: '尽情享受培根的鲜嫩美味：尝尝我们的汉堡吧！香气四溢的培根、鲜嫩多汁的肉饼和新鲜蔬菜——为真正的美食家带来味蕾的盛宴。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'tender-bacon-burger-standard',
        title: [
          {
            locale: 'en',
            value: 'Standard',
          },
          {
            locale: 'el',
            value: 'Πρότυπο',
          },
          {
            locale: 'es',
            value: 'Estándar',
          },
          {
            locale: 'fr',
            value: 'Standard',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Standard',
          },
          {
            locale: 'zh_cn',
            value: '标准',
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
        price: 680,
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
        locale: 'el',
        value: 'Φτερά Ευτυχίας: Ζεστή Ανάσα Μπάφαλο',
      },
      {
        locale: 'es',
        value: 'Alas de la felicidad: Aliento caliente de búfalo',
      },
      {
        locale: 'fr',
        value: 'Ailes du bonheur : Souffle chaud de buffle',
      },
      {
        locale: 'it',
        value: 'Ali della felicità: Respiro caldo di Buffalo',
      },
      {
        locale: 'ru',
        value: 'Крылья счастья: Горячее дыхание Баффало',
      },
      {
        locale: 'ka',
        value: 'ბედნიერების ფრთები: ბუფალოს ცხელი სუნთქვა',
      },
      {
        locale: 'de',
        value: 'Flügel des Glücks: Buffalo Hot Breath',
      },
      {
        locale: 'zh_cn',
        value: '幸福之翼：布法罗热气',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Buffalo Fried Wings - spicy, juicy and incredibly delicious! The perfect choice for a fun party.',
      },
      {
        locale: 'el',
        value: 'Τηγανητές φτερούγες Buffalo - πικάντικες, ζουμερές και απίστευτα νόστιμες! Η τέλεια επιλογή για ένα διασκεδαστικό πάρτι.',
      },
      {
        locale: 'es',
        value: 'Alitas de pollo fritas estilo búfalo: ¡picantes, jugosas y deliciosas! La opción perfecta para una fiesta divertida.',
      },
      {
        locale: 'fr',
        value: 'Ailes de poulet frites Buffalo : épicées, juteuses et incroyablement délicieuses ! Le choix idéal pour une fête réussie.',
      },
      {
        locale: 'it',
        value: 'Alette di pollo fritte Buffalo - piccanti, succose e incredibilmente deliziose! La scelta perfetta per una festa divertente.',
      },
      {
        locale: 'ru',
        value: 'Жареные крылышки «Баффало» - пряные, сочные и невероятно вкусные! Идеальный выбор для веселой вечеринки.',
      },
      {
        locale: 'ka',
        value: 'ბუფალოს შემწვარი ფრთები - ცხარე, წვნიანი და წარმოუდგენლად გემრიელი! იდეალური არჩევანია გართობის წვეულებისთვის.',
      },
      {
        locale: 'de',
        value: 'Buffalo Fried Wings – würzig, saftig und unglaublich lecker! Die perfekte Wahl für eine gelungene Party.',
      },
      {
        locale: 'zh_cn',
        value: '布法罗炸鸡翅——香辣多汁，美味无比！是派对狂欢的完美之选。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'wings-of-happiness-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 890,
        sku: null,
        nutritionFacts: {
          calories: 290.0,
          protein: 18.5,
          fat: 21.0,
          carbohydrate: 4.2,
        },
      },
    ],
    badges: [
      {
        id: 'hot',
        title: [
          {
            locale: 'en',
            value: '🔥🥵',
          },
          {
            locale: 'el',
            value: '🔥🥵',
          },
          {
            locale: 'es',
            value: '🔥🥵',
          },
          {
            locale: 'fr',
            value: '🔥🥵',
          },
          {
            locale: 'it',
            value: '🔥🥵',
          },
          {
            locale: 'ru',
            value: '🔥🥵',
          },
          {
            locale: 'ka',
            value: '🔥🥵',
          },
          {
            locale: 'de',
            value: '🔥🥵',
          },
          {
            locale: 'zh_cn',
            value: '🔥🥵',
          },
        ],
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
        locale: 'el',
        value: 'Λαχανικά γενναιοδωρία',
      },
      {
        locale: 'es',
        value: 'Abundancia de verduras',
      },
      {
        locale: 'fr',
        value: 'Abondance de légumes',
      },
      {
        locale: 'it',
        value: 'Abbondanza di verdure',
      },
      {
        locale: 'ru',
        value: 'Овощное изобилие',
      },
      {
        locale: 'ka',
        value: 'ბოსტნეულის სიუხვე',
      },
      {
        locale: 'de',
        value: 'Gemüsereichtum',
      },
      {
        locale: 'zh_cn',
        value: '蔬菜丰收',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Enjoy the flavor of fresh vegetables in our vegetable quesadilla! It is the perfect combination of juicy ingredients seasoned with aromatic spices. Don\'t miss the opportunity to try our vegetable quesadilla and get energized with bright flavors!',
      },
      {
        locale: 'el',
        value: 'Απολαύστε τη γεύση των φρέσκων λαχανικών στην quesadilla λαχανικών μας! Είναι ο τέλειος συνδυασμός ζουμερών συστατικών καρυκευμένων με αρωματικά μπαχαρικά. Μην χάσετε την ευκαιρία να δοκιμάσετε την quesadilla λαχανικών μας και να ενεργοποιηθείτε με λαμπερές γεύσεις!',
      },
      {
        locale: 'es',
        value: '¡Disfruta del sabor de las verduras frescas en nuestra quesadilla de verduras! Es la combinación perfecta de ingredientes jugosos sazonados con especias aromáticas. ¡No te pierdas la oportunidad de probar nuestra quesadilla de verduras y recargar energías con sus sabores vibrantes!',
      },
      {
        locale: 'fr',
        value: 'Savourez la fraîcheur des légumes dans notre quesadilla végétarienne ! C\'est l\'alliance parfaite d\'ingrédients juteux et d\'épices aromatiques. Ne manquez pas l\'occasion de goûter notre quesadilla végétarienne et de faire le plein d\'énergie grâce à ses saveurs éclatantes !',
      },
      {
        locale: 'it',
        value: 'Goditi il sapore delle verdure fresche nella nostra quesadilla vegetariana! È la combinazione perfetta di ingredienti succosi conditi con spezie aromatiche. Non perdere l\'occasione di provare la nostra quesadilla vegetariana e ricaricarti con sapori vivaci!',
      },
      {
        locale: 'ru',
        value: 'Насладитесь вкусом свежих овощей в нашей овощной кесадилье! Это идеальное сочетание сочных ингредиентов, приправленных ароматными специями. Не упустите возможность попробовать нашу овощную кесадилью и зарядиться энергией ярких вкусов!',
      },
      {
        locale: 'ka',
        value: 'დატკბით ახალი ბოსტნეულის არომატით ჩვენს ბოსტნეულის კესადილიაში! ეს არის წვნიანი ინგრედიენტების იდეალური კომბინაცია, რომელიც არომატული სანელებლებით არის შეზავებული. არ გამოტოვოთ შესაძლებლობა, გასინჯოთ ჩვენი ბოსტნეულის კესადილია და მიიღოთ ენერგია ნათელი არომატებით!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie den Geschmack von frischem Gemüse in unserer Gemüse-Quesadilla! Saftige Zutaten, verfeinert mit aromatischen Gewürzen, machen sie zur perfekten Kombination. Lassen Sie sich die Gelegenheit nicht entgehen, unsere Gemüse-Quesadilla zu probieren und sich von den leuchtenden Aromen beleben zu lassen!',
      },
      {
        locale: 'zh_cn',
        value: '品尝我们新鲜蔬菜墨西哥薄饼，感受蔬菜的美味！多汁的食材搭配芳香的香料，完美融合。千万别错过我们的蔬菜墨西哥薄饼，让清新爽口的滋味为您注入活力！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'vegetable-bounty-1',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'პორტისთვის',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 760,
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
        locale: 'el',
        value: 'Τσιζμπέργκερ',
      },
      {
        locale: 'es',
        value: 'Hamburguesas con queso',
      },
      {
        locale: 'fr',
        value: 'Cheeseburgerettes',
      },
      {
        locale: 'it',
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
      {
        locale: 'de',
        value: 'Cheeseburgerettes',
      },
      {
        locale: 'zh_cn',
        value: '芝士汉堡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Tender mini cheeseburgers - the perfect snack for the whole family! Delicious mini-burgers with real American cheese, juicy patty and fresh vegetables. Feel the atmosphere of a real American restaurant right here and now!',
      },
      {
        locale: 'el',
        value: 'Τρυφερά μίνι τσίζμπεργκερ - το τέλειο σνακ για όλη την οικογένεια! Νόστιμα μίνι μπιφτέκια με πραγματικό αμερικανικό τυρί, ζουμερό μπιφτέκι και φρέσκα λαχανικά. Νιώστε την ατμόσφαιρα ενός πραγματικού αμερικανικού εστιατορίου εδώ και τώρα!',
      },
      {
        locale: 'es',
        value: 'Tiernas minihamburguesas con queso: ¡el refrigerio perfecto para toda la familia! Deliciosas minihamburguesas con auténtico queso americano, jugosa carne y verduras frescas. ¡Siente el ambiente de un auténtico restaurante americano ahora mismo!',
      },
      {
        locale: 'fr',
        value: 'De tendres mini cheeseburgers : le goûter idéal pour toute la famille ! De délicieux mini-burgers avec du vrai fromage américain, un steak juteux et des légumes frais. Retrouvez l’ambiance d’un authentique restaurant américain, sans plus attendre !',
      },
      {
        locale: 'it',
        value: 'Mini cheeseburger teneri - lo snack perfetto per tutta la famiglia! Deliziosi mini-burger con vero formaggio americano, polpetta succosa e verdure fresche. Vivi l\'atmosfera di un vero ristorante americano qui e ora!',
      },
      {
        locale: 'ru',
        value: 'Нежные мини-чизбургеры - идеальный перекус для всей семьи! Вкуснейшие мини-бургеры с настоящим американским сыром, сочной котлетой и свежими овощами. Почувствуйте атмосферу настоящего американского ресторана прямо здесь и сейчас!',
      },
      {
        locale: 'ka',
        value: 'ნაზი მინი ჩიზბურგერები - იდეალური საჭმელი მთელი ოჯახისთვის! გემრიელი მინი ბურგერები ნამდვილი ამერიკული ყველით, წვნიანი კატლეტით და ახალი ბოსტნეულით. იგრძენით ნამდვილი ამერიკული რესტორნის ატმოსფერო აქ და ახლა!',
      },
      {
        locale: 'de',
        value: 'Zarte Mini-Cheeseburger – der perfekte Snack für die ganze Familie! Köstliche Mini-Burger mit echtem amerikanischen Käse, saftigem Patty und frischem Gemüse. Erleben Sie jetzt die Atmosphäre eines echten amerikanischen Restaurants!',
      },
      {
        locale: 'zh_cn',
        value: '鲜嫩迷你芝士汉堡——全家共享的完美小吃！美味的迷你汉堡，搭配正宗美式芝士、多汁肉饼和新鲜蔬菜。现在就来感受正宗美式餐厅的氛围吧！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'cheeseburgerettes-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 670,
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
        locale: 'el',
        value: 'Ζεστό τυρί και μπέικον',
      },
      {
        locale: 'es',
        value: 'Queso y tocino calientes',
      },
      {
        locale: 'fr',
        value: 'Fromage chaud et bacon',
      },
      {
        locale: 'it',
        value: 'Formaggio caldo e pancetta',
      },
      {
        locale: 'ru',
        value: 'Горячий сыр с беконом',
      },
      {
        locale: 'ka',
        value: 'ცხელი ყველი და ბეკონი',
      },
      {
        locale: 'de',
        value: 'Heißer Käse und Speck',
      },
      {
        locale: 'zh_cn',
        value: '热奶酪和培根',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of French fries with cheddar cheese and bacon in our restaurant! This is the perfect combination for real gourmets.',
      },
      {
        locale: 'el',
        value: 'Ζήστε τη μοναδική γεύση των τηγανητών πατατών με τυρί τσένταρ και μπέικον στο εστιατόριό μας! Αυτός είναι ο τέλειος συνδυασμός για τους πραγματικούς γκουρμέ.',
      },
      {
        locale: 'es',
        value: '¡Disfruta del sabor único de las papas fritas con queso cheddar y tocino en nuestro restaurante! Es la combinación perfecta para los verdaderos gourmets.',
      },
      {
        locale: 'fr',
        value: 'Découvrez le goût unique des frites au cheddar et au bacon dans notre restaurant ! C’est la combinaison parfaite pour les vrais gourmets.',
      },
      {
        locale: 'it',
        value: 'Vivi il gusto unico delle patatine fritte con formaggio cheddar e pancetta nel nostro ristorante! Questa è la combinazione perfetta per i veri intenditori.',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус картофеля фри с сыром чеддер и беконом в нашем ресторане! Это идеальное сочетание для настоящих гурманов.',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ კარტოფილი ფრის უნიკალური გემო ჩედარის ყველით და ბეკონით ჩვენს რესტორანში! ეს ნამდვილი გურმანებისთვის იდეალური კომბინაციაა.',
      },
      {
        locale: 'de',
        value: 'Erleben Sie den einzigartigen Geschmack von Pommes frites mit Cheddar-Käse und Speck in unserem Restaurant! Die perfekte Kombination für echte Feinschmecker.',
      },
      {
        locale: 'zh_cn',
        value: '来我们餐厅体验一下薯条配切达奶酪和培根的独特风味吧！这可是真正美食家的完美组合。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'hot-cheese-and-bacon-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 560,
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
        locale: 'el',
        value: 'Περιπέτειες με τυρί: νάτσος με τρία είδη τυριού',
      },
      {
        locale: 'es',
        value: 'Aventuras de queso: nachos con tres tipos de queso',
      },
      {
        locale: 'fr',
        value: 'Aventures fromagères : nachos avec trois sortes de fromage',
      },
      {
        locale: 'it',
        value: 'Avventure di formaggio: nachos con tre tipi di formaggio',
      },
      {
        locale: 'ru',
        value: 'Сырные приключения: начос с тремя видами сыра',
      },
      {
        locale: 'ka',
        value: 'ყველის თავგადასავლები: ნაჩოსი სამი სახეობის ყველით',
      },
      {
        locale: 'de',
        value: 'Käseabenteuer: Nachos mit drei Käsesorten',
      },
      {
        locale: 'zh_cn',
        value: '奶酪探险：三种奶酪玉米片',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to plunge into the atmosphere of a real Mexican holiday with our unique nachos with cheese! Tender combination of three kinds of cheese and crispy corn tortilla will not leave indifferent even the most sophisticated gourmet. Serve with hot sauce or salsa - the perfect combination for an unforgettable evening with friends and family.',
      },
      {
        locale: 'el',
        value: 'Σας προσκαλούμε να βυθιστείτε στην ατμόσφαιρα πραγματικών μεξικανικών διακοπών με τα μοναδικά μας νάτσος με τυρί! Ο τρυφερός συνδυασμός τριών ειδών τυριών και η τραγανή τορτίγια καλαμποκιού δεν θα αφήσουν αδιάφορο ούτε τον πιο εκλεπτυσμένο γκουρμέ. Σερβίρετε με καυτερή σάλτσα ή σάλτσα - ο τέλειος συνδυασμός για μια αξέχαστη βραδιά με φίλους και οικογένεια.',
      },
      {
        locale: 'es',
        value: '¡Te invitamos a sumergirte en el ambiente de una auténtica fiesta mexicana con nuestros exclusivos nachos con queso! La tierna combinación de tres tipos de queso y crujiente tortilla de maíz encantará incluso al gourmet más sofisticado. Sírvelos con salsa picante: la combinación perfecta para una velada inolvidable con amigos y familiares.',
      },
      {
        locale: 'fr',
        value: 'Plongez dans l\'ambiance authentique d\'une fête mexicaine avec nos nachos au fromage uniques ! L\'alliance fondante de trois fromages et de tortillas de maïs croustillantes saura ravir même les palais les plus exigeants. Servez-les avec de la sauce piquante ou de la salsa : l\'accord parfait pour une soirée inoubliable entre amis ou en famille.',
      },
      {
        locale: 'it',
        value: 'Ti invitiamo a immergerti nell\'atmosfera di una vera festa messicana con i nostri unici nachos al formaggio! La tenera combinazione di tre tipi di formaggio e tortilla di mais croccante conquisterà anche i palati più raffinati. Servili con salsa piccante o salsa - la combinazione perfetta per una serata indimenticabile con amici e famiglia.',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас окунуться в атмосферу настоящего мексиканского праздника с нашими уникальными начос с сыром! Нежное сочетание трех видов сыра и хрустящей кукурузной тортильи не оставит равнодушным даже самого искушенного гурмана. Подавайте с острым соусом или сальсой - это идеальное сочетание для незабываемого вечера в кругу друзей и семьи.',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით, ჩაეფლოთ ნამდვილი მექსიკური დღესასწაულის ატმოსფეროში ჩვენი უნიკალური ნაჩოსით ყველით! სამი სახეობის ყველის ნაზი კომბინაცია და ხრაშუნა სიმინდის ტორტილია გულგრილს არ დატოვებს ყველაზე დახვეწილ გურმანსაც კი. მიირთვით ცხარე სოუსთან ან სალსასთან ერთად - იდეალური კომბინაცია მეგობრებთან და ოჯახთან ერთად დაუვიწყარი საღამოსთვის.',
      },
      {
        locale: 'de',
        value: 'Tauchen Sie ein in die Atmosphäre eines echten mexikanischen Urlaubs mit unseren einzigartigen Käse-Nachos! Die zarte Kombination aus drei Käsesorten und knuspriger Maistortilla wird selbst anspruchsvollste Feinschmecker begeistern. Servieren Sie dazu scharfe Sauce oder Salsa – die perfekte Kombination für einen unvergesslichen Abend mit Freunden und Familie.',
      },
      {
        locale: 'zh_cn',
        value: '我们诚邀您品尝我们独具特色的芝士玉米片，感受浓郁的墨西哥节日氛围！三种芝士的柔滑组合搭配酥脆的玉米饼，即使是最挑剔的美食家也会为之倾倒。佐以辣酱或莎莎酱，与亲朋好友共度难忘夜晚，堪称完美搭配。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'cheese-adventures-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 620,
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
        locale: 'el',
        value: 'Φαντασμαγορία με μπέικον',
      },
      {
        locale: 'es',
        value: 'Extravagancia de tocino',
      },
      {
        locale: 'fr',
        value: 'Extravagance au bacon',
      },
      {
        locale: 'it',
        value: 'Stravaganza di bacon',
      },
      {
        locale: 'ru',
        value: 'Беконная феерия',
      },
      {
        locale: 'ka',
        value: 'ბეკონის ექსტრავაგანზა',
      },
      {
        locale: 'de',
        value: 'Speck-Extravaganza',
      },
      {
        locale: 'zh_cn',
        value: '培根盛宴',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover a new level of pleasure with our specialty pizzadilla! Thin dough, appetizing bacon and cheese - this combination is sure to win your heart. Don\'t miss the opportunity to enjoy this incredible taste in the cozy atmosphere of our restaurant!',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε ένα νέο επίπεδο απόλαυσης με την σπεσιαλιτέ μας pizzadilla! Λεπτή ζύμη, λαχταριστό μπέικον και τυρί - αυτός ο συνδυασμός σίγουρα θα κερδίσει την καρδιά σας. Μην χάσετε την ευκαιρία να απολαύσετε αυτή την απίστευτη γεύση στη ζεστή ατμόσφαιρα του εστιατορίου μας!',
      },
      {
        locale: 'es',
        value: '¡Descubre un nuevo nivel de placer con nuestra pizzadilla especial! Masa fina, apetitoso tocino y queso: esta combinación te conquistará. ¡No te pierdas la oportunidad de disfrutar de este increíble sabor en el acogedor ambiente de nuestro restaurante!',
      },
      {
        locale: 'fr',
        value: 'Découvrez un plaisir gustatif inédit avec notre pizzadilla spéciale ! Pâte fine, bacon savoureux et fromage : une combinaison irrésistible. Ne manquez pas l\'occasion de savourer ce délice dans l\'ambiance chaleureuse de notre restaurant !',
      },
      {
        locale: 'it',
        value: 'Scopri un nuovo livello di piacere con la nostra pizzadilla speciale! Pasta sottile, bacon appetitoso e formaggio: questa combinazione conquisterà sicuramente il tuo cuore. Non perdere l\'occasione di gustare questo incredibile sapore nell\'atmosfera accogliente del nostro ristorante!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя новый уровень удовольствия с нашей фирменной пиццадильей! Тонкое тесто, аппетитный бекон и сыр - это сочетание обязательно покорит ваше сердце. Не упустите возможность насладиться этим невероятным вкусом в уютной атмосфере нашего ресторана!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ სიამოვნების ახალი დონე ჩვენი სპეციალური პიცადილასთან ერთად! თხელი ცომი, მადისაღმძვრელი ბეკონი და ყველი - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. არ გამოტოვოთ შესაძლებლობა, დატკბეთ ამ წარმოუდგენელი გემოთი ჩვენი რესტორნის მყუდრო ატმოსფეროში!',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie mit unserer Spezialität, der Pizzadilla, ein ganz neues Genusserlebnis! Dünner Teig, herzhafter Speck und Käse – diese Kombination wird Sie begeistern. Lassen Sie sich die Gelegenheit nicht entgehen, diesen unglaublichen Geschmack in der gemütlichen Atmosphäre unseres Restaurants zu genießen!',
      },
      {
        locale: 'zh_cn',
        value: '品尝我们特色披萨卷饼，体验全新味蕾享受！薄脆的饼皮，鲜嫩的培根和香浓的芝士——这绝妙的组合定能俘获您的味蕾。千万别错过在我们餐厅舒适温馨的氛围中，尽情享受这令人难以抗拒的美味！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'bacon-extravaganza-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 720,
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
        locale: 'el',
        value: 'Τα μαγικά νήματα της Γκούντα',
      },
      {
        locale: 'es',
        value: 'Los hilos mágicos de Gouda',
      },
      {
        locale: 'fr',
        value: 'Les fils magiques de Gouda',
      },
      {
        locale: 'it',
        value: 'I fili magici di Gouda',
      },
      {
        locale: 'ru',
        value: 'Волшебные нити Гауды',
      },
      {
        locale: 'ka',
        value: 'გუდას ჯადოსნური ძაფები',
      },
      {
        locale: 'de',
        value: 'Die magischen Fäden von Gouda',
      },
      {
        locale: 'zh_cn',
        value: '豪达奶酪的魔力丝线',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover an amazing world of flavors with gourmet cheeses that will give you an unforgettable experience with every bite.',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε έναν καταπληκτικό κόσμο γεύσεων με γκουρμέ τυριά που θα σας χαρίσουν μια αξέχαστη εμπειρία με κάθε μπουκιά.',
      },
      {
        locale: 'es',
        value: 'Descubre un mundo asombroso de sabores con quesos gourmet que te brindarán una experiencia inolvidable en cada bocado.',
      },
      {
        locale: 'fr',
        value: 'Découvrez un monde de saveurs extraordinaires avec des fromages gastronomiques qui vous offriront une expérience inoubliable à chaque bouchée.',
      },
      {
        locale: 'it',
        value: 'Scopri un mondo straordinario di sapori con formaggi gourmet che ti regaleranno un\'esperienza indimenticabile ad ogni morso.',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительный мир вкусов с изысканными сырами, которые подарят вам незабываемые впечатления с каждым кусочком.',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ არომატების საოცარი სამყარო გურმანული ყველებით, რომლებიც ყოველი ლუკმის შემდეგ დაუვიწყარ გამოცდილებას მოგანიჭებთ.',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie eine faszinierende Welt der Aromen mit Gourmet-Käsesorten, die Ihnen mit jedem Bissen ein unvergessliches Geschmackserlebnis bieten.',
      },
      {
        locale: 'zh_cn',
        value: '探索美妙的味觉世界，品尝各种美味奶酪，每一口都将带给您难忘的体验。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'the-magic-threads-of-gouda-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 470,
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
        locale: 'el',
        value: 'Φλεγόμενη quesadilla: Πικάντικες φέτες κοτόπουλου',
      },
      {
        locale: 'es',
        value: 'Quesadilla flameada: Rebanadas de pollo picante',
      },
      {
        locale: 'fr',
        value: 'Quesadilla flambée : tranches de poulet épicées',
      },
      {
        locale: 'it',
        value: 'Quesadilla fiammeggiante: Fette di pollo piccanti',
      },
      {
        locale: 'ru',
        value: '"Пламенная кесадилья": острые ломтики курицы',
      },
      {
        locale: 'ka',
        value: 'ცეცხლოვანი კესადილია: ცხარე ქათმის ნაჭრები',
      },
      {
        locale: 'de',
        value: 'Flambierte Quesadilla: Würzige Hähnchenscheiben',
      },
      {
        locale: 'zh_cn',
        value: '火焰墨西哥薄饼：辣味鸡肉片',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to enjoy exquisite chicken quesadilla in our restaurant! Tender chicken fillet, fragrant spices and golden cheese - this combination will surely win your heart. Served with vegetables and salsa sauce. Feel the unique taste of real Mexican cuisine in the cozy atmosphere of our restaurant!',
      },
      {
        locale: 'el',
        value: 'Σας προσκαλούμε να απολαύσετε εξαιρετική quesadilla κοτόπουλου στο εστιατόριό μας! Τρυφερό φιλέτο κοτόπουλου, αρωματικά μπαχαρικά και χρυσό τυρί - αυτός ο συνδυασμός σίγουρα θα κερδίσει την καρδιά σας. Σερβίρεται με λαχανικά και σάλτσα salsa. Νιώστε τη μοναδική γεύση της πραγματικής μεξικάνικης κουζίνας στη ζεστή ατμόσφαιρα του εστιατορίου μας!',
      },
      {
        locale: 'es',
        value: '¡Te invitamos a disfrutar de una exquisita quesadilla de pollo en nuestro restaurante! Tierno filete de pollo, especias aromáticas y queso dorado: esta combinación te conquistará. Servida con verduras y salsa. ¡Siente el sabor único de la auténtica cocina mexicana en el acogedor ambiente de nuestro restaurante!',
      },
      {
        locale: 'fr',
        value: 'Nous vous invitons à déguster une exquise quesadilla au poulet dans notre restaurant ! Filet de poulet tendre, épices parfumées et fromage doré : cette combinaison saura vous séduire. Servie avec des légumes et de la sauce salsa. Venez savourer l\'authentique cuisine mexicaine dans l\'ambiance chaleureuse de notre restaurant !',
      },
      {
        locale: 'it',
        value: 'Ti invitiamo a gustare una squisita quesadilla di pollo nel nostro ristorante! Filetto di pollo tenero, spezie profumate e formaggio dorato: questa combinazione conquisterà sicuramente il tuo cuore. Servita con verdure e salsa salsa. Senti il gusto unico della vera cucina messicana nell\'atmosfera accogliente del nostro ristorante!',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас насладиться изысканной куриной кесадильей в нашем ресторане! Нежное куриное филе, ароматные специи и золотистый сыр - это сочетание непременно покорит ваше сердце. Подается с овощами и соусом сальса. Почувствуйте неповторимый вкус настоящей мексиканской кухни в уютной атмосфере нашего ресторана!',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით ჩვენს რესტორანში დააგემოვნოთ დახვეწილი ქათმის კესადილია! ნაზი ქათმის ფილე, არომატული სანელებლები და ოქროსფერი ყველი - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. მიირთმევენ ბოსტნეულთან და სალსას სოუსთან ერთად. იგრძენით ნამდვილი მექსიკური სამზარეულოს უნიკალური გემო ჩვენი რესტორნის მყუდრო ატმოსფეროში!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie in unserem Restaurant eine köstliche Hähnchen-Quesadilla! Zartes Hähnchenfilet, duftende Gewürze und goldgelber Käse – diese Kombination wird Sie begeistern. Serviert mit Gemüse und Salsa-Sauce. Erleben Sie den einzigartigen Geschmack authentischer mexikanischer Küche in der gemütlichen Atmosphäre unseres Restaurants!',
      },
      {
        locale: 'zh_cn',
        value: '诚邀您光临本店，品尝我们美味的鸡肉墨西哥薄饼！鲜嫩的鸡胸肉、芬芳的香料和金黄的芝士——这绝妙的组合定会让您爱不释手。搭配蔬菜和莎莎酱，美味不容错过。在温馨舒适的餐厅氛围中，感受正宗墨西哥美食的独特魅力！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'flaming-quesadilla-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 760,
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
        locale: 'el',
        value: 'Υπερβολή μήλου',
      },
      {
        locale: 'es',
        value: 'Extravagancia de la manzana',
      },
      {
        locale: 'fr',
        value: 'Fête de la pomme',
      },
      {
        locale: 'it',
        value: 'Stravaganza di mele',
      },
      {
        locale: 'ru',
        value: 'Яблочная феерия',
      },
      {
        locale: 'ka',
        value: 'ვაშლის ექსტრავაგანზა',
      },
      {
        locale: 'de',
        value: 'Apple-Spektakel',
      },
      {
        locale: 'zh_cn',
        value: '苹果盛会',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'A delicious pie that will give you an unforgettable taste journey! Tender dough, fragrant apples and crispy crust - this combination will surely win your heart. Plunge into the holiday atmosphere with this incredible pie!',
      },
      {
        locale: 'el',
        value: 'Μια νόστιμη πίτα που θα σας χαρίσει ένα αξέχαστο γευστικό ταξίδι! Τρυφερή ζύμη, αρωματικά μήλα και τραγανή ζύμη - αυτός ο συνδυασμός σίγουρα θα κερδίσει την καρδιά σας. Βυθιστείτε στην εορταστική ατμόσφαιρα με αυτή την απίστευτη πίτα!',
      },
      {
        locale: 'es',
        value: '¡Un delicioso pastel que te brindará una experiencia de sabor inolvidable! Masa tierna, manzanas aromáticas y corteza crujiente: esta combinación te conquistará. ¡Sumérgete en el ambiente navideño con este increíble pastel!',
      },
      {
        locale: 'fr',
        value: 'Une tarte délicieuse qui vous fera vivre un voyage gustatif inoubliable ! Pâte tendre, pommes parfumées et croûte croustillante : cette combinaison saura vous séduire. Plongez dans l\'ambiance des fêtes avec cette tarte irrésistible !',
      },
      {
        locale: 'it',
        value: 'Una deliziosa torta che vi regalerà un viaggio nel gusto indimenticabile! Impasto tenero, mele profumate e crosta croccante: questa combinazione vi conquisterà sicuramente. Immergetevi nell\'atmosfera natalizia con questa torta incredibile!',
      },
      {
        locale: 'ru',
        value: 'Вкуснейший пирог, который подарит вам незабываемое вкусовое путешествие! Нежное тесто, ароматные яблоки и хрустящая корочка - это сочетание непременно покорит ваше сердце. Окунитесь в атмосферу праздника с этим невероятным пирогом!',
      },
      {
        locale: 'ka',
        value: 'გემრიელი ღვეზელი, რომელიც დაუვიწყარ გემოს მოგზაურობას გაჩუქებთ! ნაზი ცომი, არომატული ვაშლი და ხრაშუნა ცომი - ეს კომბინაცია აუცილებლად მოიგებს თქვენს გულს. ჩაეფლეთ სადღესასწაულო ატმოსფეროში ამ წარმოუდგენელი ღვეზელით!',
      },
      {
        locale: 'de',
        value: 'Ein köstlicher Kuchen, der Sie auf eine unvergessliche Geschmacksreise mitnimmt! Zarter Teig, duftende Äpfel und knusprige Kruste – diese Kombination wird Sie begeistern. Tauchen Sie mit diesem unglaublichen Kuchen in die festliche Stimmung ein!',
      },
      {
        locale: 'zh_cn',
        value: '一款美味的馅饼，将带给你难忘的味蕾之旅！松软的饼皮、香甜的苹果和酥脆的饼皮——这样的组合定能俘获你的心。快来品尝这款令人惊艳的馅饼，沉浸在浓浓的节日氛围中吧！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'apple-extravaganza-1',
        title: [
          {
            locale: 'en',
            value: 'Slice',
          },
          {
            locale: 'el',
            value: 'Φέτα',
          },
          {
            locale: 'es',
            value: 'Rebanada',
          },
          {
            locale: 'fr',
            value: 'Part',
          },
          {
            locale: 'it',
            value: 'Fetta',
          },
          {
            locale: 'ru',
            value: 'Кусок',
          },
          {
            locale: 'ka',
            value: 'ნაჭერი',
          },
          {
            locale: 'de',
            value: 'Scheibe',
          },
          {
            locale: 'zh_cn',
            value: '片',
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
        price: 250,
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
            locale: 'el',
            value: '2 φέτες',
          },
          {
            locale: 'es',
            value: '2 Rebanadas',
          },
          {
            locale: 'fr',
            value: '2 parts',
          },
          {
            locale: 'it',
            value: '2 fette',
          },
          {
            locale: 'ru',
            value: '2 куска',
          },
          {
            locale: 'ka',
            value: '2 ნაჭერი',
          },
          {
            locale: 'de',
            value: '2 Scheiben',
          },
          {
            locale: 'zh_cn',
            value: '2 片',
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
        price: 410,
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
            locale: 'el',
            value: 'Ολόκληρη πίτα',
          },
          {
            locale: 'es',
            value: 'Pastel entero',
          },
          {
            locale: 'fr',
            value: 'Tarte entière',
          },
          {
            locale: 'it',
            value: 'Torta intera',
          },
          {
            locale: 'ru',
            value: 'Весь пирог',
          },
          {
            locale: 'ka',
            value: 'მთლიანი ღვეზელი',
          },
          {
            locale: 'de',
            value: 'Ganzer Kuchen',
          },
          {
            locale: 'zh_cn',
            value: '整个馅饼',
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
        price: 930,
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
        locale: 'el',
        value: 'Σικ τσιζκέικ της Νέας Υόρκης',
      },
      {
        locale: 'es',
        value: 'Tarta de queso chic neoyorquina',
      },
      {
        locale: 'fr',
        value: 'Cheesecake chic new-yorkais',
      },
      {
        locale: 'it',
        value: 'Cheesecake chic newyorkese',
      },
      {
        locale: 'ru',
        value: 'Чизкейк "Нью-Йоркский шик"',
      },
      {
        locale: 'ka',
        value: 'ნიუ-იორკული შიკ ჩიზქეიქი',
      },
      {
        locale: 'de',
        value: 'New Yorker Chic-Käsekuchen',
      },
      {
        locale: 'zh_cn',
        value: '纽约时尚芝士蛋糕',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of a real New York cheesecake! The delicate combination of cream cheese, crunchy base and fresh fruit will give you an unforgettable taste sensation. Prepared with love, this dessert will be a perfect end to your evening or a great addition to a friendly meeting.',
      },
      {
        locale: 'el',
        value: 'Ζήστε τη μοναδική γεύση ενός πραγματικού τσιζκέικ Νέας Υόρκης! Ο ντελικάτος συνδυασμός τυριού κρέμας, τραγανής βάσης και φρέσκων φρούτων θα σας χαρίσει μια αξέχαστη γευστική αίσθηση. Φτιαγμένο με αγάπη, αυτό το επιδόρπιο θα αποτελέσει το τέλειο τέλος για τη βραδιά σας ή μια εξαιρετική προσθήκη σε μια φιλική συνάντηση.',
      },
      {
        locale: 'es',
        value: '¡Experimenta el sabor único de una auténtica tarta de queso neoyorquina! La delicada combinación de queso crema, base crujiente y fruta fresca te brindará una experiencia inolvidable. Preparado con cariño, este postre será el broche de oro perfecto para tu velada o un complemento perfecto para una reunión de amigos.',
      },
      {
        locale: 'fr',
        value: 'Découvrez le goût unique d\'un véritable cheesecake new-yorkais ! L\'alliance délicate du fromage frais, d\'une base croustillante et de fruits frais vous offrira une expérience gustative inoubliable. Préparé avec amour, ce dessert sera la touche finale parfaite à votre soirée ou un excellent complément à une rencontre entre amis.',
      },
      {
        locale: 'it',
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
      {
        locale: 'de',
        value: 'Erleben Sie den einzigartigen Geschmack eines echten New Yorker Käsekuchens! Die feine Kombination aus Frischkäse, knusprigem Boden und frischen Früchten wird Ihnen ein unvergessliches Geschmackserlebnis bescheren. Mit Liebe zubereitet, ist dieses Dessert der perfekte Abschluss eines gelungenen Abends oder eine wunderbare Bereicherung für ein Treffen mit Freunden.',
      },
      {
        locale: 'zh_cn',
        value: '体验正宗纽约芝士蛋糕的独特风味！奶油芝士、酥脆饼底和新鲜水果的完美融合，将带给您难以忘怀的味觉享受。这款用心制作的甜点，是您夜晚的完美收尾，也是朋友聚会的绝佳之选。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'new-york-chic-cheesecake-standard',
        title: [
          {
            locale: 'en',
            value: 'Slice',
          },
          {
            locale: 'el',
            value: 'Φέτα',
          },
          {
            locale: 'es',
            value: 'Rebanada',
          },
          {
            locale: 'fr',
            value: 'Part',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Scheibe',
          },
          {
            locale: 'zh_cn',
            value: '片',
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
        price: 290,
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
        locale: 'el',
        value: 'Στροβιλισμός μάνγκο',
      },
      {
        locale: 'es',
        value: 'Remolino de mango',
      },
      {
        locale: 'fr',
        value: 'Tourbillon de mangue',
      },
      {
        locale: 'it',
        value: 'Vortice di mango',
      },
      {
        locale: 'ru',
        value: 'Манговый вихрь',
      },
      {
        locale: 'ka',
        value: 'მანგოს სვირინგი',
      },
      {
        locale: 'de',
        value: 'Mangowirbel',
      },
      {
        locale: 'zh_cn',
        value: '芒果漩涡',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience a real tropical explosion of flavor with our unique dessert! A delicate combination of ripe mango, creamy cream and crispy cookies will give you an unforgettable pleasure. Plunge into the atmosphere of warmth and sunshine with every bite of this amazing treat.',
      },
      {
        locale: 'el',
        value: 'Ζήστε μια πραγματική τροπική έκρηξη γεύσεων με το μοναδικό μας επιδόρπιο! Ένας ντελικάτος συνδυασμός ώριμου μάνγκο, κρεμώδους κρέμας και τραγανών μπισκότων θα σας χαρίσει μια αξέχαστη απόλαυση. Βυθιστείτε στην ατμόσφαιρα ζεστασιάς και ηλιοφάνειας με κάθε μπουκιά αυτής της καταπληκτικής λιχουδιάς.',
      },
      {
        locale: 'es',
        value: '¡Experimenta una auténtica explosión de sabor tropical con nuestro postre único! Una delicada combinación de mango maduro, crema cremosa y galletas crujientes te brindará un placer inolvidable. Sumérgete en la atmósfera cálida y soleada con cada bocado de este delicioso postre.',
      },
      {
        locale: 'fr',
        value: 'Vivez une véritable explosion de saveurs tropicales avec notre dessert unique ! L\'alliance délicate de la mangue mûre, de la crème onctueuse et des biscuits croustillants vous procurera un plaisir inoubliable. Plongez dans une ambiance chaleureuse et ensoleillée à chaque bouchée de cette gourmandise irrésistible.',
      },
      {
        locale: 'it',
        value: 'Vivi una vera esplosione di sapori tropicali con il nostro dessert unico! Una delicata combinazione di mango maturo, crema cremosa e biscotti croccanti ti regalerà un piacere indimenticabile. Immergiti in un\'atmosfera di calore e sole con ogni morso di questa straordinaria delizia.',
      },
      {
        locale: 'ru',
        value: 'Испытайте настоящий тропический взрыв вкуса с нашим уникальным десертом! Нежное сочетание спелого манго, сливочного крема и хрустящего печенья подарит вам незабываемое удовольствие. Окунитесь в атмосферу тепла и солнечного света с каждым кусочком этого удивительного лакомства.',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ ნამდვილი ტროპიკული არომატის აფეთქება ჩვენი უნიკალური დესერტით! მწიფე მანგოს, ნაღებისებრი კრემისა და ხრაშუნა ორცხობილების ნაზი კომბინაცია დაუვიწყარ სიამოვნებას მოგანიჭებთ. ამ საოცარი ნუგბარის ყოველი ლუკმისას ჩაეფლეთ სითბოსა და მზის ატმოსფეროში.',
      },
      {
        locale: 'de',
        value: 'Erleben Sie mit unserem einzigartigen Dessert eine wahre Geschmacksexplosion der Tropen! Die delikate Kombination aus reifer Mango, cremiger Sahne und knusprigen Keksen wird Ihnen unvergesslichen Genuss bereiten. Tauchen Sie mit jedem Bissen dieser Köstlichkeit in eine warme, sonnige Atmosphäre ein.',
      },
      {
        locale: 'zh_cn',
        value: '品尝我们独具特色的甜点，体验真正的热带风味盛宴！成熟芒果、香浓奶油和酥脆饼干的完美融合，将带给您难以忘怀的愉悦享受。每一口都仿佛置身于温暖阳光的氛围中。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'mango-swirl-standard',
        title: [
          {
            locale: 'en',
            value: 'Slice',
          },
          {
            locale: 'el',
            value: 'Φέτα',
          },
          {
            locale: 'es',
            value: 'Rebanada',
          },
          {
            locale: 'fr',
            value: 'Part',
          },
          {
            locale: 'it',
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
          {
            locale: 'de',
            value: 'Schlitzer',
          },
          {
            locale: 'zh_cn',
            value: '片',
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
        price: 560,
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
        locale: 'el',
        value: 'Μυστικό πάθος: κοτόπουλο και γαρίδες',
      },
      {
        locale: 'es',
        value: 'Pasión secreta: pollo y camarones',
      },
      {
        locale: 'fr',
        value: 'Passion secrète : le poulet et les crevettes',
      },
      {
        locale: 'it',
        value: 'Passione segreta: pollo e gamberi',
      },
      {
        locale: 'ru',
        value: 'Тайная страсть: курица и креветки',
      },
      {
        locale: 'ka',
        value: 'საიდუმლო გატაცება: ქათამი და კრევეტები',
      },
      {
        locale: 'de',
        value: 'Geheime Leidenschaft: Hühnchen und Garnelen',
      },
      {
        locale: 'zh_cn',
        value: '秘密爱好：鸡肉和虾',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Chicken and shrimps - a delicate and exquisite combination for real gourmets. Roasted chicken fillet and tiger shrimps in cream sauce will be a perfect main course or addition to a side dish. Delight yourself and your loved ones with this delicious and flavorful hot dish!',
      },
      {
        locale: 'el',
        value: 'Κοτόπουλο και γαρίδες - ένας ντελικάτος και εκλεκτός συνδυασμός για πραγματικούς καλοφαγάδες. Το ψητό φιλέτο κοτόπουλου και οι γαρίδες τίγρης σε κρεμώδη σάλτσα θα αποτελέσουν ένα τέλειο κυρίως πιάτο ή μια προσθήκη σε ένα συνοδευτικό πιάτο. Απολαύστε τον εαυτό σας και τους αγαπημένους σας με αυτό το νόστιμο και γευστικό ζεστό πιάτο!',
      },
      {
        locale: 'es',
        value: 'Pollo y camarones: una combinación delicada y exquisita para los verdaderos gourmets. El filete de pollo asado y los camarones tigre en salsa cremosa serán un plato principal o guarnición perfectos. ¡Deléitate y deleita a tus seres queridos con este delicioso y sabroso plato caliente!',
      },
      {
        locale: 'fr',
        value: 'Poulet et crevettes : une association délicate et raffinée pour les fins gourmets. Le filet de poulet rôti et les crevettes tigrées à la crème constituent un plat principal idéal ou un accompagnement parfait. Régalez-vous et vos proches avec ce plat chaud, savoureux et délicieux !',
      },
      {
        locale: 'it',
        value: 'Pollo e gamberi: una combinazione delicata ed elegante per veri intenditori. Filetto di pollo arrosto e gamberi tigre in salsa di panna saranno un perfetto piatto principale o un ottimo accompagnamento. Delizia te stesso e i tuoi cari con questo piatto caldo delizioso e saporito!',
      },
      {
        locale: 'ru',
        value: 'Курица и креветки - нежное и изысканное сочетание для настоящих гурманов. Обжаренное куриное филе и тигровые креветки в сливочном соусе станут прекрасным основным блюдом или дополнением к гарниру. Порадуйте себя и своих близких этим вкусным и ароматным горячим блюдом!',
      },
      {
        locale: 'ka',
        value: 'ქათამი და კრევეტები - ნაზი და დახვეწილი კომბინაცია ნამდვილი გურმანებისთვის. შემწვარი ქათმის ფილე და ნაღების სოუსში შეზავებული ვეფხვისებრი კრევეტები იდეალური ძირითადი კერძი ან გარნირის დამატება იქნება. გაახარეთ საკუთარი თავი და თქვენი საყვარელი ადამიანები ამ გემრიელი და არომატული ცხელი კერძით!',
      },
      {
        locale: 'de',
        value: 'Hähnchen und Garnelen – eine delikate und exquisite Kombination für wahre Feinschmecker. Gebratenes Hähnchenfilet und Riesengarnelen in Sahnesauce eignen sich perfekt als Hauptgericht oder Beilage. Verwöhnen Sie sich und Ihre Lieben mit diesem köstlichen und aromatischen Gericht!',
      },
      {
        locale: 'zh_cn',
        value: '鸡肉和虾仁——精致美味的组合，专为真正的美食家打造。烤鸡胸肉配奶油虎虾，既可作为完美的主菜，也可作为配菜。这道美味可口的热菜，定能让您和家人朋友大饱口福！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'chicken-and-shrimp-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        video: {
          id: 'chicken-and-shrimp-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/chicken-and-shrimp.mp4',
        },
        weightUnit: 'g',
        weightValue: 560,
        price: 1100,
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
        locale: 'el',
        value: '"Triumphant Trio": ένα πιάτο με τρία αυγά',
      },
      {
        locale: 'es',
        value: '"Trío Triunfante": un plato de tres huevos',
      },
      {
        locale: 'fr',
        value: '« Trio triomphant » : un plat à trois œufs',
      },
      {
        locale: 'it',
        value: '"Trio trionfante": un piatto a base di tre uova',
      },
      {
        locale: 'ru',
        value: '"Триумфальное трио": блюдо из трех яиц',
      },
      {
        locale: 'ka',
        value: '„ტრიუმფალური ტრიო“: სამი კვერცხისგან შემდგარი კერძი',
      },
      {
        locale: 'de',
        value: '"Triumphierendes Trio": ein Gericht aus drei Eiern',
      },
      {
        locale: 'zh_cn',
        value: '“凯旋三重奏”：一道三蛋菜肴',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'A perfect combination of three eggs fried to a golden crust, with aromatic herbs and delicate cream. This dish will be a real discovery for your palate and will give you an unforgettable experience!',
      },
      {
        locale: 'el',
        value: 'Ένας τέλειος συνδυασμός τριών τηγανισμένων αυγών μέχρι να αποκτήσουν μια χρυσαφένια κρούστα, με αρωματικά βότανα και λεπτή κρέμα. Αυτό το πιάτο θα αποτελέσει μια πραγματική ανακάλυψη για τον ουρανίσκο σας και θα σας χαρίσει μια αξέχαστη εμπειρία!',
      },
      {
        locale: 'es',
        value: 'Una combinación perfecta de tres huevos fritos hasta obtener una costra dorada, con hierbas aromáticas y una delicada crema. ¡Este plato será un verdadero descubrimiento para tu paladar y te brindará una experiencia inolvidable!',
      },
      {
        locale: 'fr',
        value: 'L\'alliance parfaite de trois œufs frits à la perfection, dorés à souhait, agrémentés d\'herbes aromatiques et d\'une crème onctueuse. Ce plat sera une véritable révélation pour vos papilles et vous offrira une expérience inoubliable !',
      },
      {
        locale: 'it',
        value: 'Una combinazione perfetta di tre uova fritte fino a ottenere una crosta dorata, con erbe aromatiche e panna delicata. Questo piatto sarà una vera scoperta per il tuo palato e ti regalerà un\'esperienza indimenticabile!',
      },
      {
        locale: 'ru',
        value: 'Идеальное сочетание трех яиц, обжаренных до золотистой корочки, с ароматными травами и нежным кремом. Это блюдо станет настоящим открытием для вашего вкуса и подарит вам незабываемые впечатления!',
      },
      {
        locale: 'ka',
        value: 'ოქროსფერ ქერქამდე შემწვარი სამი კვერცხის, არომატული მწვანილებისა და ნაზი ნაღების იდეალური კომბინაცია. ეს კერძი თქვენი გემოვნებისთვის ნამდვილი აღმოჩენა იქნება და დაუვიწყარ გამოცდილებას მოგანიჭებთ!',
      },
      {
        locale: 'de',
        value: 'Drei goldbraun gebratene Eier, verfeinert mit aromatischen Kräutern und zarter Sahne, bilden die perfekte Kombination. Dieses Gericht wird Ihren Gaumen verwöhnen und Ihnen ein unvergessliches Geschmackserlebnis bescheren!',
      },
      {
        locale: 'zh_cn',
        value: '三个煎至金黄酥脆的鸡蛋，搭配芬芳的香草和细腻的奶油，堪称完美组合。这道菜将带给您真正的味蕾惊喜，让您拥有难忘的体验！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'triumphant-trio-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        video: {
          id: 'triumphant-trio-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/triumphant-trio.mp4',
        },
        weightUnit: 'g',
        weightValue: 320,
        price: 460,
        sku: null,
        nutritionFacts: {
          calories: 245.0,
          protein: 13.8,
          fat: 20.1,
          carbohydrate: 1.2,
        },
      },
    ],
    badges: [
      {
        id: 'hit',
        title: [
          {
            locale: 'en',
            value: 'Hit 🔥',
          },
          {
            locale: 'el',
            value: 'Χτύπημα 🔥',
          },
          {
            locale: 'es',
            value: '¡Hit 🔥!',
          },
          {
            locale: 'fr',
            value: 'Hit 🔥',
          },
          {
            locale: 'it',
            value: 'Hit 🔥',
          },
          {
            locale: 'ru',
            value: 'Хит 🔥',
          },
          {
            locale: 'ka',
            value: 'ხიტი 🔥',
          },
          {
            locale: 'de',
            value: 'Hit 🔥',
          },
          {
            locale: 'zh_cn',
            value: '热门 🔥',
          },
        ],
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
        locale: 'el',
        value: 'Φαχίτας Firebird',
      },
      {
        locale: 'es',
        value: 'Fajitas de pájaro de fuego',
      },
      {
        locale: 'fr',
        value: 'Fajitas Firebird',
      },
      {
        locale: 'it',
        value: 'Fajitas Firebird',
      },
      {
        locale: 'ru',
        value: 'Фахитас "Жар-птица"',
      },
      {
        locale: 'ka',
        value: 'ცეცხლოვანი ჩიტის ფახიტასი',
      },
      {
        locale: 'de',
        value: 'Firebird fajitas',
      },
      {
        locale: 'zh_cn',
        value: '火鸟法士达',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of Mexico with our flavorful chicken fajitas! Tender chicken meat fried with vegetables and spices will be a great addition to your favorite tortillas. Enjoy the bright flavor and get energized by the sun!',
      },
      {
        locale: 'el',
        value: 'Ζήστε τη μοναδική γεύση του Μεξικού με τις γευστικές φαχίτας κοτόπουλου μας! Το τρυφερό κρέας κοτόπουλου τηγανισμένο με λαχανικά και μπαχαρικά θα αποτελέσει μια εξαιρετική προσθήκη στις αγαπημένες σας τορτίγιες. Απολαύστε τη λαμπερή γεύση και ενεργοποιηθείτε από τον ήλιο!',
      },
      {
        locale: 'es',
        value: '¡Experimenta el sabor único de México con nuestras deliciosas fajitas de pollo! La tierna carne de pollo frita con verduras y especias será un excelente complemento para tus tortillas favoritas. ¡Disfruta de su intenso sabor y energízate con el sol!',
      },
      {
        locale: 'fr',
        value: 'Découvrez les saveurs uniques du Mexique avec nos fajitas au poulet savoureuses ! De tendres morceaux de poulet frits avec des légumes et des épices se marieront à merveille avec vos tortillas préférées. Savourez ces arômes éclatants et faites le plein d\'énergie grâce au soleil !',
      },
      {
        locale: 'it',
        value: 'Scopri il gusto unico del Messico con le nostre fajitas di pollo saporite! Tenero pollo saltato con verdure e spezie sarà un ottimo accompagnamento per le tue tortillas preferite. Goditi il sapore vivace e fatti caricare dal sole!',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус Мексики с нашими ароматными куриными фахитас! Нежное куриное мясо, обжаренное с овощами и специями, станет отличным дополнением к вашим любимым тортильям. Наслаждайтесь ярким вкусом и заряжайтесь энергией солнца!',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ მექსიკის უნიკალური გემო ჩვენი არომატული ქათმის ფახიტასით! ბოსტნეულითა და სანელებლებით შემწვარი ნაზი ქათმის ხორცი შესანიშნავი დამატება იქნება თქვენი საყვარელი ტორტილიებისთვის. დატკბით ნათელი არომატით და მიიღეთ ენერგია მზისგან!',
      },
      {
        locale: 'de',
        value: 'Erleben Sie den einzigartigen Geschmack Mexikos mit unseren köstlichen Hähnchen-Fajitas! Zartes Hähnchenfleisch, gebraten mit Gemüse und Gewürzen, ist die perfekte Ergänzung zu Ihren Lieblingstortillas. Genießen Sie den frischen Geschmack und tanken Sie neue Energie!',
      },
      {
        locale: 'zh_cn',
        value: '品尝我们风味独特的墨西哥鸡肉法士达！鲜嫩的鸡肉与蔬菜和香料一起翻炒，搭配您最爱的玉米饼，美味无比。享受这清新爽口的滋味，感受阳光般的活力！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'firebird-fajitas-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        video: {
          id: 'firebird-fajitas-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/firebird-fajitas.mp4',
        },
        weightUnit: 'g',
        weightValue: 680,
        price: 1290,
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
        locale: 'el',
        value: 'Ψητός σολομός με τσιμιτσούρι',
      },
      {
        locale: 'es',
        value: 'Salmón a la plancha con chimichurri',
      },
      {
        locale: 'fr',
        value: 'Saumon grillé avec chimichurri',
      },
      {
        locale: 'it',
        value: 'Salmone alla griglia con chimichurri',
      },
      {
        locale: 'ru',
        value: 'Лосось на гриле с чимичурри',
      },
      {
        locale: 'ka',
        value: 'გრილზე შემწვარი ორაგული ჩიმიჩურით',
      },
      {
        locale: 'de',
        value: 'Gegrillter Lachs mit Chimichurri',
      },
      {
        locale: 'zh_cn',
        value: '烤三文鱼配阿根廷青酱',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience an explosion of flavor with our hot dish Grilled Salmon with chimichurri! Flavorful spiced salmon is grilled until golden and then served with a refreshing chimichurri sauce. The perfect balance of flavor and aroma for your enjoyment!',
      },
      {
        locale: 'el',
        value: 'Ζήστε μια έκρηξη γεύσεων με το ζεστό μας πιάτο. Ψητός σολομός με τσιμιτσούρι! Ο γευστικός πικάντικος σολομός ψήνεται μέχρι να ροδίσει και στη συνέχεια σερβίρεται με μια δροσιστική σάλτσα τσιμιτσούρι. Η τέλεια ισορροπία γεύσης και αρώματος για την απόλαυσή σας!',
      },
      {
        locale: 'es',
        value: 'Experimente una explosión de sabor con nuestro plato caliente de Salmón a la Plancha con Chimichurri. Este delicioso salmón especiado se asa hasta quedar dorado y se sirve con una refrescante salsa chimichurri. ¡El equilibrio perfecto de sabor y aroma para su disfrute!',
      },
      {
        locale: 'fr',
        value: 'Découvrez une explosion de saveurs avec notre plat chaud : Saumon grillé au chimichurri ! Un saumon savoureux et épicé, grillé jusqu\'à obtenir une belle couleur dorée, est servi avec une sauce chimichurri rafraîchissante. Un équilibre parfait de saveurs et d\'arômes pour un pur moment de plaisir !',
      },
      {
        locale: 'it',
        value: 'Vivi un\'esplosione di sapori con il nostro piatto caldo: salmone alla griglia con chimichurri! Il salmone speziato viene grigliato fino a doratura e servito con una salsa chimichurri rinfrescante. Il perfetto equilibrio di sapore e aroma per il tuo piacere!',
      },
      {
        locale: 'ru',
        value: 'Испытайте взрыв вкуса с нашим горячим блюдом «Лосось на гриле с чимичурри»! Ароматный лосось со специями обжаривается на гриле до золотистого цвета, а затем подается с освежающим соусом чимичурри. Идеальный баланс вкуса и аромата для вашего удовольствия!',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ არომატების აფეთქება ჩვენი ცხელი კერძით: გრილზე შემწვარი ორაგული ჩიმიჩურით! არომატული სანელებლებით შეზავებული ორაგული იწვება ოქროსფერ შეფერილობამდე და შემდეგ მიირთმევა გამაგრილებელ ჩიმიჩურის სოუსთან ერთად. გემოსა და არომატის იდეალური ბალანსი თქვენი სიამოვნებისთვის!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie ein wahres Geschmackserlebnis mit unserem warmen Gericht: Gegrillter Lachs mit Chimichurri! Der aromatische, gewürzte Lachs wird goldbraun gegrillt und anschließend mit einer erfrischenden Chimichurri-Sauce serviert. Die perfekte Balance aus Geschmack und Aroma – ein Genuss für Ihren Gaumen!',
      },
      {
        locale: 'zh_cn',
        value: '品尝我们热腾腾的烤三文鱼配阿根廷青酱，感受味蕾的极致享受！香辣三文鱼烤至金黄酥脆，佐以清爽的阿根廷青酱，风味与香气完美融合，令人回味无穷！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'grilled-salmon-with-chimichurri-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 1890,
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
        locale: 'el',
        value: 'Βασίλειο Θαλασσινών',
      },
      {
        locale: 'es',
        value: 'Reino de los mariscos',
      },
      {
        locale: 'fr',
        value: 'Royaume des fruits de mer',
      },
      {
        locale: 'it',
        value: 'Regno dei frutti di mare',
      },
      {
        locale: 'ru',
        value: 'Королевство морепродуктов',
      },
      {
        locale: 'ka',
        value: 'ზღვის პროდუქტების სამეფო',
      },
      {
        locale: 'de',
        value: 'Meeresfrüchte-Königreich',
      },
      {
        locale: 'zh_cn',
        value: '海鲜王国',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Tender sautéed cod and shrimps - an exquisite combination of seafood flavors in a fragrant tomato sauce. This hot dish will become a real decoration of your table and will delight your guests!',
      },
      {
        locale: 'el',
        value: 'Τρυφερός σοταρισμένος μπακαλιάρος και γαρίδες - ένας εξαιρετικός συνδυασμός θαλασσινών γεύσεων σε μια αρωματική σάλτσα ντομάτας. Αυτό το ζεστό πιάτο θα γίνει μια πραγματική διακόσμηση του τραπεζιού σας και θα ενθουσιάσει τους καλεσμένους σας!',
      },
      {
        locale: 'es',
        value: 'Tierno bacalao y camarones salteados: una exquisita combinación de sabores de mariscos en una fragante salsa de tomate. ¡Este plato caliente se convertirá en una verdadera joya de tu mesa y deleitará a tus invitados!',
      },
      {
        locale: 'fr',
        value: 'Morue et crevettes sautées, tendres et savoureuses : une exquise alliance de saveurs marines dans une sauce tomate parfumée. Ce plat chaud embellira votre table et ravira vos convives !',
      },
      {
        locale: 'it',
        value: 'Merluzzo e gamberi saltati: una squisita combinazione di sapori di mare in una profumata salsa di pomodoro. Questo piatto caldo sarà una vera decorazione per la tua tavola e delizierà i tuoi ospiti!',
      },
      {
        locale: 'ru',
        value: 'Нежная соте из трески и креветок - изысканное сочетание вкусов морепродуктов в ароматном томатном соусе. Это горячее блюдо станет настоящим украшением вашего стола и приведет в восторг ваших гостей!',
      },
      {
        locale: 'ka',
        value: 'ნაზი შემწვარი ვირთევზა და კრევეტები - ზღვის პროდუქტების არომატების დახვეწილი კომბინაცია არომატულ პომიდვრის სოუსში. ეს ცხელი კერძი თქვენი სუფრის ნამდვილ დეკორაციად იქცევა და სტუმრებს აღაფრთოვანებს!',
      },
      {
        locale: 'de',
        value: 'Zart gebratener Kabeljau und Garnelen – eine exquisite Kombination aus Meeresfrüchtearomen in einer duftenden Tomatensoße. Dieses warme Gericht wird Ihre Tafel schmücken und Ihre Gäste begeistern!',
      },
      {
        locale: 'zh_cn',
        value: '鲜嫩的鳕鱼和虾仁，搭配香气四溢的番茄酱汁，海鲜风味完美融合。这道热菜不仅会成为餐桌上的一道亮丽风景，更会让您的客人赞不绝口！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'seafood-kingdom-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 1790,
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
        locale: 'el',
        value: 'Jambalaya με κοτόπουλο και γαρίδες σε στυλ kanjun',
      },
      {
        locale: 'es',
        value: 'Jambalaya con pollo y camarones al estilo kanjun',
      },
      {
        locale: 'fr',
        value: 'Jambalaya au poulet et aux crevettes façon kanjun',
      },
      {
        locale: 'it',
        value: 'Jambalaya con pollo e gamberi in stile kanjun',
      },
      {
        locale: 'ru',
        value: 'Джамбалайя с курицей и креветками в стиле канжун',
      },
      {
        locale: 'ka',
        value: 'ჯამბალაია ქათმის ხორცითა და კრევეტებით კანჯუნის სტილში',
      },
      {
        locale: 'de',
        value: 'Jambalaya mit Hühnchen und Garnelen nach Kanjun-Art',
      },
      {
        locale: 'zh_cn',
        value: '坎君风味鸡肉虾仁什锦饭',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the unique flavor of jambalaya with chicken and shrimps in Kanjun style! This hot dish combines French and Spanish culinary traditions and will please even the most demanding gourmets. Try it and see for yourself!',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε τη μοναδική γεύση της jambalaya με κοτόπουλο και γαρίδες σε στυλ Kanjun! Αυτό το ζεστό πιάτο συνδυάζει γαλλικές και ισπανικές γαστρονομικές παραδόσεις και θα ικανοποιήσει ακόμη και τους πιο απαιτητικούς καλοφαγάδες. Δοκιμάστε το και δείτε μόνοι σας!',
      },
      {
        locale: 'es',
        value: '¡Descubre el sabor único de la jambalaya con pollo y camarones al estilo Kanjun! Este plato picante combina las tradiciones culinarias francesa y española y encantará incluso a los gourmets más exigentes. ¡Pruébalo y compruébalo tú mismo!',
      },
      {
        locale: 'fr',
        value: 'Découvrez la saveur unique du jambalaya au poulet et aux crevettes, façon Kanjun ! Ce plat savoureux allie les traditions culinaires françaises et espagnoles et ravira même les palais les plus exigeants. Goûtez-y et vous serez conquis !',
      },
      {
        locale: 'it',
        value: 'Scopri il sapore unico della jambalaya con pollo e gamberi in stile Kanjun! Questo piatto caldo combina le tradizioni culinarie francesi e spagnole e piacerà anche ai palati più esigenti. Provalo e vedrai tu stesso!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя неповторимый вкус джамбалайи с курицей и креветками по-канжунски! Это горячее блюдо сочетает в себе французские и испанские кулинарные традиции и порадует даже самых требовательных гурманов. Попробуйте и убедитесь сами!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ჯამბალაიას უნიკალური არომატი ქათმით და კრევეტებით კანჯუნის სტილში! ეს ცხელი კერძი აერთიანებს ფრანგულ და ესპანურ კულინარიულ ტრადიციებს და მოეწონება ყველაზე მომთხოვნი გურმანებსაც კი. გასინჯეთ და თავად დარწმუნდით!',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie den einzigartigen Geschmack von Jambalaya mit Hühnchen und Garnelen nach Kanjun-Art! Dieses pikante Gericht vereint französische und spanische Kochtraditionen und wird selbst anspruchsvollste Feinschmecker begeistern. Probieren Sie es selbst!',
      },
      {
        locale: 'zh_cn',
        value: '来尝尝康俊风味鸡肉虾仁什锦饭的独特滋味吧！这道热气腾腾的菜肴融合了法国和西班牙的烹饪传统，即使是最挑剔的美食家也会赞不绝口。快来亲自品尝吧！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'jambalaya-with-chicken-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 990,
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
        locale: 'el',
        value: 'Πικάντικο ορεκτικό: σαλάτα με ψητό κοτόπουλο',
      },
      {
        locale: 'es',
        value: 'Aperitivo picante: ensalada con pollo a la parrilla',
      },
      {
        locale: 'fr',
        value: 'Entrée épicée : salade au poulet grillé',
      },
      {
        locale: 'it',
        value: 'Antipasto piccante: insalata con pollo alla griglia',
      },
      {
        locale: 'ru',
        value: 'Пикантная закуска: салат с курицей-гриль',
      },
      {
        locale: 'ka',
        value: 'ცხარე მადისაღმძვრელი: სალათი შემწვარი ქათმით',
      },
      {
        locale: 'de',
        value: 'Pikante Vorspeise: Salat mit gegrilltem Hähnchen',
      },
      {
        locale: 'zh_cn',
        value: '香辣开胃菜：烤鸡肉沙拉',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to enjoy a savory appetizer! Our signature salad with grilled chicken is a perfect combination of juicy chicken, fresh vegetables and flavorful sauce. Don\'t miss the opportunity to try this exquisite dish in our restaurant and be energized for the whole day!',
      },
      {
        locale: 'el',
        value: 'Σας προσκαλούμε να απολαύσετε ένα αλμυρό ορεκτικό! Η χαρακτηριστική μας σαλάτα με ψητό κοτόπουλο είναι ένας τέλειος συνδυασμός ζουμερού κοτόπουλου, φρέσκων λαχανικών και γευστικής σάλτσας. Μην χάσετε την ευκαιρία να δοκιμάσετε αυτό το εξαιρετικό πιάτο στο εστιατόριό μας και να έχετε ενέργεια για όλη την ημέρα!',
      },
      {
        locale: 'es',
        value: '¡Te invitamos a disfrutar de un delicioso aperitivo! Nuestra ensalada de autor con pollo a la parrilla combina a la perfección pollo jugoso, verduras frescas y una salsa deliciosa. ¡No te pierdas la oportunidad de probar este exquisito plato en nuestro restaurante y recargar energías para todo el día!',
      },
      {
        locale: 'fr',
        value: 'Nous vous invitons à savourer une délicieuse entrée ! Notre salade signature au poulet grillé est une combinaison parfaite de poulet juteux, de légumes frais et d\'une sauce savoureuse. Ne manquez pas l\'occasion de goûter ce plat exquis dans notre restaurant et de faire le plein d\'énergie pour toute la journée !',
      },
      {
        locale: 'it',
        value: 'Vi invitiamo a gustare un antipasto saporito! La nostra insalata con pollo alla griglia è una combinazione perfetta di pollo succoso, verdure fresche e salsa saporita. Non perdete l\'occasione di provare questo piatto squisito nel nostro ristorante e di fare il pieno di energia per tutta la giornata!',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас насладиться пикантной закуской! Наш фирменный салат с курицей-гриль - это идеальное сочетание сочной курицы, свежих овощей и ароматного соуса. Не упустите возможность попробовать это изысканное блюдо в нашем ресторане и зарядиться энергией на весь день!',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით გემრიელი მადისაღმძვრელის დასაგემოვნებლად! ჩვენი ფირმული სალათი შემწვარი ქათმით წვნიანი ქათმის, ახალი ბოსტნეულისა და არომატული სოუსის იდეალური კომბინაციაა. არ გამოტოვოთ შესაძლებლობა, დააგემოვნოთ ეს დახვეწილი კერძი ჩვენს რესტორანში და მთელი დღის განმავლობაში ენერგიით აღსავსე იყოთ!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie eine köstliche Vorspeise! Unser Salat mit gegrilltem Hähnchen ist die perfekte Kombination aus saftigem Hähnchenfleisch, frischem Gemüse und einer aromatischen Sauce. Lassen Sie sich dieses exquisite Gericht nicht entgehen und starten Sie gestärkt in den Tag!',
      },
      {
        locale: 'zh_cn',
        value: '我们诚邀您品尝美味开胃菜！我们的招牌烤鸡沙拉完美融合了鲜嫩多汁的鸡肉、新鲜蔬菜和浓郁酱汁。千万不要错过在我们餐厅品尝这道美味佳肴的机会，让您活力满满地迎接新的一天！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'salad-with-grilled-chicken-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        video: {
          id: 'salad-with-grilled-chicken-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/salad-with-grilled-chicken.mp4',
        },
        weightUnit: 'g',
        weightValue: 340,
        price: 650,
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
        locale: 'el',
        value: '"Στροβιλισμός φωτιάς": Σαλάτα με κοτόπουλο Buffalo',
      },
      {
        locale: 'es',
        value: '"Remolino de fuego": Ensalada de pollo búfalo',
      },
      {
        locale: 'fr',
        value: '« Tourbillon de feu » : Salade de poulet Buffalo',
      },
      {
        locale: 'it',
        value: '"Vortice di fuoco": Insalata di pollo Buffalo',
      },
      {
        locale: 'ru',
        value: '"Огненный вихрь": Салат с курицей Баффало',
      },
      {
        locale: 'ka',
        value: '„ცეცხლოვანი ტრიალი“: ბუფალოს ქათმის სალათი',
      },
      {
        locale: 'de',
        value: '"Feuerwirbel": Büffel-Hühnersalat',
      },
      {
        locale: 'zh_cn',
        value: '“火焰旋风”：布法罗鸡肉沙拉',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'We invite you to enjoy the exquisite taste of Buffalo chicken salad in our restaurant! Tender chicken meat marinated in spicy sauce is perfectly combined with lettuce leaves, carrots, celery and original blue cheese dressing. This dish will be a real discovery for lovers of spicy and unusual flavor combinations!',
      },
      {
        locale: 'el',
        value: 'Σας προσκαλούμε να απολαύσετε την εξαιρετική γεύση της σαλάτας κοτόπουλου Buffalo στο εστιατόριό μας! Το τρυφερό κρέας κοτόπουλου μαριναρισμένο σε πικάντικη σάλτσα συνδυάζεται τέλεια με φύλλα μαρουλιού, καρότα, σέλινο και πρωτότυπη σάλτσα από μπλε τυρί. Αυτό το πιάτο θα αποτελέσει μια πραγματική ανακάλυψη για τους λάτρεις των πικάντικων και ασυνήθιστων γευστικών συνδυασμών!',
      },
      {
        locale: 'es',
        value: '¡Le invitamos a disfrutar del exquisito sabor de la ensalada de pollo Buffalo en nuestro restaurante! La tierna carne de pollo marinada en salsa picante combina a la perfección con lechuga, zanahoria, apio y el original aderezo de queso azul. ¡Este plato será un verdadero descubrimiento para los amantes de las combinaciones de sabores picantes y originales!',
      },
      {
        locale: 'fr',
        value: 'Nous vous invitons à savourer l\'exquise salade de poulet Buffalo dans notre restaurant ! De tendres morceaux de poulet marinés dans une sauce épicée se marient à merveille avec de la laitue, des carottes, du céleri et une vinaigrette originale au bleu. Ce plat ravira les amateurs de saveurs relevées et originales !',
      },
      {
        locale: 'it',
        value: 'Vi invitiamo a gustare il sapore squisito dell\'insalata di pollo Buffalo nel nostro ristorante! Tenero pollo marinato in salsa piccante si combina perfettamente con lattuga, carote, sedano e il nostro originale dressing al formaggio blu. Questo piatto sarà una vera scoperta per gli amanti dei sapori piccanti e delle combinazioni insolite!',
      },
      {
        locale: 'ru',
        value: 'Приглашаем вас насладиться изысканным вкусом салата с курицей «Баффало» в нашем ресторане! Нежное куриное мясо, маринованное в пикантном соусе, идеально сочетается с листьями салата, морковью, сельдереем и оригинальной заправкой из голубого сыра. Это блюдо станет настоящим открытием для любителей острых и необычных вкусовых сочетаний!',
      },
      {
        locale: 'ka',
        value: 'გეპატიჟებით ჩვენს რესტორანში დააგემოვნოთ ბუფალოს ქათმის სალათის დახვეწილი გემო! ცხარე სოუსში მარინირებული ნაზი ქათმის ხორცი იდეალურად ერწყმის სალათის ფურცლებს, სტაფილოს, ნიახურს და ორიგინალურ ცისფერი ყველის სოუსს. ეს კერძი ნამდვილი აღმოჩენა იქნება ცხარე და უჩვეულო არომატული კომბინაციების მოყვარულთათვის!',
      },
      {
        locale: 'de',
        value: 'Genießen Sie den exquisiten Geschmack unseres Buffalo Chicken Salats in unserem Restaurant! Zartes Hähnchenfleisch, mariniert in pikanter Sauce, harmoniert perfekt mit Salatblättern, Karotten, Sellerie und unserem originellen Blauschimmelkäse-Dressing. Dieses Gericht ist eine wahre Entdeckung für alle Liebhaber von würzigen und außergewöhnlichen Geschmackskombinationen!',
      },
      {
        locale: 'zh_cn',
        value: '我们诚邀您来本店品尝美味的布法罗鸡肉沙拉！鲜嫩的鸡肉用香辣酱汁腌制，搭配生菜叶、胡萝卜、芹菜和特制蓝纹奶酪酱，风味绝佳。这道菜一定会让喜爱辛辣和独特口味组合的食客们眼前一亮！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'fire-whirl-buffalo-chicken-salad-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        video: {
          id: 'fire-whirl-buffalo-chicken-salad-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/fire-whirl-buffalo-chicken-salad.mp4',
        },
        weightUnit: 'g',
        weightValue: 320,
        price: 780,
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
        locale: 'el',
        value: 'Γοητευτικές γαρίδες: Σαλάτα του Καίσαρα',
      },
      {
        locale: 'es',
        value: 'Camarones encantadores: ensalada César',
      },
      {
        locale: 'fr',
        value: 'Crevettes charmantes : salade César',
      },
      {
        locale: 'it',
        value: 'Gamberi affascinanti: insalata Caesar',
      },
      {
        locale: 'ru',
        value: 'Очаровательные креветки: Салат "Цезарь"',
      },
      {
        locale: 'ka',
        value: 'მომხიბვლელი კრევეტები: კეისრის სალათი',
      },
      {
        locale: 'de',
        value: 'Charmante Garnelen: Caesar-Salat',
      },
      {
        locale: 'zh_cn',
        value: '迷人的虾仁：凯撒沙拉',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of Caesar salad with shrimps in our restaurant! Tender combination of juicy shrimps, crispy salad leaves and flavorful sauce will win your heart. A perfect choice for a romantic dinner or a friendly meeting.',
      },
      {
        locale: 'el',
        value: 'Ζήστε τη μοναδική γεύση της σαλάτας του Καίσαρα με γαρίδες στο εστιατόριό μας! Ένας τρυφερός συνδυασμός από ζουμερές γαρίδες, τραγανά φύλλα σαλάτας και γευστική σάλτσα θα κερδίσει την καρδιά σας. Μια τέλεια επιλογή για ένα ρομαντικό δείπνο ή μια φιλική συνάντηση.',
      },
      {
        locale: 'es',
        value: '¡Disfruta del sabor único de la ensalada César con camarones en nuestro restaurante! La tierna combinación de jugosos camarones, crujientes hojas de ensalada y una salsa deliciosa te conquistará. Una opción perfecta para una cena romántica o una reunión de amigos.',
      },
      {
        locale: 'fr',
        value: 'Découvrez la saveur unique de notre salade César aux crevettes ! La combinaison tendre de crevettes juteuses, de feuilles de salade croquantes et d’une sauce savoureuse vous séduira. Un choix idéal pour un dîner romantique ou un repas entre amis.',
      },
      {
        locale: 'it',
        value: 'Scoprite il gusto unico dell\'insalata Caesar con gamberi nel nostro ristorante! Una combinazione delicata di gamberi succosi, foglie di insalata croccanti e salsa saporita conquisterà il vostro cuore. Una scelta perfetta per una cena romantica o un incontro tra amici.',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус салата «Цезарь» с креветками в нашем ресторане! Нежное сочетание сочных креветок, хрустящих листьев салата и ароматного соуса покорит ваше сердце. Идеальный выбор для романтического ужина или дружеской встречи.',
      },
      {
        locale: 'ka',
        value: 'ჩვენს რესტორანში დააგემოვნეთ კრევეტებით შეზავებული ცეზარის სალათის უნიკალური გემო! წვნიანი კრევეტების, ხრაშუნა სალათის ფოთლებისა და არომატული სოუსის ნაზი კომბინაცია თქვენს გულს მოიგებს. იდეალური არჩევანია რომანტიკული ვახშმისთვის ან მეგობრული შეხვედრისთვის.',
      },
      {
        locale: 'de',
        value: 'Genießen Sie den einzigartigen Geschmack unseres Caesar Salad mit Garnelen! Die zarte Kombination aus saftigen Garnelen, knackigen Salatblättern und aromatischer Sauce wird Sie begeistern. Die perfekte Wahl für ein romantisches Abendessen oder ein Treffen mit Freunden.',
      },
      {
        locale: 'zh_cn',
        value: '来我们餐厅品尝凯撒沙拉配鲜虾的独特风味吧！鲜嫩多汁的虾仁、爽脆的沙拉叶和浓郁的酱汁完美融合，定会让您爱不释手。无论是浪漫晚餐还是朋友聚会，都是绝佳之选。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'charming-shrimp-caesar-salad-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        video: {
          id: 'charming-shrimp-caesar-salad-standard-video',
          type: 'video/mp4',
          url: 'https://storage.yandexcloud.net/next-orders-food-demo/video/charming-shrimp-caesar-salad.mp4',
        },
        weightUnit: 'g',
        weightValue: 240,
        price: 870,
        sku: null,
        nutritionFacts: {
          calories: 210.0,
          protein: 14.5,
          fat: 13.2,
          carbohydrate: 7.8,
        },
      },
    ],
    badges: [
      {
        id: 'gastronomic-delight',
        title: [
          {
            locale: 'en',
            value: 'Gastronomic Delight',
          },
          {
            locale: 'el',
            value: 'Γαστρονομική Απόλαυση',
          },
          {
            locale: 'es',
            value: 'Delicias Gastronómicas',
          },
          {
            locale: 'fr',
            value: 'Délice gastronomique',
          },
          {
            locale: 'it',
            value: 'Piacere gastronomico',
          },
          {
            locale: 'ru',
            value: 'Гастрономическое наслаждение',
          },
          {
            locale: 'ka',
            value: 'გასტრონომიული სიამოვნება',
          },
          {
            locale: 'de',
            value: 'Kulinarischer Genuss',
          },
          {
            locale: 'zh_cn',
            value: '美食盛宴',
          },
        ],
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
        locale: 'el',
        value: '"Barbecue Flip": μια έκρηξη γεύσης και αρώματος',
      },
      {
        locale: 'es',
        value: '"Barbecue Flip": una explosión de sabor y aroma',
      },
      {
        locale: 'fr',
        value: '"Barbecue Flip" : une explosion de saveurs et d\'arômes',
      },
      {
        locale: 'it',
        value: '"Barbecue Flip": un\'esplosione di sapore e aroma',
      },
      {
        locale: 'ru',
        value: '"Барбекю флип": взрыв вкуса и аромата',
      },
      {
        locale: 'ka',
        value: '„ბარბექიუ ფლიპი“: გემოსა და არომატის აფეთქება',
      },
      {
        locale: 'de',
        value: '"Barbecue Flip": eine Geschmacks- und Aromaexplosion',
      },
      {
        locale: 'zh_cn',
        value: '“烧烤翻转”：风味和香气的爆发',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Try our signature BBQ chicken salad - a perfect combination of juicy chicken, bacon, tomatoes and eggs with BBQ sauce. The delicate taste and flavor of this dish will be remembered for a long time!',
      },
      {
        locale: 'el',
        value: 'Δοκιμάστε τη χαρακτηριστική μας σαλάτα με κοτόπουλο BBQ - έναν τέλειο συνδυασμό ζουμερού κοτόπουλου, μπέικον, ντομάτας και αυγών με σάλτσα BBQ. Η λεπτή γεύση και το άρωμα αυτού του πιάτου θα σας μείνουν αξέχαστα για πολύ καιρό!',
      },
      {
        locale: 'es',
        value: 'Prueba nuestra ensalada de pollo BBQ de autor: una combinación perfecta de jugoso pollo, tocino, tomates y huevos con salsa BBQ. ¡Su delicado sabor y aroma te acompañarán por mucho tiempo!',
      },
      {
        locale: 'fr',
        value: 'Goûtez notre salade de poulet BBQ signature : une combinaison parfaite de poulet juteux, de bacon, de tomates et d’œufs, le tout nappé de sauce BBQ. Le goût délicat et savoureux de ce plat vous laissera un souvenir impérissable !',
      },
      {
        locale: 'it',
        value: 'Prova la nostra insalata di pollo BBQ: una combinazione perfetta di pollo succoso, bacon, pomodori e uova con salsa BBQ. Il gusto delicato e il sapore di questo piatto ti rimarranno impressi a lungo!',
      },
      {
        locale: 'ru',
        value: 'Попробуйте наш фирменный салат с курицей BBQ - идеальное сочетание сочной курицы, бекона, помидоров и яиц с соусом барбекю. Нежный вкус и аромат этого блюда запомнится вам надолго!',
      },
      {
        locale: 'ka',
        value: 'გასინჯეთ ჩვენი ფირმული BBQ ქათმის სალათი - წვნიანი ქათმის, ბეკონის, პომიდვრისა და კვერცხის იდეალური კომბინაცია BBQ სოუსთან ერთად. ამ კერძის ნაზი გემო და არომატი დიდხანს დაგამახსოვრდებათ!',
      },
      {
        locale: 'de',
        value: 'Probieren Sie unseren einzigartigen BBQ-Hähnchensalat – eine perfekte Kombination aus saftigem Hähnchen, Speck, Tomaten und Eiern mit BBQ-Sauce. Der feine Geschmack dieses Gerichts wird Ihnen noch lange in Erinnerung bleiben!',
      },
      {
        locale: 'zh_cn',
        value: '试试我们的招牌烧烤鸡肉沙拉——鲜嫩多汁的鸡肉、培根、番茄和鸡蛋，搭配烧烤酱，完美融合。这道菜的美味和口感定会让您回味无穷！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'barbecue-flip-salad-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 680,
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
        locale: 'el',
        value: 'Η κομψότητα του Cobb',
      },
      {
        locale: 'es',
        value: 'El estilo chic de Cobb',
      },
      {
        locale: 'fr',
        value: 'Le chic de Cobb',
      },
      {
        locale: 'it',
        value: 'L\'eleganza di Cobb',
      },
      {
        locale: 'ru',
        value: 'Кобб шик',
      },
      {
        locale: 'ka',
        value: 'კობის შიკი',
      },
      {
        locale: 'de',
        value: 'Cobbs schick',
      },
      {
        locale: 'zh_cn',
        value: '科布的时尚',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the exquisite taste of the legendary Cobb salad in our restaurant! This combination of tender chicken, juicy avocado, fresh tomatoes, crispy bacon and fragrant blue cheese will not leave you indifferent. An ideal choice for those who appreciate real American cuisine and want to enjoy the unique flavor.',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε την εξαιρετική γεύση της θρυλικής σαλάτας Cobb στο εστιατόριό μας! Αυτός ο συνδυασμός από τρυφερό κοτόπουλο, ζουμερό αβοκάντο, φρέσκες ντομάτες, τραγανό μπέικον και αρωματικό μπλε τυρί δεν θα σας αφήσει αδιάφορους. Μια ιδανική επιλογή για όσους εκτιμούν την πραγματική αμερικανική κουζίνα και θέλουν να απολαύσουν τη μοναδική γεύση.',
      },
      {
        locale: 'es',
        value: '¡Descubre el exquisito sabor de la legendaria ensalada Cobb en nuestro restaurante! Esta combinación de tierno pollo, jugoso aguacate, tomates frescos, tocino crujiente y aromático queso azul no te dejará indiferente. Una opción ideal para quienes aprecian la auténtica cocina americana y desean disfrutar de su sabor único.',
      },
      {
        locale: 'fr',
        value: 'Découvrez la saveur exquise de la légendaire salade Cobb dans notre restaurant ! Ce mélange de poulet tendre, d’avocat juteux, de tomates fraîches, de bacon croustillant et de fromage bleu parfumé saura vous séduire. Un choix idéal pour les amateurs de cuisine américaine authentique et de saveurs uniques.',
      },
      {
        locale: 'it',
        value: 'Scoprite il gusto squisito della leggendaria insalata Cobb nel nostro ristorante! Questa combinazione di pollo tenero, avocado succoso, pomodori freschi, bacon croccante e formaggio blu profumato non vi lascerà indifferenti. Una scelta ideale per chi apprezza la vera cucina americana e vuole godere di un sapore unico.',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя изысканный вкус легендарного салата «Кобб» в нашем ресторане! Это сочетание нежной курицы, сочного авокадо, свежих помидоров, хрустящего бекона и ароматного голубого сыра не оставит вас равнодушными. Идеальный выбор для тех, кто ценит настоящую американскую кухню и хочет насладиться неповторимым вкусом.',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ლეგენდარული კობის სალათის დახვეწილი გემო ჩვენს რესტორანში! ნაზი ქათმის, წვნიანი ავოკადოს, ახალი პომიდვრის, ხრაშუნა ბეკონისა და არომატული ლურჯი ყველის ეს კომბინაცია გულგრილს არ დაგტოვებთ. იდეალური არჩევანია მათთვის, ვინც აფასებს ნამდვილ ამერიკულ სამზარეულოს და სურს დატკბეს უნიკალური არომატით.',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie den unvergleichlichen Geschmack des legendären Cobb-Salats in unserem Restaurant! Diese Kombination aus zartem Hähnchenfleisch, saftiger Avocado, frischen Tomaten, knusprigem Speck und aromatischem Blauschimmelkäse wird Sie begeistern. Die ideale Wahl für alle, die authentische amerikanische Küche schätzen und den einzigartigen Geschmack genießen möchten.',
      },
      {
        locale: 'zh_cn',
        value: '来我们餐厅品尝传奇科布沙拉的绝妙滋味吧！鲜嫩鸡肉、多汁牛油果、新鲜番茄、香脆培根和浓郁蓝纹奶酪的完美组合，定会让您回味无穷。对于喜爱正宗美式佳肴并想体验独特风味的食客来说，这绝对是理想之选。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'cobbs-chic-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 650,
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
        locale: 'el',
        value: 'Αυτοκρατορικός Καίσαρας',
      },
      {
        locale: 'es',
        value: 'César imperial',
      },
      {
        locale: 'fr',
        value: 'César Impérial',
      },
      {
        locale: 'it',
        value: 'Caesar Imperiale',
      },
      {
        locale: 'ru',
        value: 'Имперский Цезарь',
      },
      {
        locale: 'ka',
        value: 'იმპერიული კეისარი',
      },
      {
        locale: 'de',
        value: 'Kaiserlicher Cäsar',
      },
      {
        locale: 'zh_cn',
        value: '帝国凯撒',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Experience the unique taste of classic Caesar salad in our restaurant! Tender combination of juicy salad leaves, fragrant parmesan and golden croutons seasoned with special Worcester sauce will give you an unforgettable gastronomic pleasure.',
      },
      {
        locale: 'el',
        value: 'Ζήστε τη μοναδική γεύση της κλασικής σαλάτας του Καίσαρα στο εστιατόριό μας! Ένας τρυφερός συνδυασμός από ζουμερά φύλλα σαλάτας, αρωματική παρμεζάνα και χρυσά κρουτόν, καρυκευμένα με την ειδική σάλτσα Worcester, θα σας χαρίσει μια αξέχαστη γαστρονομική απόλαυση.',
      },
      {
        locale: 'es',
        value: '¡Disfrute del sabor único de la clásica ensalada César en nuestro restaurante! La tierna combinación de jugosas hojas de ensalada, aromático parmesano y crutones dorados, aderezados con una salsa Worcester especial, le brindará un placer gastronómico inolvidable.',
      },
      {
        locale: 'fr',
        value: 'Découvrez le goût unique de la salade César classique dans notre restaurant ! La combinaison délicate de feuilles de salade juteuses, de parmesan parfumé et de croûtons dorés, assaisonnés d\'une sauce Worcestershire spéciale, vous offrira un plaisir gastronomique inoubliable.',
      },
      {
        locale: 'it',
        value: 'Scoprite il gusto unico dell\'insalata Caesar classica nel nostro ristorante! Una combinazione delicata di foglie di insalata succose, parmigiano profumato e crostini dorati conditi con una speciale salsa Worcester vi regalerà un piacere gastronomico indimenticabile.',
      },
      {
        locale: 'ru',
        value: 'Ощутите неповторимый вкус классического салата «Цезарь» в нашем ресторане! Нежное сочетание сочных листьев салата, ароматного пармезана и золотистых сухариков, приправленных специальным вустерским соусом, подарит вам незабываемое гастрономическое удовольствие.',
      },
      {
        locale: 'ka',
        value: 'განიცადეთ კლასიკური ცეზარის სალათის უნიკალური გემო ჩვენს რესტორანში! წვნიანი სალათის ფოთლების, არომატული პარმეზანისა და ოქროსფერი კრუტონების ნაზი კომბინაცია, რომელიც განსაკუთრებული ვუსტერის სოუსით არის შეზავებული, დაუვიწყარ გასტრონომიულ სიამოვნებას მოგანიჭებთ.',
      },
      {
        locale: 'de',
        value: 'Erleben Sie den einzigartigen Geschmack des klassischen Caesar Salad in unserem Restaurant! Die zarte Kombination aus saftigen Salatblättern, duftendem Parmesan und goldbraunen Croutons, verfeinert mit einer speziellen Worcester-Sauce, wird Ihnen ein unvergessliches Geschmackserlebnis bescheren.',
      },
      {
        locale: 'zh_cn',
        value: '来我们餐厅体验经典凯撒沙拉的独特风味吧！鲜嫩多汁的沙拉叶、香气四溢的帕玛森芝士和金黄酥脆的烤面包丁，淋上特制伍斯特沙司，定会带给您难忘的美食享受。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'imperial-caesar-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 620,
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
        locale: 'el',
        value: 'Κοσμική έκρηξη γεύσεων',
      },
      {
        locale: 'es',
        value: 'Explosión cósmica de sabor',
      },
      {
        locale: 'fr',
        value: 'Explosion cosmique de saveurs',
      },
      {
        locale: 'it',
        value: 'Esplosione cosmica di sapore',
      },
      {
        locale: 'ru',
        value: 'Космический взрыв вкуса',
      },
      {
        locale: 'ka',
        value: 'არომატების კოსმიური აფეთქება',
      },
      {
        locale: 'de',
        value: 'Kosmische Geschmacksexplosion',
      },
      {
        locale: 'zh_cn',
        value: '宇宙级的味觉爆炸',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover an amazing combination of fresh vegetables, tender chicken and fragrant spices. Enjoy the unique taste and energize the bright stars on your table!',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε έναν καταπληκτικό συνδυασμό από φρέσκα λαχανικά, τρυφερό κοτόπουλο και αρωματικά μπαχαρικά. Απολαύστε τη μοναδική γεύση και δώστε ενέργεια στα λαμπερά αστέρια στο τραπέζι σας!',
      },
      {
        locale: 'es',
        value: 'Descubre una increíble combinación de verduras frescas, pollo tierno y especias aromáticas. ¡Disfruta de su sabor único y llena de energía a las estrellas de tu mesa!',
      },
      {
        locale: 'fr',
        value: 'Découvrez une combinaison exquise de légumes frais, de poulet tendre et d\'épices parfumées. Savourez un goût unique et régalez vos convives !',
      },
      {
        locale: 'it',
        value: 'Scoprite una combinazione sorprendente di verdure fresche, pollo tenero e spezie profumate. Godetevi il gusto unico e date energia alle stelle luminose sulla vostra tavola!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя удивительное сочетание свежих овощей, нежной курицы и ароматных специй. Насладитесь уникальным вкусом и зарядите энергией ярких звезд на вашем столе!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ახალი ბოსტნეულის, ნაზი ქათმისა და არომატული სანელებლების საოცარი კომბინაცია. დატკბით უნიკალური გემოთი და გაამდიდრეთ თქვენი სუფრის კაშკაშა ვარსკვლავები ენერგიით!',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie eine fantastische Kombination aus frischem Gemüse, zartem Hähnchen und duftenden Gewürzen. Genießen Sie den einzigartigen Geschmack und bringen Sie Ihre Gäste zum Strahlen!',
      },
      {
        locale: 'zh_cn',
        value: '探索新鲜蔬菜、鲜嫩鸡肉和芬芳香料的绝妙组合。尽享独特美味，为您的餐桌增添活力！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'cosmic-explosion-of-flavor-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 530,
        sku: null,
        nutritionFacts: {
          calories: 155.0,
          protein: 11.2,
          fat: 7.8,
          carbohydrate: 10.4,
        },
      },
    ],
    badges: [
      {
        id: 'leader',
        title: [
          {
            locale: 'en',
            value: 'Leader of preferences 🚀',
          },
          {
            locale: 'el',
            value: 'Ηγέτης στις προτιμήσεις 🚀',
          },
          {
            locale: 'es',
            value: 'Lider de preferencias 🚀',
          },
          {
            locale: 'fr',
            value: 'Leader des préférences 🚀',
          },
          {
            locale: 'it',
            value: 'Leader delle preferenze 🚀',
          },
          {
            locale: 'ru',
            value: 'Лидер предпочтений 🚀',
          },
          {
            locale: 'ka',
            value: 'შესახების მენტი 🚀',
          },
          {
            locale: 'de',
            value: 'Leader der Präferenzen 🚀',
          },
          {
            locale: 'zh_cn',
            value: '首选 🚀',
          },
        ],
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
        locale: 'el',
        value: 'Ελληνική όαση γεύσεων',
      },
      {
        locale: 'es',
        value: 'Oasis griego de sabor',
      },
      {
        locale: 'fr',
        value: 'Oasis grecque de saveurs',
      },
      {
        locale: 'it',
        value: 'Oasi greca di sapore',
      },
      {
        locale: 'ru',
        value: 'Греческий оазис вкуса',
      },
      {
        locale: 'ka',
        value: 'არომატების ბერძნული ოაზისი',
      },
      {
        locale: 'de',
        value: 'Griechische Geschmacksoase',
      },
      {
        locale: 'zh_cn',
        value: '希腊风味绿洲',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Greek salad is a classic source of freshness and vitamins. Enjoy the perfect combination of ripe tomatoes, crunchy cucumbers, sweet peppers, red onions and tender olives. Season it all with fragrant olive oil and add original feta - and your table will turn into a real feast of taste!',
      },
      {
        locale: 'el',
        value: 'Η ελληνική σαλάτα είναι μια κλασική πηγή φρεσκάδας και βιταμινών. Απολαύστε τον τέλειο συνδυασμό από ώριμες ντομάτες, τραγανά αγγούρια, γλυκές πιπεριές, κόκκινα κρεμμύδια και τρυφερές ελιές. Αλατοπιπερώστε τα όλα με αρωματικό ελαιόλαδο και προσθέστε αυθεντική φέτα - και το τραπέζι σας θα μετατραπεί σε μια πραγματική πανδαισία γεύσεων!',
      },
      {
        locale: 'es',
        value: 'La ensalada griega es una fuente clásica de frescura y vitaminas. Disfruta de la combinación perfecta de tomates maduros, pepinos crujientes, pimientos dulces, cebollas rojas y aceitunas tiernas. Adérala con aceite de oliva aromático y añade queso feta original, ¡y tu mesa se convertirá en un auténtico festín de sabor!',
      },
      {
        locale: 'fr',
        value: 'La salade grecque est un classique, source de fraîcheur et de vitamines. Savourez l\'alliance parfaite de tomates mûres, de concombres croquants, de poivrons doux, d\'oignons rouges et d\'olives tendres. Arrosez le tout d\'huile d\'olive parfumée et ajoutez de la feta artisanale : votre table se transformera en un véritable festin de saveurs !',
      },
      {
        locale: 'it',
        value: 'L\'insalata greca è una classica fonte di freschezza e vitamine. Godetevi la combinazione perfetta di pomodori maturi, cetrioli croccanti, peperoni dolci, cipolle rosse e olive tenere. Condite il tutto con olio d\'oliva profumato e aggiungete la feta originale: la vostra tavola si trasformerà in una vera festa di sapori!',
      },
      {
        locale: 'ru',
        value: 'Греческий салат - это классический источник свежести и витаминов. Насладитесь идеальным сочетанием спелых помидоров, хрустящих огурцов, сладкого перца, красного лука и нежных оливок. Заправьте все это ароматным оливковым маслом и добавьте оригинальную фету - и ваш стол превратится в настоящий праздник вкуса!',
      },
      {
        locale: 'ka',
        value: 'ბერძნული სალათი სიახლისა და ვიტამინების კლასიკური წყაროა. ისიამოვნეთ მწიფე პომიდვრის, ხრაშუნა კიტრის, ტკბილი წიწაკის, წითელი ხახვისა და ნაზი ზეთისხილის იდეალური კომბინაციით. შეაზავეთ არომატული ზეითუნის ზეთით და დაუმატეთ ორიგინალური ფეტა - და თქვენი სუფრა ნამდვილ გემოს ნადიმად გადაიქცევა!',
      },
      {
        locale: 'de',
        value: 'Griechischer Salat ist ein Klassiker voller Frische und Vitamine. Genießen Sie die perfekte Kombination aus reifen Tomaten, knackigen Gurken, Paprika, roten Zwiebeln und zarten Oliven. Würzen Sie alles mit duftendem Olivenöl und fügen Sie originalen Feta hinzu – und Ihr Tisch wird zu einem wahren Festmahl für den Gaumen!',
      },
      {
        locale: 'zh_cn',
        value: '希腊沙拉是清新爽口、富含维生素的经典之选。饱满多汁的番茄、清脆爽口的黄瓜、香甜的甜椒、鲜红的洋葱和鲜嫩的橄榄完美融合，淋上芬芳的橄榄油，再撒上正宗的菲达奶酪——您的餐桌将瞬间变成一场味蕾盛宴！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'greek-oasis-of-flavor-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 560,
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
        locale: 'el',
        value: 'Πλούσιο μπορς',
      },
      {
        locale: 'es',
        value: 'Borscht generoso',
      },
      {
        locale: 'fr',
        value: 'Bortsch généreux',
      },
      {
        locale: 'it',
        value: 'Borscht generoso',
      },
      {
        locale: 'ru',
        value: 'Щедрый борщ',
      },
      {
        locale: 'ka',
        value: 'უხვი ბორშტი',
      },
      {
        locale: 'de',
        value: 'Großzügiger Borschtsch',
      },
      {
        locale: 'zh_cn',
        value: '丰盛的罗宋汤',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'An exquisite dish for true gourmets. Tender meat, fragrant vegetables and thick sour cream create a unique taste that you will remember for a long time.',
      },
      {
        locale: 'el',
        value: 'Ένα εξαιρετικό πιάτο για αληθινούς γκουρμέ. Τρυφερό κρέας, αρωματικά λαχανικά και πηχτή ξινή κρέμα δημιουργούν μια μοναδική γεύση που θα θυμάστε για πολύ καιρό.',
      },
      {
        locale: 'es',
        value: 'Un plato exquisito para auténticos gourmets. Carne tierna, verduras aromáticas y una crema agria espesa crean un sabor único que recordará durante mucho tiempo.',
      },
      {
        locale: 'fr',
        value: 'Un plat exquis pour les vrais gourmets. Viande tendre, légumes parfumés et crème fraîche onctueuse composent une saveur unique dont vous vous souviendrez longtemps.',
      },
      {
        locale: 'it',
        value: 'Un piatto squisito per veri intenditori. Carne tenera, verdure profumate e panna acida densa creano un sapore unico che ricorderai a lungo.',
      },
      {
        locale: 'ru',
        value: 'Изысканное блюдо для истинных гурманов. Нежное мясо, ароматные овощи и густая сметана создают неповторимый вкус, который вы запомните надолго.',
      },
      {
        locale: 'ka',
        value: 'ნამდვილი გურმანებისთვის დახვეწილი კერძი. ნაზი ხორცი, არომატული ბოსტნეული და სქელი არაჟანი ქმნის უნიკალურ გემოს, რომელიც დიდხანს დაგამახსოვრდებათ.',
      },
      {
        locale: 'de',
        value: 'Ein exquisites Gericht für wahre Feinschmecker. Zartes Fleisch, duftendes Gemüse und dicke Sauerrahm ergeben einen einzigartigen Geschmack, der Ihnen lange in Erinnerung bleiben wird.',
      },
      {
        locale: 'zh_cn',
        value: '一道专为美食家打造的精致佳肴。鲜嫩的肉质、芬芳的蔬菜和浓郁的酸奶油，共同造就了令人难忘的独特风味。',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'generous-borscht-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 410,
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
        locale: 'el',
        value: 'Η γοητεία του Λίγηρα',
      },
      {
        locale: 'es',
        value: 'El encanto del Loira',
      },
      {
        locale: 'fr',
        value: 'Le charme de la Loire',
      },
      {
        locale: 'it',
        value: 'Il fascino della Loira',
      },
      {
        locale: 'ru',
        value: 'Очарование Луары',
      },
      {
        locale: 'ka',
        value: 'ლუარის ხიბლი',
      },
      {
        locale: 'de',
        value: 'Der Charme der Loire',
      },
      {
        locale: 'zh_cn',
        value: '卢瓦尔河谷的魅力',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Discover the real French onion soup in our restaurant! Tender creamy broth, golden onions and spicy thyme create a unique flavor combination. Try this exquisite soup and feel the atmosphere of France right here in our cozy place!',
      },
      {
        locale: 'el',
        value: 'Ανακαλύψτε την αυθεντική γαλλική κρεμμυδόσουπα στο εστιατόριό μας! Τρυφερός κρεμώδης ζωμός, χρυσαφένια κρεμμύδια και πικάντικο θυμάρι δημιουργούν έναν μοναδικό συνδυασμό γεύσεων. Δοκιμάστε αυτή την εξαιρετική σούπα και νιώστε την ατμόσφαιρα της Γαλλίας εδώ, στον άνετο χώρο μας!',
      },
      {
        locale: 'es',
        value: '¡Descubre la auténtica sopa de cebolla francesa en nuestro restaurante! Un caldo tierno y cremoso, cebollas doradas y tomillo picante crean una combinación de sabores única. ¡Prueba esta exquisita sopa y siente el ambiente francés en nuestro acogedor restaurante!',
      },
      {
        locale: 'fr',
        value: 'Découvrez la véritable soupe à l\'oignon française dans notre restaurant ! Un bouillon onctueux et crémeux, des oignons dorés et du thym parfumé créent une combinaison de saveurs unique. Goûtez à cette soupe exquise et imprégnez-vous de l\'atmosphère française dans notre cadre chaleureux !',
      },
      {
        locale: 'it',
        value: 'Scopri la vera zuppa di cipolle francese nel nostro ristorante! Un delicato brodo cremoso, cipolle dorate e timo speziato creano una combinazione di sapori unica. Prova questa squisita zuppa e senti l\'atmosfera della Francia proprio qui nel nostro locale accogliente!',
      },
      {
        locale: 'ru',
        value: 'Откройте для себя настоящий французский луковый суп в нашем ресторане! Нежный сливочный бульон, золотистый лук и пряный тимьян создают неповторимое вкусовое сочетание. Попробуйте этот изысканный суп и почувствуйте атмосферу Франции прямо здесь, в нашем уютном месте!',
      },
      {
        locale: 'ka',
        value: 'აღმოაჩინეთ ნამდვილი ფრანგული ხახვის წვნიანი ჩვენს რესტორანში! ნაზი კრემისებრი ბულიონი, ოქროსფერი ხახვი და ცხარე თიამი ქმნის უნიკალურ არომატულ კომბინაციას. გასინჯეთ ეს დახვეწილი წვნიანი და იგრძენით საფრანგეთის ატმოსფერო აქ, ჩვენს მყუდრო ადგილას!',
      },
      {
        locale: 'de',
        value: 'Entdecken Sie die echte französische Zwiebelsuppe in unserem Restaurant! Zarte, cremige Brühe, goldgelbe Zwiebeln und würziger Thymian ergeben eine einzigartige Geschmackskombination. Genießen Sie diese exquisite Suppe und erleben Sie französisches Flair in unserem gemütlichen Restaurant!',
      },
      {
        locale: 'zh_cn',
        value: '来我们餐厅品尝正宗的法式洋葱汤吧！鲜嫩浓郁的汤底、金黄的洋葱和辛香的百里香，完美融合，带来独一无二的美味体验。快来品尝这道精致的汤品，在我们温馨舒适的餐厅里感受浓郁的法式风情！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'the-charm-of-the-loire-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 420,
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
        locale: 'el',
        value: 'Φιλία! Σάντουιτς! Κλαμπ!',
      },
      {
        locale: 'es',
        value: '¡Amistad! ¡Sándwich! ¡Club!',
      },
      {
        locale: 'fr',
        value: 'Club de l\'amitié ! Sandwich !',
      },
      {
        locale: 'it',
        value: 'Amicizia! Sandwich! Club!',
      },
      {
        locale: 'ru',
        value: 'Дружба! Сэндвич! Клуб!',
      },
      {
        locale: 'ka',
        value: 'მეგობრობა! სენდვიჩი! კლუბი!',
      },
      {
        locale: 'de',
        value: 'Freundschaft! Sandwich! Club!',
      },
      {
        locale: 'zh_cn',
        value: '友谊！三明治！俱乐部！',
      },
    ],
    description: [
      {
        locale: 'en',
        value: 'Try our delicious and hearty chicken noodle and bun sandwich! Tender chicken meat, juicy vegetables and crispy bun - a great choice for your lunch or dinner. Experience the unique taste of home cooking in the cozy atmosphere of our restaurant!',
      },
      {
        locale: 'el',
        value: 'Δοκιμάστε το νόστιμο και χορταστικό σάντουιτς μας με κοτόπουλο και νουντλς! Τρυφερό κρέας κοτόπουλου, ζουμερά λαχανικά και τραγανό ψωμάκι - μια εξαιρετική επιλογή για το μεσημεριανό ή το βραδινό σας. Ζήστε τη μοναδική γεύση της σπιτικής κουζίνας στη ζεστή ατμόσφαιρα του εστιατορίου μας!',
      },
      {
        locale: 'es',
        value: '¡Prueba nuestro delicioso y sustancioso sándwich de pollo con fideos y pan! Pollo tierno, verduras jugosas y pan crujiente: una excelente opción para tu almuerzo o cena. ¡Disfruta del sabor único de la comida casera en el acogedor ambiente de nuestro restaurante!',
      },
      {
        locale: 'fr',
        value: 'Goûtez notre délicieux et copieux sandwich poulet, nouilles et petit pain ! Du poulet tendre, des légumes juteux et un petit pain croustillant : un excellent choix pour votre déjeuner ou votre dîner. Savourez le goût authentique d\'une cuisine maison dans l\'ambiance chaleureuse de notre restaurant !',
      },
      {
        locale: 'it',
        value: 'Prova il nostro delizioso e sostanzioso sandwich con pollo, noodles e panino! Carne di pollo tenera, verdure succose e panino croccante: una scelta perfetta per il tuo pranzo o cena. Vivi il gusto unico della cucina casalinga nell\'atmosfera accogliente del nostro ristorante!',
      },
      {
        locale: 'ru',
        value: 'Попробуйте наш вкусный и сытный сэндвич с куриной лапшой и булочкой! Нежное куриное мясо, сочные овощи и хрустящая булочка - отличный выбор для вашего обеда или ужина. Ощутите неповторимый вкус домашней кухни в уютной атмосфере нашего ресторана!',
      },
      {
        locale: 'ka',
        value: 'გასინჯეთ ჩვენი გემრიელი და გულიანი ქათმის ლაფშითა და ფუნთუშით შეზავებული სენდვიჩი! ნაზი ქათმის ხორცი, წვნიანი ბოსტნეული და ხრაშუნა ფუნთუშა - შესანიშნავი არჩევანი თქვენი სადილისა თუ ვახშმისთვის. განიცადეთ ხელნაკეთი კერძების უნიკალური გემო ჩვენი რესტორნის მყუდრო ატმოსფეროში!',
      },
      {
        locale: 'de',
        value: 'Probieren Sie unser köstliches und herzhaftes Hühnernudel-Sandwich! Zartes Hühnerfleisch, saftiges Gemüse und ein knuspriges Brötchen – eine hervorragende Wahl für Ihr Mittag- oder Abendessen. Genießen Sie den einzigartigen Geschmack hausgemachter Küche in der gemütlichen Atmosphäre unseres Restaurants!',
      },
      {
        locale: 'zh_cn',
        value: '快来尝尝我们美味又营养的鸡肉面条包！鲜嫩的鸡肉、多汁的蔬菜和酥脆的面包——是您午餐或晚餐的绝佳选择。在我们餐厅温馨舒适的氛围中，体验家常菜的独特风味！',
      },
    ],
    isAvailableForPurchase: true,
    isShownInCatalog: true,
    variants: [
      {
        id: 'friendship-sandwich-club-standard',
        title: [
          {
            locale: 'en',
            value: 'Portion',
          },
          {
            locale: 'el',
            value: 'Μερίδα',
          },
          {
            locale: 'es',
            value: 'Porción',
          },
          {
            locale: 'fr',
            value: 'Portion',
          },
          {
            locale: 'it',
            value: 'Porzione',
          },
          {
            locale: 'ru',
            value: 'Порция',
          },
          {
            locale: 'ka',
            value: 'ნაწილი',
          },
          {
            locale: 'de',
            value: 'Portion',
          },
          {
            locale: 'zh_cn',
            value: '部分',
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
        price: 570,
        sku: null,
        nutritionFacts: {
          calories: 265.0,
          protein: 10.8,
          fat: 11.4,
          carbohydrate: 29.2,
        },
      },
    ],
    badges: [
      {
        id: 'profit',
        title: [
          {
            locale: 'en',
            value: 'Profitable 🤑',
          },
          {
            locale: 'el',
            value: 'Κερδοφόρα 🤑',
          },
          {
            locale: 'es',
            value: 'Rentable 🤑',
          },
          {
            locale: 'fr',
            value: 'Profitable 🤑',
          },
          {
            locale: 'it',
            value: 'Redditizio 🤑',
          },
          {
            locale: 'ru',
            value: 'Выгодно 🤑',
          },
          {
            locale: 'ka',
            value: 'მომგებიანი 🤑',
          },
          {
            locale: 'de',
            value: 'Profitabel 🤑',
          },
          {
            locale: 'zh_cn',
            value: '有利可图 🤑',
          },
        ],
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
        locale: 'el',
        value: 'Μπιφτέκια',
      },
      {
        locale: 'es',
        value: 'Hamburguesas',
      },
      {
        locale: 'fr',
        value: 'Burgers',
      },
      {
        locale: 'it',
        value: 'Hamburger',
      },
      {
        locale: 'ru',
        value: 'Бургеры',
      },
      {
        locale: 'ka',
        value: 'ბურგერები',
      },
      {
        locale: 'de',
        value: 'Burger',
      },
      {
        locale: 'zh_cn',
        value: '汉堡',
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
        locale: 'el',
        value: 'Ζεστά Γεύματα',
      },
      {
        locale: 'es',
        value: 'Comidas calientes',
      },
      {
        locale: 'fr',
        value: 'Plats chauds',
      },
      {
        locale: 'it',
        value: 'Pasti caldi',
      },
      {
        locale: 'ru',
        value: 'Горячие блюда',
      },
      {
        locale: 'ka',
        value: 'ცხელი კერძები',
      },
      {
        locale: 'de',
        value: 'Warme Mahlzeiten',
      },
      {
        locale: 'zh_cn',
        value: '热餐',
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
        locale: 'el',
        value: 'Σαλάτες',
      },
      {
        locale: 'es',
        value: 'Ensaladas',
      },
      {
        locale: 'fr',
        value: 'Salades',
      },
      {
        locale: 'it',
        value: 'Insalate',
      },
      {
        locale: 'ru',
        value: 'Салаты',
      },
      {
        locale: 'ka',
        value: 'სალათები',
      },
      {
        locale: 'de',
        value: 'Salate',
      },
      {
        locale: 'zh_cn',
        value: '沙拉',
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
        locale: 'el',
        value: 'Σούπες',
      },
      {
        locale: 'es',
        value: 'Sopas',
      },
      {
        locale: 'fr',
        value: 'Soupes',
      },
      {
        locale: 'it',
        value: 'Zuppe',
      },
      {
        locale: 'ru',
        value: 'Супы',
      },
      {
        locale: 'ka',
        value: 'სუპები',
      },
      {
        locale: 'de',
        value: 'Suppen',
      },
      {
        locale: 'zh_cn',
        value: '汤',
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
        locale: 'el',
        value: 'Σνακ',
      },
      {
        locale: 'es',
        value: 'Aperitivos',
      },
      {
        locale: 'fr',
        value: 'En-cas',
      },
      {
        locale: 'it',
        value: 'Snack',
      },
      {
        locale: 'ru',
        value: 'Закуски',
      },
      {
        locale: 'ka',
        value: 'სასუსნავები',
      },
      {
        locale: 'de',
        value: 'Snacks',
      },
      {
        locale: 'zh_cn',
        value: '零食',
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
        locale: 'el',
        value: 'Επιδόρπια',
      },
      {
        locale: 'es',
        value: 'Postres',
      },
      {
        locale: 'fr',
        value: 'Desserts',
      },
      {
        locale: 'it',
        value: 'Dolci',
      },
      {
        locale: 'ru',
        value: 'Десерты',
      },
      {
        locale: 'ka',
        value: 'დესერტები',
      },
      {
        locale: 'de',
        value: 'Desserts',
      },
      {
        locale: 'zh_cn',
        value: '甜点',
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
      locale: 'el',
      value: 'Προεπιλεγμένο μενού',
    },
    {
      locale: 'es',
      value: 'Menú predeterminado',
    },
    {
      locale: 'fr',
      value: 'Menu par défaut',
    },
    {
      locale: 'it',
      value: 'Menu predefinito',
    },
    {
      locale: 'ru',
      value: 'Обычное меню',
    },
    {
      locale: 'ka',
      value: 'ნაგულისხმევი მენიუ',
    },
    {
      locale: 'de',
      value: 'Standardmenü',
    },
    {
      locale: 'zh_cn',
      value: '默认菜单',
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
