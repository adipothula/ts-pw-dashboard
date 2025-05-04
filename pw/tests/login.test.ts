import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';

test('Login page loads with correct heading', async({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const heading = await loginPage.getHeadingText();

    expect(heading).toBe('Login Page');
})