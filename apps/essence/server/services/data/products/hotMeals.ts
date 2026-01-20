import type { Product } from '@nextorders/food-schema'

export const hotMeals: Product[] = [
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
      {
        locale: 'pt',
        value: 'Paixão secreta: frango e camarão',
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
      {
        locale: 'pt',
        value: 'Frango e camarões - uma combinação delicada e requintada para verdadeiros gourmet. Filé de frango assado e camarões tigre em molho cremoso serão um prato principal perfeito ou uma adição a um acompanhamento. Delicie-se e seus entes queridos com este prato quente delicioso e saboroso!',
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
          {
            locale: 'pt',
            value: 'Porção',
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
      {
        locale: 'pt',
        value: '"Trio Triunfante": um prato de três ovos',
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
      {
        locale: 'pt',
        value: 'Uma combinação perfeita de três ovos fritos até obter uma crosta dourada, com ervas aromáticas e creme delicado. Este prato será uma verdadeira descoberta para o seu paladar e lhe dará uma experiência inesquecível!',
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
          {
            locale: 'pt',
            value: 'Porção',
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
          {
            locale: 'pt',
            value: 'Hit 🔥',
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
      {
        locale: 'pt',
        value: 'Fajitas Firebird',
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
      {
        locale: 'pt',
        value: 'Experimente o sabor único do México com nossas fajitas de frango saborosas! Carne de frango tenra frita com vegetais e especiarias será uma excelente adição às suas tortilhas favoritas. Desfrute do sabor brilhante e energize-se com o sol!',
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
          {
            locale: 'pt',
            value: 'Porção',
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
      {
        locale: 'pt',
        value: 'Salmão grelhado com chimichurri',
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
      {
        locale: 'pt',
        value: 'Experimente uma explosão de sabor com nosso prato quente Salmão Grelhado com Chimichurri! Salmão temperado saboroso é grelhado até dourar e depois servido com um molho chimichurri refrescante. O equilíbrio perfeito de sabor e aroma para o seu prazer!',
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
          {
            locale: 'pt',
            value: 'Porção',
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
      {
        locale: 'pt',
        value: 'Reino dos Frutos do Mar',
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
      {
        locale: 'pt',
        value: 'Bacalhau tenro salteado e camarões - uma combinação requintada de sabores de frutos do mar em um molho de tomate aromático. Este prato quente se tornará uma verdadeira decoração para sua mesa e encantará seus convidados!',
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
          {
            locale: 'pt',
            value: 'Porção',
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
      {
        locale: 'pt',
        value: 'Jambalaya com frango e camarão no estilo kanjun',
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
      {
        locale: 'pt',
        value: 'Descubra o sabor único da jambalaya com frango e camarões no estilo Kanjun! Este prato quente combina tradições culinárias francesas e espanholas e agradará até os gourmets mais exigentes. Experimente e veja por si mesmo!',
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
          {
            locale: 'pt',
            value: 'Porção',
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
