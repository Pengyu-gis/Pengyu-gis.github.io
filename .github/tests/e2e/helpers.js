const { test } = require('@playwright/test');

/**
 * Helper to open mobile menu - forces menu visibility for mobile tests
 */
async function openMobileMenu(page) {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(300);
  
  const menu = page.locator('nav ul');
  await menu.evaluate(el => {
    el.classList.remove('hide');
    el.style.opacity = '1';
    el.style.fontSize = '';
  });
  
  await page.waitForTimeout(200);
}

/**
 * Helper function to check if theme toggle is available on the page.
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @returns {Promise<boolean>} True if theme toggle exists
 */
async function hasThemeToggle(page) {
  const themeToggle = page.locator('#theme-toggle');
  return await themeToggle.count() > 0;
}

/**
 * Helper function to check if gallery has images and skip test if not
 */
async function checkGalleryHasImages(page) {
  const images = page.locator('.gallery img, .gallery-item img, img[class*="gallery"]');
  const count = await images.count();
  if (count === 0) {
    test.skip(true, 'Gallery has no images configured');
  }
  return { images, count };
}

module.exports = {
  openMobileMenu,
  hasThemeToggle,
  checkGalleryHasImages,
};

