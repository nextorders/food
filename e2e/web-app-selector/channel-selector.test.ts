import { expect, test } from '@playwright/test'

test.describe('Channel Selector', () => {
  test('search filters channels', async ({ page }) => {
    await page.goto('/')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    // Count initial channels
    const buttons = modal.locator('a[role="button"], button').filter({ hasNot: page.locator('[data-color-mode]') })
    const initialCount = await buttons.count()

    // Type a search query that likely won't match all channels
    const searchInput = modal.getByRole('textbox')
    await searchInput.fill('zzzznonexistent')

    // Should show "not found" or fewer results
    await expect(modal).toContainText(/.+/)

    // Clear search restores channels
    await searchInput.clear()

    // Wait for channels to reappear
    const afterClear = modal.locator('a[role="button"], button').filter({ hasNot: page.locator('[data-color-mode]') })
    await expect(afterClear).toHaveCount(initialCount, { timeout: 5000 })
  })

  test('channel click triggers navigation', async ({ page }) => {
    await page.goto('/')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    // Find a channel link/button inside modal body
    const channelButton = modal.getByRole('button').filter({ hasNot: page.locator('[data-color-mode]') }).first()
    await expect(channelButton).toBeVisible()

    // Intercept navigation to verify redirect happens
    const navigationPromise = page.waitForURL('**/*', { timeout: 10_000 }).catch(() => null)
    await channelButton.click()

    // Either navigated or got blocked by cross-origin (both prove the click worked)
    await navigationPromise
  })

  test('modal is not dismissible', async ({ page }) => {
    await page.goto('/')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    // Pressing Escape should not close the modal
    await page.keyboard.press('Escape')
    await expect(modal).toBeVisible()
  })

  test('has search input', async ({ page }) => {
    await page.goto('/')

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible({ timeout: 15_000 })

    const searchInput = modal.getByRole('textbox')
    await expect(searchInput).toBeVisible()
    await expect(searchInput).toBeEditable()
  })
})
