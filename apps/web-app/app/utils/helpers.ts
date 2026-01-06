import type { WeekDay, WeightUnit } from '@nextorders/food-schema'

export function getWeightLocalizedUnit<WeightUnitLiteral = string & object>(unit?: WeightUnit | WeightUnitLiteral): string {
  const { dict } = useDictionary()

  switch (unit as WeightUnit) {
    case 'g':
      return dict('common.abbreviation.g')
    case 'kg':
      return dict('common.abbreviation.kg')
    case 'ml':
      return dict('common.abbreviation.ml')
    case 'l':
      return dict('common.abbreviation.l')
    case 'lb':
      return dict('common.abbreviation.lb')
    case 'oz':
      return dict('common.abbreviation.oz')
    default:
      return ''
  }
}

export function getLocalizedWeekDay(day: WeekDay): string {
  const { dict } = useDictionary()

  switch (day) {
    case 'mon':
      return dict('common.day.monday')
    case 'tue':
      return dict('common.day.tuesday')
    case 'wed':
      return dict('common.day.wednesday')
    case 'thu':
      return dict('common.day.thursday')
    case 'fri':
      return dict('common.day.friday')
    case 'sat':
      return dict('common.day.saturday')
    case 'sun':
      return dict('common.day.sunday')
    default:
      return ''
  }
}

export function getLinkIconsForSelect(): { value: string, label: string, icon?: string, type?: 'separator' }[] {
  return [
    { value: 'i-lucide-smartphone', icon: 'i-lucide-smartphone', label: 'Phone' },
    { value: 'i-lucide-gift', icon: 'i-lucide-gift', label: 'Gift' },
    { value: 'i-lucide-info', icon: 'i-lucide-info', label: 'Info' },
    { type: 'separator', label: '', value: '' },
    { value: 'simple-icons:bluesky', icon: 'simple-icons:bluesky', label: 'Bluesky' },
    { value: 'simple-icons:facebook', icon: 'simple-icons:facebook', label: 'Facebook' },
    { value: 'simple-icons:github', icon: 'simple-icons:github', label: 'GitHub' },
    { value: 'simple-icons:instagram', icon: 'simple-icons:instagram', label: 'Instagram' },
    { value: 'simple-icons:odnoklassniki', icon: 'simple-icons:odnoklassniki', label: 'Odnoklassniki' },
    { value: 'simple-icons:telegram', icon: 'simple-icons:telegram', label: 'Telegram' },
    { value: 'simple-icons:viber', icon: 'simple-icons:viber', label: 'Viber' },
    { value: 'simple-icons:vk', icon: 'simple-icons:vk', label: 'VK' },
    { value: 'simple-icons:whatsapp', icon: 'simple-icons:whatsapp', label: 'WhatsApp' },
    { value: 'simple-icons:x', icon: 'simple-icons:x', label: 'X' },
    { value: 'simple-icons:youtube', icon: 'simple-icons:youtube', label: 'YouTube' },
  ]
}

