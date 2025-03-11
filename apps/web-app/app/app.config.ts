export default defineAppConfig({
  icons: {
    colorMode: {
      system: 'lucide:device-laptop',
      dark: 'lucide:moon',
      light: 'lucide:sun',
    },
    close: 'lucide:x',
    edit: 'lucide:pencil',
    editImage: 'lucide:image-down',
    menu: 'lucide:menu',
    search: 'lucide:search',
    link: 'lucide:link',
    github: 'simple-icons:github',
    heart: 'lucide:heart',
    arrowRight: 'lucide:chevron-right',
    arrowDown: 'lucide:chevron-down',
    arrowUp: 'lucide:chevron-up',
    plus: 'lucide:plus',
    minus: 'lucide:minus',
    check: 'lucide:check',
    circleCheck: 'lucide:circle-check',
    circleDot: 'lucide:circle-dot',
    bookmark: 'lucide:bookmark',
    bookmarkCheck: 'lucide:bookmark-check',
    clock: 'lucide:clock',
    clockCheck: 'lucide:clock-arrow-up',
    discount: 'lucide:percent',
    delivery: 'lucide:truck',
    info: 'lucide:info',
    alert: 'lucide:triangle-alert',
    bike: 'lucide:bike',
    undo: 'lucide:undo-2',
    basket: 'lucide:shopping-basket',
    maintenance: 'lucide:traffic-cone',
    dashboard: 'lucide:layout-dashboard',
    image: 'lucide:image',
    box: 'lucide:box',
    users: 'lucide:users',
    list: 'lucide:layout-list',
    checkouts: 'lucide:copy-check',
    options: 'lucide:cog',
    globe: 'lucide:globe',
    book: 'lucide:book-open-text',
    gallery: 'lucide:gallery-horizontal-end',
    galleryItem: 'lucide:gallery-horizontal',
    monitorCheck: 'lucide:monitor-check',
    house: 'lucide:house',
    mapPinWarehouse: 'lucide:map-pin-house',
    mapPinCheck: 'lucide:map-pin-check',
    moneyCash: 'lucide:banknote',
    moneyCard: 'lucide:credit-card',
    moneyCustom: 'lucide:wallet-minimal',
    alarmClock: 'lucide:alarm-clock',
    alarmClockCheck: 'lucide:alarm-clock-check',
    loader: 'lucide:chef-hat',
  },

  /**
   * beta-2 have issue with tailwind
   */
  ui: {
    button: {
      variants: {
        variant: {
          gradient: 'text-neutral-950 bg-linear-to-br from-lime-300 to-green-400 hover:opacity-90 disabled:bg-none disabled:bg-(--ui-bg-elevated) disabled:text-neutral-400 aria-disabled:bg-(--ui-bg-elevated) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)',
        },
      },
    },
    tabs: {
      variants: {
        variant: {
          gradient: {
            list: 'bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]',
            trigger: 'data-[state=active]:bg-linear-to-br from-lime-300 to-green-400 data-[state=active]:text-neutral-950 flex-1 w-full',
            indicator: 'rounded-[calc(var(--ui-radius)*1.5)] shadow-xs',
          },
        },
      },
    },
  },
})
