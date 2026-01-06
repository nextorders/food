import type { en } from '../../i18n/locales/en-US'

// Recursive type to extract all possible keys from a nested object
// Guard: Should only return string keys
type ExtractKeys<T> = {
  [K in keyof T]: T[K] extends string
    ? K & string
    : T[K] extends object
      ? `${K & string}.${ExtractKeys<T[K]>}`
      : never;
}[keyof T]

type StringifyValues<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends object
      ? StringifyValues<T[K]>
      : T[K];
}

// The complete dictionary type with strings and nested objects
export type Dictionary = StringifyValues<typeof en>

export type DictionaryKey = ExtractKeys<Dictionary>