export function getCategoryIconsForSelect(): { value: string, label: string, icon?: string }[] {
  return [
    { value: '', icon: '', label: 'No icon' },
    { value: 'fluent-emoji-flat:avocado', icon: 'fluent-emoji-flat:avocado', label: 'Avocado' },
    { value: 'fluent-emoji-flat:bacon', icon: 'fluent-emoji-flat:bacon', label: 'Bacon' },
    { value: 'fluent-emoji-flat:bagel', icon: 'fluent-emoji-flat:bagel', label: 'Bagel' },
    { value: 'fluent-emoji-flat:banana', icon: 'fluent-emoji-flat:banana', label: 'Banana' },
    { value: 'fluent-emoji-flat:baguette-bread', icon: 'fluent-emoji-flat:baguette-bread', label: 'Baguette' },
    { value: 'fluent-emoji-flat:beer-mug', icon: 'fluent-emoji-flat:beer-mug', label: 'Beer' },
    { value: 'fluent-emoji-flat:bento-box', icon: 'fluent-emoji-flat:bento-box', label: 'Bento' },
    { value: 'fluent-emoji-flat:beverage-box', icon: 'fluent-emoji-flat:beverage-box', label: 'Beverage' },
    { value: 'fluent-emoji-flat:birthday-cake', icon: 'fluent-emoji-flat:birthday-cake', label: 'Birthday Cake' },
    { value: 'fluent-emoji-flat:bread', icon: 'fluent-emoji-flat:bread', label: 'Bread' },
    { value: 'fluent-emoji-flat:broccoli', icon: 'fluent-emoji-flat:broccoli', label: 'Broccoli' },
    { value: 'fluent-emoji-flat:brown-mushroom', icon: 'fluent-emoji-flat:brown-mushroom', label: 'Brown Mushroom' },
    { value: 'fluent-emoji-flat:bubble-tea', icon: 'fluent-emoji-flat:bubble-tea', label: 'Bubble Tea' },
    { value: 'fluent-emoji-flat:burrito', icon: 'fluent-emoji-flat:burrito', label: 'Burrito' },
    { value: 'fluent-emoji-flat:candy', icon: 'fluent-emoji-flat:candy', label: 'Candy' },
    { value: 'fluent-emoji-flat:carrot', icon: 'fluent-emoji-flat:carrot', label: 'Carrot' },
    { value: 'fluent-emoji-flat:cheese-wedge', icon: 'fluent-emoji-flat:cheese-wedge', label: 'Cheese' },
    { value: 'fluent-emoji-flat:chocolate-bar', icon: 'fluent-emoji-flat:chocolate-bar', label: 'Chocolate' },
    { value: 'fluent-emoji-flat:shortcake', icon: 'fluent-emoji-flat:shortcake', label: 'Cake' },
    { value: 'fluent-emoji-flat:cocktail-glass', icon: 'fluent-emoji-flat:cocktail-glass', label: 'Cocktail' },
    { value: 'fluent-emoji-flat:cooked-rice', icon: 'fluent-emoji-flat:cooked-rice', label: 'Cooked Rice' },
    { value: 'fluent-emoji-flat:cookie', icon: 'fluent-emoji-flat:cookie', label: 'Cookie' },
    { value: 'fluent-emoji-flat:cooking', icon: 'fluent-emoji-flat:cooking', label: 'Cooking' },
    { value: 'fluent-emoji-flat:crab', icon: 'fluent-emoji-flat:crab', label: 'Crab' },
    { value: 'fluent-emoji-flat:croissant', icon: 'fluent-emoji-flat:croissant', label: 'Croissant' },
    { value: 'fluent-emoji-flat:cupcake', icon: 'fluent-emoji-flat:cupcake', label: 'Cupcake' },
    { value: 'fluent-emoji-flat:curry-rice', icon: 'fluent-emoji-flat:curry-rice', label: 'Curry' },
    { value: 'fluent-emoji-flat:doughnut', icon: 'fluent-emoji-flat:doughnut', label: 'Doughnut' },
    { value: 'fluent-emoji-flat:fork-and-knife', icon: 'fluent-emoji-flat:fork-and-knife', label: 'Fork' },
    { value: 'fluent-emoji-flat:french-fries', icon: 'fluent-emoji-flat:french-fries', label: 'French Fries' },
    { value: 'fluent-emoji-flat:fried-shrimp', icon: 'fluent-emoji-flat:fried-shrimp', label: 'Fried Shrimp' },
    { value: 'fluent-emoji-flat:hamburger', icon: 'fluent-emoji-flat:hamburger', label: 'Hamburger' },
    { value: 'fluent-emoji-flat:hot-beverage', icon: 'fluent-emoji-flat:hot-beverage', label: 'Hot Beverage' },
    { value: 'fluent-emoji-flat:hot-dog', icon: 'fluent-emoji-flat:hot-dog', label: 'Hot Dog' },
    { value: 'fluent-emoji-flat:hot-pepper', icon: 'fluent-emoji-flat:hot-pepper', label: 'Hot Pepper' },
    { value: 'fluent-emoji-flat:ice-cream', icon: 'fluent-emoji-flat:ice-cream', label: 'Ice Cream' },
    { value: 'fluent-emoji-flat:pancakes', icon: 'fluent-emoji-flat:pancakes', label: 'Pancake' },
    { value: 'fluent-emoji-flat:pizza', icon: 'fluent-emoji-flat:pizza', label: 'Pizza' },
    { value: 'fluent-emoji-flat:popcorn', icon: 'fluent-emoji-flat:popcorn', label: 'Popcorn' },
    { value: 'fluent-emoji-flat:pretzel', icon: 'fluent-emoji-flat:pretzel', label: 'Pretzel' },
    { value: 'fluent-emoji-flat:green-salad', icon: 'fluent-emoji-flat:green-salad', label: 'Salad' },
    { value: 'fluent-emoji-flat:sandwich', icon: 'fluent-emoji-flat:sandwich', label: 'Sandwich' },
    { value: 'fluent-emoji-flat:pot-of-food', icon: 'fluent-emoji-flat:pot-of-food', label: 'Soup' },
    { value: 'fluent-emoji-flat:spaghetti', icon: 'fluent-emoji-flat:spaghetti', label: 'Spaghetti' },
    { value: 'fluent-emoji-flat:cut-of-meat', icon: 'fluent-emoji-flat:cut-of-meat', label: 'Steak' },
    { value: 'fluent-emoji-flat:steaming-bowl', icon: 'fluent-emoji-flat:steaming-bowl', label: 'Stew' },
    { value: 'fluent-emoji-flat:stuffed-flatbread', icon: 'fluent-emoji-flat:stuffed-flatbread', label: 'Stuffed Flatbread' },
    { value: 'fluent-emoji-flat:sushi', icon: 'fluent-emoji-flat:sushi', label: 'Sushi' },
    { value: 'fluent-emoji-flat:taco', icon: 'fluent-emoji-flat:taco', label: 'Taco' },
    { value: 'fluent-emoji-flat:tamale', icon: 'fluent-emoji-flat:tamale', label: 'Tamale' },
    { value: 'fluent-emoji-flat:teacup-without-handle', icon: 'fluent-emoji-flat:teacup-without-handle', label: 'Tea' },
  ]
}
