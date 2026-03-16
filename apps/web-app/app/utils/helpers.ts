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
