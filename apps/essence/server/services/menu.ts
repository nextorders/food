import type { GatewayGetMenuResponse, Menu } from '@nextorders/food-schema'
import { burgers } from './data/products/burgers'
import { desserts } from './data/products/desserts'
import { hotMeals } from './data/products/hotMeals'
import { salads } from './data/products/salads'
import { snacks } from './data/products/snacks'
import { soups } from './data/products/soups'

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
        locale: 'hi',
        value: 'बर्गर',
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
      {
        locale: 'pt',
        value: 'Hambúrgueres',
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
        locale: 'hi',
        value: 'गरम भोजन',
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
      {
        locale: 'pt',
        value: 'Pratos Quentes',
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
        locale: 'hi',
        value: 'सलाद',
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
      {
        locale: 'pt',
        value: 'Saladas',
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
        locale: 'hi',
        value: 'सूप',
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
      {
        locale: 'pt',
        value: 'Sopas',
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
        locale: 'hi',
        value: 'स्नैक्स',
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
      {
        locale: 'pt',
        value: 'Lanches',
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
        locale: 'hi',
        value: 'मिठाइयाँ',
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
      {
        locale: 'pt',
        value: 'Sobremesas',
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
      locale: 'hi',
      value: 'डिफ़ॉल्ट मेनू',
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
    {
      locale: 'pt',
      value: 'Menu Padrão',
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
