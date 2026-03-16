import { expect, test } from '@playwright/test'

test.describe('Resilience', () => {
  test('direct navigation to category slug works', async ({ page }) => {
    const response = await page.goto('/burgers')

    expect(response?.status()).toBeLessThan(500)
    await expect(page.locator('body')).toBeVisible()
  })

  test('non-existent page does not crash server', async ({ page }) => {
    const response = await page.goto('/this-does-not-exist-at-all')

    expect(response?.status()).toBeDefined()
    await expect(page.locator('body')).toBeVisible()
  })

  test('API endpoints respond correctly', async ({ request }) => {
    const optionsResponse = await request.get('/api/options')
    expect(optionsResponse.ok()).toBeTruthy()

    const channelResponse = await request.get('/api/channel/list')
    expect(channelResponse.ok()).toBeTruthy()

    const menuResponse = await request.get('/api/menu')
    expect(menuResponse.ok()).toBeTruthy()
  })

  test('channel time slots API responds', async ({ request }) => {
    const response = await request.get('/api/channel/time-slots')
    expect(response.ok()).toBeTruthy()

    const body = await response.json()
    expect(Array.isArray(body)).toBeTruthy()
  })

  test('page works after browser back navigation', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('main')).toBeVisible()

    // Navigate to a category
    const categoryLink = page.locator('nav a[href^="/"]').first()
    await categoryLink.click()
    await expect(page.locator('h1')).toBeVisible()

    // Go back
    await page.goBack()

    // Homepage should still work
    await expect(page.locator('main')).toBeVisible()
  })
})
