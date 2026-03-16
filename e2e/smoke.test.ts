import { expect, test } from '@playwright/test'

test.describe('Smoke Tests', () => {
  test('homepage loads without errors', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/.+/)
    await expect(page.locator('body')).not.toContainText('maintenance', { ignoreCase: true })
  })

  test('homepage renders menu categories', async ({ page }) => {
    await page.goto('/')

    const headings = page.locator('h2')
    await expect(headings.first()).toBeVisible()
    expect(await headings.count()).toBeGreaterThanOrEqual(1)
  })

  test('category page is accessible', async ({ page }) => {
    await page.goto('/')

    // Click the first category link in navigation
    const navLink = page.locator('nav a').first()
    await navLink.click()

    await expect(page).toHaveTitle(/.+/)
    await expect(page.locator('body')).toBeVisible()
  })

  test('checkout page is accessible', async ({ page }) => {
    await page.goto('/checkout')

    await expect(page.locator('body')).toBeVisible()
  })

  test('health endpoint returns ok', async ({ request }) => {
    const response = await request.get('/api/health')

    expect(response.ok()).toBeTruthy()
    expect(await response.json()).toEqual({ ok: true })
  })

  test('menu API returns categories', async ({ request }) => {
    const response = await request.get('/api/menu')

    expect(response.ok()).toBeTruthy()

    const body = await response.json()
    expect(body.categories.length).toBeGreaterThan(0)
  })

  test('page has header and main layout', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
  })
})
