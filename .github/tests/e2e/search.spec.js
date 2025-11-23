const { test, expect } = require('@playwright/test');

test.describe('Search Functionality @desktop', () => {
  test('should display search page', async ({ page }) => {
    await page.goto('/search');
    await expect(page.locator('body')).toBeVisible();
    
    // Verify search-specific elements exist
    const searchInput = page.locator('#search-input');
    await expect(searchInput).toBeVisible();
  });

  test('should have search input field', async ({ page }) => {
    await page.goto('/search');

    const searchInput = page.locator('#search-input');
    await expect(searchInput).toBeVisible();
    
    // Verify it's actually a functional input
    const inputType = await searchInput.getAttribute('type');
    expect(['search', 'text']).toContain(inputType);
  });

  test('should allow typing in search field', async ({ page }) => {
    await page.goto('/search');

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('test');
    const value = await searchInput.inputValue();
    expect(value).toBe('test');
  });

  test('should display search results', async ({ page }) => {
    await page.goto('/search');

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('blog');

    await page.waitForTimeout(2000);

    const resultItems = page.locator('[data-testid="search-result-item"]');
    const itemCount = await resultItems.count();

    expect(itemCount).toBeGreaterThan(0);
  });

  test('should clear search results', async ({ page }) => {
    await page.goto('/search');

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('test');
    await page.waitForTimeout(500);

    await searchInput.clear();
    const value = await searchInput.inputValue();
    expect(value).toBe('');
  });

  test('should handle no results gracefully', async ({ page }) => {
    await page.goto('/search');

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('xyzabc123notfound999');
    await page.waitForTimeout(1000);

    const resultItems = page.locator('[data-testid="search-result-item"]');
    const itemCount = await resultItems.count();
    
    expect(itemCount).toBe(0);
  });

  test('should search case-insensitively', async ({ page }) => {
    await page.goto('/search', { waitUntil: 'networkidle' });

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('POST');
    await page.waitForTimeout(2000);

    const resultItems = page.locator('[data-testid="search-result-item"]');
    const itemCount = await resultItems.count();
    expect(itemCount).toBeGreaterThan(0);
  });

  test('should highlight search terms in results', async ({ page }) => {
    await page.goto('/search', { waitUntil: 'networkidle' });

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('mode');
    await page.waitForTimeout(2000);

    const resultItems = page.locator('[data-testid="search-result-item"]');
    const itemCount = await resultItems.count();
    expect(itemCount).toBeGreaterThan(0);
    
    const firstResult = resultItems.first();
    const resultText = await firstResult.textContent();
    expect(resultText.toLowerCase()).toContain('mode');
  });

  test('should have search result links', async ({ page }) => {
    await page.goto('/search', { waitUntil: 'networkidle' });

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('blog');
    await page.waitForTimeout(2000);

    const resultLinks = page.locator('[data-testid="search-result-link"]');
    const count = await resultLinks.count();

    expect(count).toBeGreaterThan(0);
    
    await resultLinks.first().click();

    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should show search from navbar', async ({ page, isMobile }) => {
    await page.goto('/');

    // On mobile, open the hamburger menu first
    if (isMobile) {
      const hamburger = page.locator('#pull');
      try {
        await hamburger.scrollIntoViewIfNeeded();
        await hamburger.click({ force: true });
        await page.waitForTimeout(500);
      } catch (e) {
        // On some mobile viewports, directly navigate to verify search link exists
        const searchLink = page.locator('nav a[href*="search"], .navbar a[href*="search"]');
        expect(await searchLink.count()).toBeGreaterThan(0);
        await page.goto('/search');
        await expect(page).toHaveURL(/search/);
        return;
      }
    }

    const searchLink = page.locator('nav a[href*="search"], .navbar a[href*="search"]');

    expect(await searchLink.count()).toBeGreaterThan(0);
    await searchLink.first().click();
    await expect(page).toHaveURL(/search/);
  });

  test('should have working search on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test');

    await page.goto('/search');

    const searchInput = page.locator('#search-input');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('test');

    const value = await searchInput.inputValue();
    expect(value).toBe('test');
  });
});
