import type { Channel, GatewayGetChannelsResponse, GatewayGetDeliveryByCourierStatusRequest, GatewayGetDeliveryByCourierStatusResponse, GatewayGetSelfPickupStatusRequest, GatewayGetSelfPickupStatusResponse, GatewayGetTimeSlotsRequest, GatewayGetTimeSlotsResponse, PaymentMethod, Schedule } from '@nextorders/food-schema'
import { getOpeningStatus, getTimeSlotsFromNow } from './time'

const selfPickupConditions: Channel['selfPickup']['conditions'] = [
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
    locale: 'el',
    value: `Για παραλαβή από το κατάστημα, η παραγγελία σας θα είναι έτοιμη για παραλαβή εντός 1-2 ωρών από την τοποθέτησή της.

Δεν υπάρχει ελάχιστο ποσό παραγγελίας για παραλαβή από το κατάστημα—μπορείτε να παραγγείλετε οποιοδήποτε ποσό. Η παραλαβή από το κατάστημα είναι δωρεάν και δεν υπάρχει επιπλέον χρέωση.

Μπορείτε να πληρώσετε για την παραγγελία σας κατά την παραλαβή με μετρητά ή με πιστωτική κάρτα. Εάν ακυρώσετε ή αλλάξετε την παραγγελία σας, η προπληρωμή σας, εάν υπάρχει, θα σας επιστραφεί πλήρως.

Το κατάστημα διατηρεί το δικαίωμα να αρνηθεί την παραλαβή από το κατάστημα εάν είναι υπεράριθμη ή εάν τεχνικά προβλήματα επηρεάζουν την επεξεργασία της παραγγελίας.`,
  },
  {
    locale: 'es',
    value: `Para recoger en tienda, su pedido estará listo en 1 o 2 horas después de realizarlo.

No hay un pedido mínimo para recoger en tienda; puede pedir cualquier cantidad. Recoger en tienda es gratuito y no tiene ningún cargo adicional.

Puede pagar su pedido al recogerlo en efectivo o con tarjeta de crédito. Si cancela o modifica su pedido, se le reembolsará el importe total del prepago, si lo hubiera.

El establecimiento se reserva el derecho de rechazar la recogida en tienda si hay overbooking o si algún problema técnico afecta al procesamiento del pedido.`,
  },
  {
    locale: 'fr',
    value: `Pour un retrait en magasin, votre commande sera prête dans un délai de 1 à 2 heures après sa validation.

Il n'y a pas de montant minimum pour le retrait en magasin: vous pouvez commander le montant de votre choix. Le retrait en magasin est gratuit et sans frais supplémentaires.

Vous pouvez régler votre commande en espèces ou par carte bancaire lors du retrait. En cas d'annulation ou de modification de votre commande, votre acompte, le cas échéant, vous sera intégralement remboursé.

L'établissement se réserve le droit de refuser le retrait en magasin en cas de forte affluence ou de problèmes techniques affectant le traitement des commandes.`,
  },
  {
    locale: 'hi',
    value: `इन-स्टोर पिकअप के लिए, आपका ऑर्डर देने के 1-2 घंटे के अंदर पिकअप के लिए तैयार हो जाएगा।

इन-स्टोर पिकअप के लिए कोई मिनिमम ऑर्डर अमाउंट नहीं है—आप कितना भी ऑर्डर कर सकते हैं। इन-स्टोर पिकअप फ़्री है, और कोई एक्स्ट्रा चार्ज नहीं है।

आप पिकअप के समय अपने ऑर्डर का पेमेंट कैश या क्रेडिट कार्ड से कर सकते हैं। अगर आप अपना ऑर्डर कैंसिल करते हैं या बदलते हैं, तो आपका प्रीपेमेंट, अगर कोई हो, तो पूरा रिफ़ंड कर दिया जाएगा।

अगर ओवरबुक हो जाता है या टेक्निकल दिक्कतों की वजह से ऑर्डर प्रोसेस हो जाता है, तो कंपनी इन-स्टोर पिकअप से मना करने का अधिकार रखती है।`,
  },
  {
    locale: 'it',
    value: `Per il ritiro in negozio, il tuo ordine sarà pronto entro 1-2 ore dall'ordine.

Non c'è un importo minimo per il ritiro in negozio: puoi ordinare qualsiasi importo. Il ritiro in negozio è gratuito e non ci sono costi aggiuntivi.

Puoi pagare il tuo ordine al ritiro in contanti o con carta di credito. Se annulli o modifichi il tuo ordine, l'eventuale pagamento anticipato ti verrà rimborsato per intero.

L'esercizio si riserva il diritto di rifiutare il ritiro in negozio in caso di sovraccarico o problemi tecnici che influenzano l'elaborazione degli ordini.`,
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
  {
    locale: 'pt',
    value: `Para retirada na loja, seu pedido estará pronto para retirada dentro de 1-2 horas após o pedido.

Não há valor mínimo de pedido para retirada na loja - você pode pedir qualquer valor. A retirada na loja é gratuita e não há cobrança adicional.

Você pode pagar seu pedido na retirada em dinheiro ou por cartão de crédito. Se você cancelar ou alterar seu pedido, seu pagamento antecipado, se houver, será reembolsado integralmente.

O estabelecimento se reserva o direito de recusar a retirada na loja se estiver lotado ou se problemas técnicos afetarem o processamento do pedido.`,
  },
]

