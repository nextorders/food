import type { Product } from '@nextorders/food-schema'

export const burgers: Product[] = [
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
        locale: 'hi',
        value: 'द वाइल्ड वेस्ट बर्गर',
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
      {
        locale: 'pt',
        value: 'O Hambúrguer do Velho Oeste',
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
        locale: 'hi',
        value: 'हमारे अद्भुत बर्गर के साथ वाइल्ड वेस्ट की यात्रा के लिए तैयार हो जाइए! नरम मांस, रसदार सब्जियाँ और कुरकुरा ब्रेड आपको काउबॉय और इंडियंस की दुनिया में ले जाएगा। रोमांच की भावना में डूब जाएँ और वाइल्ड वेस्ट के असली स्वाद का आनंद लें!',
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
      {
        locale: 'pt',
        value: 'Prepare-se para uma viagem ao Velho Oeste com nosso incrível hambúrguer! Carne tenra, vegetais suculentos e pão crocante o levarão ao mundo dos cowboys e índios. Mergulhe na atmosfera de aventura e desfrute do verdadeiro sabor do Velho Oeste!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
              locale: 'hi',
              value: 'बीफ कटलेट',
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
            {
              locale: 'pt',
              value: 'Bife de carne',
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
              locale: 'hi',
              value: 'तिल वाला ब्रेड',
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
            {
              locale: 'pt',
              value: 'Pão com semente de sésamo',
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
              locale: 'hi',
              value: 'नरम पनीर',
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
            {
              locale: 'pt',
              value: 'Queijo macio',
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
              locale: 'hi',
              value: 'बार्बेक्यू सॉस',
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
            {
              locale: 'pt',
              value: 'Molho de churrasco',
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
              locale: 'hi',
              value: 'अचार किए हुए खीरे',
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
            {
              locale: 'pt',
              value: 'Pepinos em conserva',
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
              locale: 'hi',
              value: 'सलाद पत्तियाँ',
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
            {
              locale: 'pt',
              value: 'Folhas de alface',
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
              locale: 'hi',
              value: 'टमाटर',
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
            {
              locale: 'pt',
              value: 'Tomate',
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
              locale: 'hi',
              value: 'प्याज',
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
            {
              locale: 'pt',
              value: 'Cebola',
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
              locale: 'hi',
              value: 'बेकन',
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
            {
              locale: 'pt',
              value: 'Bacon',
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
            locale: 'hi',
            value: 'नया!',
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
          {
            locale: 'pt',
            value: 'Novo!',
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
        locale: 'hi',
        value: 'द टेंडर क्लाउड्स बर्गर',
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
      {
        locale: 'pt',
        value: 'O hambúrguer Nuvens Suaves',
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
        locale: 'hi',
        value: 'हमारे विशेष बर्गर के साथ बादलों की नरमी का अनुभव करें! हल्के नीले पनीर, रसदार सब्जियों और स्वादिष्ट मांस का संयोजन आपको प्रभावित करेगा। प्रत्येक कौर में स्वाद और आनंद का आदर्श संतुलन!',
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
      {
        locale: 'pt',
        value: 'Sinta a suavidade das nuvens com o nosso hambúrguer especial! A combinação de queijo azul aerado, vegetais suculentos e carne saborosa vai conquistá-lo. O equilíbrio perfeito entre sabor e prazer em cada dentada!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
        locale: 'hi',
        value: 'शाकाहारी स्वर्ग: शाकाहारी बर्गर',
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
      {
        locale: 'pt',
        value: 'Paraíso vegetariano: hambúrguer vegetariano',
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
        locale: 'hi',
        value: 'हमारे विशेष शाकाहारी बर्गर के साथ शाकाहारी स्वर्ग का आनंद लें! सब्जियों, जड़ी-बूटियों और पौष्टिक सामग्रियों का स्वादिष्ट संयोजन आपको एक अविस्मरणीय स्वाद अनुभव देगा। हमारे शाकाहारी बर्गर के हर कौर में प्रकृति की ताजगी महसूस करें!',
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
      {
        locale: 'pt',
        value: 'Desfrute de um paraíso vegetariano com o nosso hambúrguer vegetariano especial! Uma deliciosa combinação de vegetais, ervas e ingredientes nutritivos proporcionará uma experiência de sabor inesquecível. Sinta a frescura da natureza em cada dentada do nosso hambúrguer vegetariano!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
        locale: 'hi',
        value: 'शक्तिशाली कॉम्बो: तीन बर्गर',
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
      {
        locale: 'pt',
        value: 'Combinação poderosa: três hambúrgueres',
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
        locale: 'hi',
        value: 'प्रत्येक बर्गर कुरकुरे ब्रेड, स्वादिष्ट पैटी और ताज़ी सामग्रियों का एक आदर्श सामंजस्य है, जो सभी को एक अद्वितीय स्वाद सिंफनी में एक साथ लाए जाते हैं। यह कॉम्बो किसी भी सभा का सितारा होगा: चाहे वह एक दोस्ताना शाम हो, एक पिकनिक, या बस इंद्रियों का उत्सव। सुख में लीन हो जाएं - अभी अपना कॉम्बो ऑर्डर करें और गैस्ट्रोनोमिक आनंद की तिगुनी मदद प्राप्त करें!',
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
      {
        locale: 'pt',
        value: 'Cada hambúrguer é uma perfeita harmonia de pão crocante, carne saborosa e ingredientes frescos, tudo reunido numa sinfonia de sabores única. Este combo será a estrela de qualquer encontro: seja uma noite agradável entre amigos, um piquenique ou simplesmente um deleite para os sentidos. Delicie-se com este prazer — encomende já o seu combinado e receba uma dose tripla de prazer gastronómico!',
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
            locale: 'hi',
            value: 'कॉम्बो',
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
          {
            locale: 'pt',
            value: 'Combo',
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
        locale: 'hi',
        value: 'स्वादिष्ट प्याज बर्गर',
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
      {
        locale: 'pt',
        value: 'Hambúrguer de cebola delicioso',
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
        locale: 'hi',
        value: 'हमारे बर्गर के साथ स्वाद की अद्भुत दुनिया की खोज करें, जहाँ नरम मांस, ताज़ी सब्जियाँ और सुगंधित तले हुए प्याज अद्वितीय संयोजन में एक साथ आते हैं। प्रत्येक कौर का स्वाद लें और सच्ची भोजनात्मक खुशी की वातावरण में डूब जाएँ!',
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
      {
        locale: 'pt',
        value: 'Descubra um mundo incrível de sabores com o nosso hambúrguer, onde carne tenra, vegetais frescos e cebola frita aromática se unem numa combinação única. Saboreie cada dentada e mergulhe numa atmosfera de verdadeiro prazer gastronómico!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
        locale: 'hi',
        value: 'गैलेक्टिक बर्गर',
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
      {
        locale: 'pt',
        value: 'Hambúrguer galáctico',
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
        locale: 'hi',
        value: 'गैलेक्टिक बर्गर की खोज करें - रसदार सब्जियों, स्वादिष्ट मांस और कुरकुरे ब्रेड का एक अविश्वसनीय संयोजन। दूर के सितारों के अनोखे स्वाद का अनुभव करें और मेज पर ही अंतरिक्ष रोमांच की दुनिया में डूब जाएँ!',
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
      {
        locale: 'pt',
        value: 'Descubra o hambúrguer galáctico: uma combinação incrível de vegetais suculentos, carne saborosa e pão crocante. Experimente o sabor único das estrelas distantes e mergulhe no mundo das aventuras espaciais sem sair da mesa!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
        locale: 'hi',
        value: 'मशरूम बूम: एक रहस्य वाला बर्गर',
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
      {
        locale: 'pt',
        value: 'Explosão de cogumelos: um hambúrguer com um segredo',
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
        locale: 'hi',
        value: 'हमारे नए बर्गर के साथ स्वाद की अद्भुत दुनिया की खोज करें! नरम मांस, रसदार मशरूम और कुरकुरा ब्रेड - यह संयोजन निश्चित रूप से आपके दिल को जीतेगा। वास्तविक मशरूम सुख के अनोखे स्वाद का अनुभव करें!',
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
      {
        locale: 'pt',
        value: 'Descubra um mundo de sabores incríveis com o nosso novo hambúrguer! Carne tenra, cogumelos suculentos e pão crocante – esta combinação vai certamente conquistá-lo. Experimente o sabor único de uma verdadeira delícia de cogumelos!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
            locale: 'hi',
            value: 'बूम!',
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
          {
            locale: 'pt',
            value: 'Pum!',
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
            locale: 'hi',
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
          {
            locale: 'pt',
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
        locale: 'hi',
        value: 'जार्डिन्स बर्गर',
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
      {
        locale: 'pt',
        value: 'Hambúrguer do Jardine',
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
        locale: 'hi',
        value: 'रसदार ग्रिल किए हुए टर्की कटलेट के अनोखे स्वाद का अनुभव करें, जो कुरकुरे ब्रेड और ताज़ी सब्जियों के साथ मिलकर बनता है। सुगंधित मसालों और मसालों से भरपूर नरम टर्की मांस मांस प्रेमियों के लिए एक वास्तविक खोज होगा!',
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
      {
        locale: 'pt',
        value: 'Experimente o sabor único de um suculento filete de peru grelhado, combinado com um pão crocante e legumes frescos. A carne tenra do peru, complementada por especiarias aromáticas, será uma verdadeira descoberta para os amantes de carne!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
        locale: 'hi',
        value: 'हॉट टेक्सास बर्गर',
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
      {
        locale: 'pt',
        value: 'Hambúrguer texano picante',
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
        locale: 'hi',
        value: 'वास्तविक टेक्सास स्वाद की ओर आपका रास्ता! नरम मांस, ताज़ी सब्जियाँ और स्वादिष्ट ब्रेड - यह बर्गर निश्चित रूप से आपको प्रभावित करेगा!',
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
      {
        locale: 'pt',
        value: 'O seu caminho para o verdadeiro sabor do Texas! Carne macia, vegetais frescos e um pão apetitoso - este hambúrguer não o vai certamente deixar indiferente!',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
        locale: 'hi',
        value: 'टेंडर बेकन बर्गर',
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
      {
        locale: 'pt',
        value: 'Hambúrguer de bacon macio',
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
        locale: 'hi',
        value: 'बेकन की नरमी में डूब जाएँ: हमारे बर्गर का स्वाद लें! सुगंधित बेकन, रसदार पैटी और ताज़ी सब्जियाँ - असली भोजन प्रेमियों के लिए स्वाद का विस्फोट!',
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
      {
        locale: 'pt',
        value: 'Delicie-se com a suavidade do bacon: experimente o nosso hambúrguer! Bacon aromático, hambúrguer suculento e vegetais frescos - uma explosão de sabor para os verdadeiros gourmets.',
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
            locale: 'hi',
            value: 'मानक',
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
          {
            locale: 'pt',
            value: 'Padrão',
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
