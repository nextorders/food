import { expect, test } from '@playwright/test'

test.describe('Smoke Tests', () => {
  test('homepage loads and renders menu', async ({ page }) => {
    await page.goto('/')

    // Page should have a title
    await expect(page).toHaveTitle(/.+/)

    // Main content should be visible
    await expect(page.locator('body')).toBeVisible()

    // Should not show maintenance message (channel is configured)
    await expect(page.locator('body')).not.toContainText('maintenance', { ignoreCase: true })
  })

  test('health endpoint returns ok', async ({ request }) => {
    const response = await request.get('/api/health')

    expect(response.ok()).toBeTruthy()

    const body = await response.json()
    expect(body.ok).toBe(true)
  })

  test('checkout page is accessible', async ({ page }) => {
    await page.goto('/checkout')

    await expect(page.locator('body')).toBeVisible()
  })
})
