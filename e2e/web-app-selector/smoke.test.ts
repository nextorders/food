import { expect, test } from '@playwright/test'

test.describe('Selector Smoke Tests', () => {
  test('app loads and shows selector modal', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/.+/)

    // Modal with channel list should be visible
    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })
  })

  test('selector displays channel buttons', async ({ page }) => {
    await page.goto('/')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    // At least one channel button should be present
    const buttons = modal.getByRole('button').filter({ hasNot: page.locator('[data-color-mode]') })
    await expect(buttons.first()).toBeVisible()
  })

  test('health endpoint returns ok', async ({ request }) => {
    const response = await request.get('/api/health')

    expect(response.ok()).toBeTruthy()
    expect(await response.json()).toEqual({ ok: true })
  })
})
