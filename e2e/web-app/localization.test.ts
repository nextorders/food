import { expect, test } from '@playwright/test'

test.describe('Localization', () => {
  test('content renders in Russian locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'ru-RU' })
    const page = await context.newPage()

    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('lang', 'ru')
    await expect(page).toHaveTitle(/Москв/)

    await context.close()
  })

  test('content renders in English locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'en-US' })
    const page = await context.newPage()

    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page).toHaveTitle(/Moscow/)

    await context.close()
  })

  test('content renders in Spanish locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'es-ES' })
    const page = await context.newPage()

    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('lang', 'es')

    await context.close()
  })

  test('switching locale changes content', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'ru-RU' })
    const page = await context.newPage()

    await page.goto('/')
    const ruTitle = await page.title()

    await context.close()

    const context2 = await browser.newContext({ locale: 'en-US' })
    const page2 = await context2.newPage()

    await page2.goto('/')
    const enTitle = await page2.title()

    await context2.close()

    // Titles should differ between locales
    expect(ruTitle).not.toBe(enTitle)
  })
})
