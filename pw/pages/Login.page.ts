import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto("/")
    }

    async getHeadingText() {
        return await this.page.getByRole('heading').textContent();
    }
}