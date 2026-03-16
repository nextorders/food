import { expect, test } from '@playwright/test'

async function addProductToCart(page: import('@playwright/test').Page) {
  await page.goto('/')
  const productCard = page.locator('main a').filter({ has: page.locator('img') }).first()
  await productCard.click()
  await page.getByRole('button', { name: /add to cart/i }).click()
  // Wait for cart aside to show the item
  await expect(page.locator('aside').getByText('Cart')).toBeVisible()
}

test.describe('Checkout', () => {
  test('checkout page has contact form', async ({ page }) => {
    await addProductToCart(page)
    await page.goto('/checkout')

    // Contact form with phone input
    await expect(page.locator('input[type="tel"]')).toBeVisible()
  })

  test('submit button is disabled without required fields', async ({ page }) => {
    await addProductToCart(page)
    await page.goto('/checkout')

    // Create order button should be disabled when fields are empty
    const submitButton = page.getByRole('button', { name: /create order/i })
    await expect(submitButton).toBeDisabled()
  })

  test('checkout shows info messages', async ({ page }) => {
    await addProductToCart(page)
    await page.goto('/checkout')

    // Should show some info/warning about filling fields
    const infoMessage = page.locator('main').getByText(/fill in|required|fields/i)
    await expect(infoMessage).toBeVisible()
  })
})
