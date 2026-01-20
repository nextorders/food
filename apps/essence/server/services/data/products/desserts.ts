import type { Product } from '@nextorders/food-schema'

export const desserts: Product[] = [
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
        locale: 'hi',
        value: 'एप्पल एक्स्ट्रावैगैंजा',
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
      {
        locale: 'pt',
        value: 'Extravagância de maçã',
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
        locale: 'hi',
        value: 'एक स्वादिष्ट पाई जो आपको एक यादगार स्वाद का अनुभव देगी! नरम आटा, खुशबूदार सेब और क्रिस्पी क्रस्ट - यह कॉम्बिनेशन ज़रूर आपका दिल जीत लेगा। इस ज़बरदस्त पाई के साथ छुट्टियों के माहौल में डूब जाइए!',
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
      {
        locale: 'pt',
        value: 'Uma deliciosa torta que lhe dará uma jornada de sabor inesquecível! Massa tenra, maçãs aromáticas e crosta crocante - esta combinação certamente conquistará seu coração. Mergulhe na atmosfera festiva com esta torta incrível!',
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
            locale: 'hi',
            value: 'टुकड़ा',
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
          {
            locale: 'pt',
            value: 'Fatia',
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
            locale: 'hi',
            value: '2 स्लाइस',
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
          {
            locale: 'pt',
            value: '2 Fatias',
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
            locale: 'hi',
            value: 'संपूर्ण पाई',
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
          {
            locale: 'pt',
            value: 'Torta inteira',
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
        locale: 'hi',
        value: 'न्यूयॉर्क ठाठ चीज़केक',
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
      {
        locale: 'pt',
        value: 'Cheesecake chique de Nova York',
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
        locale: 'hi',
        value: 'असली न्यूयॉर्क चीज़केक के अनोखे स्वाद का अनुभव करें! क्रीम चीज़, क्रंची बेस और ताज़े फलों का नाज़ुक मेल आपको एक यादगार स्वाद देगा। प्यार से तैयार किया गया यह डेज़र्ट आपकी शाम का एक परफेक्ट अंत होगा या किसी फ्रेंडली मीटिंग में एक बढ़िया चीज़ होगी।',
      },
      {
        locale: 'it',
        value: 'Provate il gusto unico di una vera cheesecake newyorkese! La delicata combinazione di formaggio cremoso, base croccante e frutta fresca vi regalerà un\'esperienza di gusto indimenticabile. Preparato con amore, questo dessert sarà la conclusione perfetta della vostra serata o un\'ottima aggiunta a un incontro amichevole.',
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
      {
        locale: 'pt',
        value: 'Experimente o sabor único de um verdadeiro cheesecake de Nova York! A combinação delicada de cream cheese, base crocante e frutas frescas lhe dará uma sensação de sabor inesquecível. Preparado com amor, esta sobremesa será um final perfeito para a sua noite ou um grande complemento para um encontro amigável.',
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
            locale: 'hi',
            value: 'टुकड़ा',
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
          {
            locale: 'pt',
            value: 'Fatia',
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
        locale: 'hi',
        value: 'आम का घुमाव',
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
      {
        locale: 'pt',
        value: 'Redemoinho de manga',
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
        locale: 'hi',
        value: 'हमारे अनोखे डेज़र्ट के साथ स्वाद के असली ट्रॉपिकल धमाके का अनुभव करें! पके आम, क्रीमी क्रीम और क्रिस्पी कुकीज़ का एक नाज़ुक कॉम्बिनेशन आपको कभी न भूलने वाला मज़ा देगा। इस शानदार ट्रीट के हर बाइट के साथ गर्मी और धूप के माहौल में डूब जाएं।',
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
      {
        locale: 'pt',
        value: 'Experimente uma verdadeira explosão de sabor tropical com a nossa sobremesa única! Uma combinação delicada de manga madura, creme cremoso e biscoitos crocantes lhe dará um prazer inesquecível. Mergulhe na atmosfera de calor e luz do sol com cada mordida desta incrível iguaria.',
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
            locale: 'hi',
            value: 'टुकड़ा',
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
          {
            locale: 'pt',
            value: 'Fatia',
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
