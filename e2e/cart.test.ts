import { expect, test } from '@playwright/test'

test.describe('Cart', () => {
  test('add product to cart from product page', async ({ page }) => {
    await page.goto('/')

    // Click on a product card to navigate to product detail
    const productCard = page.locator('main a').filter({ has: page.locator('img') }).first()
    await productCard.click()

    // Should be on product detail page
    await expect(page.locator('h1')).toBeVisible()

    // Click "Add to cart" button
    const addButton = page.getByRole('button', { name: /add to cart/i })
    await expect(addButton).toBeVisible({ timeout: 10_000 })
    await addButton.click()

    // Cart aside (xl viewport) should now show cart content
    const cartTitle = page.locator('aside').getByText('Cart')
    await expect(cartTitle).toBeVisible()
  })

  test('increment and decrement product quantity', async ({ page }) => {
    await page.goto('/')

    // Navigate to product and add it
    const productCard = page.locator('main a').filter({ has: page.locator('img') }).first()
    await productCard.click()
    await page.getByRole('button', { name: /add to cart/i }).click()

    // After adding, +/- buttons should replace "Add to cart"
    const plusButton = page.locator('main').getByRole('button', { name: 'Plus' })
    const minusButton = page.locator('main').getByRole('button', { name: 'Minus' })

    await expect(plusButton).toBeVisible()
    await expect(minusButton).toBeVisible()

    // Increment
    await plusButton.click()

    // Decrement twice to remove
    await minusButton.click()
    await minusButton.click()

    // "Add to cart" button should reappear
    await expect(page.getByRole('button', { name: /add to cart/i })).toBeVisible()
  })

  test('cart aside is visible on desktop', async ({ page }) => {
    await page.goto('/')

    // On xl viewport, aside is always visible
    const aside = page.locator('aside')
    await expect(aside).toBeVisible()
  })

  test('navigate to checkout from cart', async ({ page }) => {
    await page.goto('/')

    // Add a product
    const productCard = page.locator('main a').filter({ has: page.locator('img') }).first()
    await productCard.click()
    await page.getByRole('button', { name: /add to cart/i }).click()

    // Click "Okay, next" link in cart aside
    const nextButton = page.locator('aside a[href="/checkout"]')
    await expect(nextButton).toBeVisible()
    await nextButton.click()

    await page.waitForURL('**/checkout')
  })

  test('delivery method tabs are available in cart', async ({ page }) => {
    await page.goto('/')

    // Add a product
    const productCard = page.locator('main a').filter({ has: page.locator('img') }).first()
    await productCard.click()
    await page.getByRole('button', { name: /add to cart/i }).click()

    // Delivery method tabs should be visible in cart aside
    const deliveryTab = page.locator('aside').getByRole('tab', { name: /delivery/i })
    const pickupTab = page.locator('aside').getByRole('tab', { name: /pickup/i })

    await expect(deliveryTab).toBeVisible()
    await expect(pickupTab).toBeVisible()

    // Switch to pickup
    await pickupTab.click()
    await expect(pickupTab).toHaveAttribute('aria-selected', 'true')
  })
})
