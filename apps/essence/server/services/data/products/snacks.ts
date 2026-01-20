import type { Product } from '@nextorders/food-schema'

export const snacks: Product[] = [
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
      {
        locale: 'pt',
        value: 'Asas da Felicidade: Sopro Quente de Búfalo',
      },
      {
        locale: 'hi',
        value: 'खुशी के पंख: भैंस की गर्म सांस',
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
      {
        locale: 'pt',
        value: 'Asas de Frango Buffalo - picantes, suculentas e incrivelmente deliciosas! A escolha perfeita para uma festa divertida.',
      },
      {
        locale: 'hi',
        value: 'बफ़ेलो फ्राइड विंग्स - मसालेदार, रसीले और बहुत स्वादिष्ट! मज़ेदार पार्टी के लिए एकदम सही चॉइस।',
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
          {
            locale: 'pt',
            value: 'Porção',
          },
          {
            locale: 'hi',
            value: 'भाग',
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
          {
            locale: 'pt',
            value: '🔥🥵',
          },
          {
            locale: 'hi',
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
      {
        locale: 'pt',
        value: 'Riqueza de vegetais',
      },
      {
        locale: 'hi',
        value: 'सब्जियों की भरमार',
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
        locale: 'hi',
        value: 'हमारे वेजिटेबल क्साडिला में ताज़ी सब्जियों के स्वाद का मज़ा लें! यह खुशबूदार मसालों के साथ रसीले इंग्रीडिएंट्स का परफेक्ट कॉम्बिनेशन है। हमारे वेजिटेबल क्साडिला को ट्राई करने और ब्राइट फ्लेवर के साथ एनर्जी पाने का मौका न चूकें!',
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
      {
        locale: 'pt',
        value: 'Delicie-se com o sabor dos legumes frescos na nossa quesadilla vegetariana! É a combinação perfeita de ingredientes suculentos temperados com especiarias aromáticas. Não perca a oportunidade de experimentar a nossa quesadilla vegetariana e de se energizar com sabores vibrantes!',
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
            locale: 'hi',
            value: 'भाग',
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
          {
            locale: 'pt',
            value: 'Porção',
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
      {
        locale: 'pt',
        value: 'Cheeseburgerettes',
      },
      {
        locale: 'hi',
        value: 'चीज़बर्गरेट',
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
        locale: 'hi',
        value: 'टेंडर मिनी चीज़बर्गर - पूरे परिवार के लिए परफेक्ट स्नैक! असली अमेरिकन चीज़, जूसी पैटी और ताज़ी सब्ज़ियों के साथ स्वादिष्ट मिनी-बर्गर। अभी और यहीं एक असली अमेरिकन रेस्टोरेंट का माहौल महसूस करें!',
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
      {
        locale: 'pt',
        value: 'Mini cheeseburgers macios e suculentos - o snack perfeito para toda a família! Deliciosos mini-hambúrgueres com queijo americano verdadeiro, hambúrguer suculento e vegetais frescos. Sinta o ambiente de um autêntico restaurante americano aqui e agora!',
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
            locale: 'hi',
            value: 'भाग',
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
        locale: 'hi',
        value: 'गरम पनीर और बेकन',
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
      {
        locale: 'pt',
        value: 'Queijo quente e bacon',
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
        locale: 'hi',
        value: 'हमारे रेस्टोरेंट में चेडर चीज़ और बेकन के साथ फ्रेंच फ्राइज़ का अनोखा स्वाद अनुभव करें! यह असली खाने के शौकीनों के लिए एकदम सही कॉम्बिनेशन है।',
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
      {
        locale: 'pt',
        value: 'Experimente o sabor único das batatas fritas com queijo cheddar e bacon no nosso restaurante! Esta é a combinação perfeita para os verdadeiros gourmets.',
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
            locale: 'hi',
            value: 'भाग',
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
        locale: 'hi',
        value: 'चीज़ एडवेंचर: तीन तरह के चीज़ के साथ नाचोस',
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
      {
        locale: 'pt',
        value: 'Aventuras de queijo: nachos com três tipos de queijo',
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
        locale: 'hi',
        value: 'हम आपको हमारे खास चीज़ वाले नाचोस के साथ असली मैक्सिकन छुट्टी के माहौल में डूबने के लिए बुलाते हैं! तीन तरह के चीज़ और क्रिस्पी कॉर्न टॉर्टिला का नरम कॉम्बिनेशन सबसे अनुभवी खाने के शौकीनों को भी पसंद आएगा। हॉट सॉस या साल्सा के साथ परोसें - दोस्तों और परिवार के साथ एक यादगार शाम के लिए यह एकदम सही कॉम्बिनेशन है।',
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
      {
        locale: 'pt',
        value: 'Convidamo-lo a mergulhar na atmosfera de um verdadeiro feriado mexicano com os nossos exclusivos nachos com queijo! A irresistível combinação de três tipos de queijo e tortilhas de milho crocantes não deixará indiferente nem o paladar mais exigente. Sirva com molho picante ou salsa – a combinação perfeita para uma noite inesquecível com amigos e família.',
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
            locale: 'hi',
            value: 'भाग',
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
        locale: 'hi',
        value: 'बेकन का असाधारण प्रदर्शन',
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
      {
        locale: 'pt',
        value: 'Extravagância de bacon',
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
        locale: 'hi',
        value: 'हमारे स्पेशल पिज़्ज़ाडिला के साथ मज़े का एक नया लेवल खोजें! पतला आटा, स्वादिष्ट बेकन और चीज़ - यह कॉम्बिनेशन आपका दिल ज़रूर जीत लेगा। हमारे रेस्टोरेंट के आरामदायक माहौल में इस ज़बरदस्त स्वाद का मज़ा लेने का मौका न चूकें!',
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
      {
        locale: 'pt',
        value: 'Descubra um novo nível de prazer com a nossa pizzadilla especial! Massa fina, bacon irresistível e queijo - esta combinação vai certamente conquistar o seu coração. Não perca a oportunidade de saborear esta delícia no ambiente acolhedor do nosso restaurante!',
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
            locale: 'hi',
            value: 'भाग',
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
        locale: 'hi',
        value: 'गौडा के जादुई धागे',
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
      {
        locale: 'pt',
        value: 'Os fios mágicos de Gouda',
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
        locale: 'hi',
        value: 'गॉरमे चीज़ के साथ स्वादों की एक अद्भुत दुनिया खोजें जो आपको हर बाइट के साथ एक यादगार अनुभव देगी।',
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
      {
        locale: 'pt',
        value: 'Descubra um incrível mundo de sabores com queijos gourmet que lhe proporcionarão uma experiência inesquecível a cada dentada.',
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
            locale: 'hi',
            value: 'भाग',
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
        locale: 'hi',
        value: 'फ्लेमिंग क्साडिला: मसालेदार चिकन स्लाइस',
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
      {
        locale: 'pt',
        value: 'Quesadilla em chamas: Fatias de frango picante',
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
        locale: 'hi',
        value: 'हम आपको हमारे रेस्टोरेंट में शानदार चिकन क्साडिला का मज़ा लेने के लिए बुलाते हैं! मुलायम चिकन फ़िलेट, खुशबूदार मसाले और सुनहरा चीज़ - यह कॉम्बिनेशन ज़रूर आपका दिल जीत लेगा। सब्ज़ियों और साल्सा सॉस के साथ सर्व किया जाता है। हमारे रेस्टोरेंट के आरामदायक माहौल में असली मैक्सिकन खाने का अनोखा स्वाद महसूस करें!',
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
      {
        locale: 'pt',
        value: 'Convidamo-lo a saborear uma deliciosa quesadilla de frango no nosso restaurante! Filete de frango tenro, especiarias aromáticas e queijo dourado – esta combinação vai certamente conquistar o seu coração. Servida com legumes e molho salsa. Sinta o sabor único da autêntica cozinha mexicana no ambiente acolhedor do nosso restaurante!',
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
            locale: 'hi',
            value: 'भाग',
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
