import { expect, test } from '@playwright/test'

test.describe('Selector Localization', () => {
  test('renders in Russian locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'ru-RU' })
    const page = await context.newPage()

    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('lang', 'ru')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    await context.close()
  })

  test('renders in English locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'en-US' })
    const page = await context.newPage()

    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('lang', 'en')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    await context.close()
  })

  test('color mode toggle is present', async ({ page }) => {
    await page.goto('/')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    // Footer should have color mode button
    const colorModeButton = modal.locator('button').filter({ has: page.locator('span.iconify') }).first()
    await expect(colorModeButton).toBeVisible()
  })
})
