import { expect, Locator, Page } from '@playwright/test'

export class CheckerboardPage {
    readonly url = 'https://www.gamesforthebrain.com/game/checkers';
    readonly page: Page;
    readonly startGamePlainText: Locator;
    readonly makeAMovePlainText: Locator;
    readonly restartBtn: Locator;
    readonly rulesBtn: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.startGamePlainText = this.page.locator('#message', { hasText: 'Select an orange piece to move.' });
        this.makeAMovePlainText = this.page.locator('#message', { hasText: 'Make a move.'});
        this.restartBtn = this.page.locator('[href="./"]');
        this.rulesBtn = this.page.locator('[href="https://en.wikipedia.org/wiki/English_draughts#Starting_position"]');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    getCheckerboardSquare(column: string, row: string) {
        return this.page.locator(`[name="space${column}${row}"]`);
    }
}