import { test, expect } from '@playwright/test';
test.use({
  ignoreHTTPSErrors: true,
});


test('has title', async ({ page }) => {
  await page.goto(process.env.NEXT_PUBLIC_HOSTNAME || 'https://dev.clipyfy.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Blinkadz/);
});


