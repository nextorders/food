import { describe, expect, it } from 'vitest'
import { de } from '../../i18n/locales/de-DE'
import { el } from '../../i18n/locales/el-GR'
import { en } from '../../i18n/locales/en-US'
import { es } from '../../i18n/locales/es-ES'
import { fr } from '../../i18n/locales/fr-FR'
import { it as it_it } from '../../i18n/locales/it-IT'
import { ka } from '../../i18n/locales/ka-GE'
import { pt } from '../../i18n/locales/pt-PT'
import { ru } from '../../i18n/locales/ru-RU'
import { zh_cn } from '../../i18n/locales/zh-CN'

describe('locales', () => {
  it('ru | can be imported', () => {
    expect(ru).toBeDefined()
    expect(ru['web-app'].cart.add).toBe('Добавить')
  })

  it('en | can be imported', () => {
    expect(en).toBeDefined()
    expect(en['web-app'].cart.add).toBe('Add')
  })

  it('el | can be imported', () => {
    expect(el).toBeDefined()
    expect(el['web-app'].cart.add).toBe('Προσθήκη')
  })

  it('es | can be imported', () => {
    expect(es).toBeDefined()
    expect(es['web-app'].cart.add).toBe('Añadir')
  })

  it('fr | can be imported', () => {
    expect(fr).toBeDefined()
    expect(fr['web-app'].cart.add).toBe('Ajouter')
  })

  it('it | can be imported', () => {
    expect(it_it).toBeDefined()
    expect(it_it['web-app'].cart.add).toBe('Aggiungi')
  })

  it('de | can be imported', () => {
    expect(de).toBeDefined()
    expect(de['web-app'].cart.add).toBe('Hinzufügen')
  })

  it('ka | can be imported', () => {
    expect(ka).toBeDefined()
    expect(ka['web-app'].cart.add).toBe('დამატება')
  })

  it('pt | can be imported', () => {
    expect(pt).toBeDefined()
    expect(pt['web-app'].cart.add).toBe('Adicionar')
  })

  it('zh_cn | can be imported', () => {
    expect(zh_cn).toBeDefined()
    expect(zh_cn['web-app'].cart.add).toBe('添加')
  })
})