const deliveryByCourierConditions: Channel['deliveryByCourier']['conditions'] = [
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
    locale: 'el',
    value: `Η παράδοση πραγματοποιείται εντός 1-2 ωρών από την υποβολή της παραγγελίας.

Το ελάχιστο ποσό παραγγελίας για δωρεάν παράδοση είναι 1500 ρούβλια.

Το κόστος παράδοσης υπολογίζεται ανάλογα με την απόσταση από το σημείο παράδοσης ή τη διεύθυνση παράδοσης και μπορεί να κυμαίνεται από 0 έως 1000 ρούβλια.

Η παραγγελία μπορεί να πληρωθεί κατά την παραλαβή με μετρητά ή με κάρτα.

Σε περίπτωση ακύρωσης της παραγγελίας ή αλλαγής των όρων της, η παράδοση πληρώνεται πλήρως.

Το ίδρυμα διατηρεί το δικαίωμα να αρνηθεί την παράδοση σε περίπτωση μεγάλου αριθμού παραγγελιών ή τεχνικών προβλημάτων.`,
  },
  {
    locale: 'es',
    value: `La entrega se realiza en un plazo de 1 a 2 horas tras realizar el pedido.

El importe mínimo del pedido para el envío gratuito es de 1500 rublos.

El coste del envío se calcula en función de la distancia al punto o dirección de entrega y puede oscilar entre 0 y 1000 rublos.

El pedido se puede pagar al recibirlo en efectivo o con tarjeta.

En caso de cancelación del pedido o modificación de sus condiciones, el envío se abonará en su totalidad.

El establecimiento se reserva el derecho de rechazar la entrega en caso de gran cantidad de pedidos o problemas técnicos.`,
  },
  {
    locale: 'fr',
    value: `La livraison est effectuée sous 1 à 2 heures après la commande.

Le montant minimum de commande pour bénéficier de la livraison gratuite est de 1500 roubles.

Les frais de livraison sont calculés en fonction de la distance jusqu'au point de livraison ou à l'adresse de livraison et peuvent varier de 0 à 1000 roubles.

Le paiement peut être effectué à la réception, en espèces ou par carte.

En cas d'annulation ou de modification de la commande, les frais de livraison restent dus.

L'établissement se réserve le droit de refuser une livraison en cas de volume de commandes important ou de problèmes techniques.`,
  },
  {
    locale: 'hi',
    value: `ऑर्डर देने के 1-2 घंटे के अंदर डिलीवरी कर दी जाती है।

फ़्री डिलीवरी के लिए कम से कम ऑर्डर अमाउंट 1500 रूबल है।

डिलीवरी का खर्च डिलीवरी पॉइंट या डिलीवरी एड्रेस की दूरी के आधार पर कैलकुलेट किया जाता है और यह 0 से 1000 रूबल तक हो सकता है।

ऑर्डर मिलने पर कैश या कार्ड से पेमेंट किया जा सकता है।

ऑर्डर कैंसिल करने या उसकी शर्तों में बदलाव करने पर, डिलीवरी का पूरा पेमेंट किया जाता है।

ज़्यादा ऑर्डर होने या टेक्निकल दिक्कतों की स्थिति में इंस्टीट्यूशन डिलीवरी से मना करने का अधिकार रखता है।`,
  },
  {
    locale: 'it',
    value: `La consegna viene effettuata entro 1-2 ore dall'ordine.

L'importo minimo per la consegna gratuita è di 1500 rubli.

Il costo della consegna viene calcolato in base alla distanza dal punto di consegna o dall'indirizzo di consegna e può variare da 0 a 1000 rubli.

L'ordine può essere pagato alla consegna in contanti o con carta.

In caso di annullamento dell'ordine o modifica delle sue condizioni, la consegna è pagata per intero.

L'azienda si riserva il diritto di rifiutare la consegna in caso di un gran numero di ordini o problemi tecnici.`,
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
  {
    locale: 'pt',
    value: `A entrega é realizada dentro de 1-2 horas após a realização do pedido.

O valor mínimo do pedido para entrega gratuita é de 1500 rublos.

O custo da entrega é calculado dependendo da distância até o ponto de entrega ou endereço de entrega e pode variar de 0 a 1000 rublos.

O pedido pode ser pago na entrega em dinheiro ou por cartão.

Em caso de cancelamento do pedido ou alteração das suas condições, a entrega é paga na totalidade.

A instituição reserva o direito de recusar a entrega em caso de grande número de pedidos ou problemas técnicos.`,
  },
]

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
        locale: 'el',
        value: 'Μετρητά στον courier',
      },
      {
        locale: 'es',
        value: 'Efectivo al mensajero',
      },
      {
        locale: 'fr',
        value: 'Argent comptant au coursier',
      },
      {
        locale: 'hi',
        value: 'कूरियर को नकद',
      },
      {
        locale: 'it',
        value: 'Contanti al corriere',
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
      {
        locale: 'pt',
        value: 'Dinheiro ao entregador',
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
        locale: 'el',
        value: 'Κάρτα στον κούριερ',
      },
      {
        locale: 'es',
        value: 'Tarjeta al mensajero',
      },
      {
        locale: 'fr',
        value: 'Carte au coursier',
      },
      {
        locale: 'hi',
        value: 'कूरियर को कार्ड',
      },
      {
        locale: 'it',
        value: 'Carta al corriere',
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
      {
        locale: 'pt',
        value: 'Cartão ao entregador',
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
        locale: 'el',
        value: 'Μετρητά',
      },
      {
        locale: 'es',
        value: 'Efectivo',
      },
      {
        locale: 'fr',
        value: 'Argent comptant',
      },
      {
        locale: 'hi',
        value: 'नकद',
      },
      {
        locale: 'it',
        value: 'Contanti',
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
      {
        locale: 'pt',
        value: 'Dinheiro',
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
          locale: 'el',
          value: '8 800 123-45-69',
        },
        {
          locale: 'es',
          value: '8 800 123-45-69',
        },
        {
          locale: 'fr',
          value: '8 800 123-45-69',
        },
        {
          locale: 'hi',
          value: '8 800 123-45-69',
        },
        {
          locale: 'it',
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
        {
          locale: 'pt',
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
          locale: 'el',
          value: 'Δημόσια Προσφορά',
        },
        {
          locale: 'es',
          value: 'Oferta Pública',
        },
        {
          locale: 'fr',
          value: 'Offre publique',
        },
        {
          locale: 'hi',
          value: 'सार्वजनिक प्रस्ताव',
        },
        {
          locale: 'it',
          value: 'Offerta pubblica',
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
        {
          locale: 'pt',
          value: 'Oferta Pública',
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
          locale: 'el',
          value: 'Πολιτική Απορρήτου',
        },
        {
          locale: 'es',
          value: 'Política de privacidad',
        },
        {
          locale: 'fr',
          value: 'Politique de confidentialité',
        },
        {
          locale: 'hi',
          value: 'गोपनीयता नीति',
        },
        {
          locale: 'it',
          value: 'Informativa sulla privacy',
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
        {
          locale: 'pt',
          value: 'Política de Privacidade',
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
          locale: 'el',
          value: 'Λογισμικό για ηλεκτρονικό εμπόριο',
        },
        {
          locale: 'es',
          value: 'Software para comercio electrónico',
        },
        {
          locale: 'fr',
          value: 'Logiciels pour le commerce électronique',
        },
        {
          locale: 'hi',
          value: 'ई-कॉमर्स के लिए सॉफ्टवेयर',
        },
        {
          locale: 'it',
          value: 'Software per l\'e-commerce',
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
        {
          locale: 'pt',
          value: 'Software para comércio eletrónico',
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
    locale: 'el',
    value: `© 2024—2026 Fictitious Company LLC
OGRN 12345, INN 12345
236000, Περιφέρεια Καλίνινγκραντ, Καλίνινγκραντ, Teatralnaya St., 33A

Οι πληροφορίες σε αυτόν τον ιστότοπο δεν αποτελούν δημόσια προσφορά.
Οι εικόνες προϊόντων ενδέχεται να διαφέρουν από το πρωτότυπο.`,
  },
  {
    locale: 'es',
    value: `© 2024—2026 Fictitious Company LLC
OGRN 12345, INN 12345
236000, Óblast de Kaliningrado, Kaliningrado, Calle Teatralnaya, 33A

La información de este sitio web no constituye una oferta pública.
Las imágenes del producto pueden diferir del original.`,
  },
  {
    locale: 'fr',
    value: `© 2024-2026 Fictitious Company LLC
OGRN 12345, INN 12345

236000, Oblast de Kaliningrad, Kaliningrad, rue Teatralnaya, 33A

Les informations présentes sur ce site web ne constituent pas une offre publique.

Les images des produits peuvent différer du produit réel.`,
  },
  {
    locale: 'hi',
    value: `© 2024—2026 Fictitious Company LLC
OGRN 12345, INN 12345
236000, Kaliningrad Oblast, Kaliningrad, Teatralnaya St., 33A

इस वेबसाइट पर दी गई जानकारी पब्लिक ऑफ़र नहीं है।
प्रोडक्ट की इमेज ओरिजिनल से अलग हो सकती हैं।`,
  },
  {
    locale: 'it',
    value: `© 2024—2026 Fictitious Company LLC
OGRN 12345, INN 12345
236000, Oblast di Kaliningrad, Kaliningrad, Via Teatralnaya, 33A

Le informazioni su questo sito non costituiscono un'offerta pubblica.
Le immagini dei prodotti possono differire dall'originale.`,
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
  {
    locale: 'pt',
    value: `© 2024—2026 Fictitious Company LLC
OGRN 12345, INN 12345
236000, Oblast de Kaliningrado, Kaliningrado, Rua Teatralnaya, 33A

As informações neste site não constituem uma oferta pública.
As imagens dos produtos podem diferir do original.`,
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
      locale: 'el',
      value: 'Μόσχα',
    },
    {
      locale: 'es',
      value: 'Moscú',
    },
    {
      locale: 'fr',
      value: 'Moscou',
    },
    {
      locale: 'hi',
      value: 'मास्को',
    },
    {
      locale: 'it',
      value: 'Mosca',
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
    {
      locale: 'pt',
      value: 'Moscovo',
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
      locale: 'el',
      value: 'Γεύση εν κινήσει στη Μόσχα',
    },
    {
      locale: 'es',
      value: 'Sabor sobre la marcha en Moscú',
    },
    {
      locale: 'fr',
      value: 'Savoureux sur le pouce à Moscou',
    },
    {
      locale: 'hi',
      value: 'मॉस्को में दौड़ते हुए स्वाद लें',
    },
    {
      locale: 'it',
      value: 'Gusto al volo a Mosca',
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
    {
      locale: 'pt',
      value: 'Sabores rápidos em Moscovo',
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
      locale: 'el',
      value: 'Απολαύστε μοναδικές γεύσεις και μια ευχάριστη ατμόσφαιρα',
    },
    {
      locale: 'es',
      value: 'Disfrute de sabores únicos y una atmósfera agradable',
    },
    {
      locale: 'fr',
      value: 'Savourez des goûts uniques et une ambiance agréable',
    },
    {
      locale: 'hi',
      value: 'अनोखे स्वाद और अच्छे माहौल का आनंद लें',
    },
    {
      locale: 'it',
      value: 'Goditi sapori unici e un\'atmosfera piacevole',
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
    {
      locale: 'pt',
      value: 'Desfrute de sabores únicos e uma atmosfera agradável',
    },
  ],
  url: 'https://demo.nextorders.space/moscow',
  timeZone: '+03:00',
  isActive: true,
  deliveryByCourier: {
    isAvailable: true,
    conditions: deliveryByCourierConditions,
    minAmountForDelivery: 800,
    schedule: deliverySchedule,
    paymentMethods: paymentMethodsForDelivery,
  },
  selfPickup: {
    isAvailable: true,
    conditions: selfPickupConditions,
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
            locale: 'el',
            value: 'Kolotushkina 12',
          },
          {
            locale: 'es',
            value: 'Kolotushkina 12',
          },
          {
            locale: 'fr',
            value: 'Kolotushkina 12',
          },
          {
            locale: 'hi',
            value: 'Kolotushkina 12',
          },
          {
            locale: 'it',
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
          {
            locale: 'pt',
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
              locale: 'el',
              value: 'Kolotushkina 12',
            },
            {
              locale: 'es',
              value: 'Kolotushkina 12',
            },
            {
              locale: 'fr',
              value: 'Kolotushkina 12',
            },
            {
              locale: 'hi',
              value: 'Kolotushkina 12',
            },
            {
              locale: 'it',
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
            {
              locale: 'pt',
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
            locale: 'el',
            value: 'Lenina 46',
          },
          {
            locale: 'es',
            value: 'Lenina 46',
          },
          {
            locale: 'fr',
            value: 'Lenina 46',
          },
          {
            locale: 'hi',
            value: 'Lenina 46',
          },
          {
            locale: 'it',
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
          {
            locale: 'pt',
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
              locale: 'el',
              value: 'Lenina 46',
            },
            {
              locale: 'es',
              value: 'Lenina 46',
            },
            {
              locale: 'fr',
              value: 'Lenina 46',
            },
            {
              locale: 'hi',
              value: 'Lenina 46',
            },
            {
              locale: 'it',
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
            {
              locale: 'pt',
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
      locale: 'el',
      value: 'Αγία Πετρούπολη',
    },
    {
      locale: 'es',
      value: 'San Petersburgo',
    },
    {
      locale: 'fr',
      value: 'Saint-Pétersbourg',
    },
    {
      locale: 'hi',
      value: 'सेंट पीटर्सबर्ग',
    },
    {
      locale: 'it',
      value: 'San Pietroburgo',
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
    {
      locale: 'pt',
      value: 'São Petersburgo',
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
      locale: 'el',
      value: 'Γεύση εν κινήσει στην Αγία Πετρούπολη',
    },
    {
      locale: 'es',
      value: 'Sabor sobre la marcha en Saint Petersburg',
    },
    {
      locale: 'fr',
      value: 'Savoureux sur le pouce de Saint-Pétersbourg',
    },
    {
      locale: 'hi',
      value: 'सेंट पीटर्सबर्ग में दौड़ते हुए स्वाद लें',
    },
    {
      locale: 'it',
      value: 'Gusto al volo a San Pietroburgo',
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
    {
      locale: 'pt',
      value: 'Sabores rápidos em São Petersburgo',
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
      locale: 'el',
      value: 'Απολαύστε μοναδικές γεύσεις και μια ευχάριστη ατμόσφαιρα',
    },
    {
      locale: 'es',
      value: 'Disfrute de sabores únicos y una atmósfera agradable',
    },
    {
      locale: 'fr',
      value: 'Savourez des goûts uniques et une ambiance agréable',
    },
    {
      locale: 'hi',
      value: 'अनोखे स्वाद और अच्छे माहौल का आनंद लें',
    },
    {
      locale: 'it',
      value: 'Goditi sapori unici e un\'atmosfera piacevole',
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
    {
      locale: 'pt',
      value: 'Desfrute de sabores únicos e uma atmosfera agradável',
    },
  ],
  url: 'https://demo.nextorders.space/peterburg',
  timeZone: '+03:00',
  isActive: true,
  deliveryByCourier: {
    isAvailable: true,
    conditions: deliveryByCourierConditions,
    minAmountForDelivery: 1000,
    paymentMethods: paymentMethodsForDelivery,
  },
  selfPickup: {
    isAvailable: true,
    conditions: selfPickupConditions,
    paymentMethods: paymentMethodsForSelfPickup,
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

  const schedule = data.deliveryMethod === 'deliveryByCourier' ? channel.deliveryByCourier.schedule : channel.selfPickup.schedule
  if (!schedule) {
    throw createError({
      statusCode: 404,
      message: 'Schedule not found',
    })
  }

  return {
    ok: true,
    type: 'getTimeSlots',
    result: getTimeSlotsFromNow(schedule, channel.timeZone),
  }
}
