import { test, expect } from '@playwright/test';
import { CheckerboardPage } from "../pages/checkerboard.page";

test('Checkerboard - Move 5 pieces', async ({ page }) => {
    const homepage = new CheckerboardPage(page);

    await test.step('Navigate to checkerboard game page', async () => {
        await homepage.goto();
        await expect(homepage.startGamePlainText).toBeVisible();
    });

    await test.step('Move first piece', async () => {
        await homepage.getCheckerboardSquare("6", "2").click();
        await homepage.getCheckerboardSquare("5", "3").click();
        await homepage.page.waitForTimeout(2_000);
    });

    await test.step('Move second piece', async () => {
        await expect(homepage.makeAMovePlainText).toBeVisible();
        await homepage.getCheckerboardSquare("2", "2").click();
        await homepage.getCheckerboardSquare("3", "3").click();
        await homepage.page.waitForTimeout(2_000);
    });

    await test.step('Move third piece and capture blue piece', async () => {
        await expect(homepage.makeAMovePlainText).toBeVisible();
        await homepage.getCheckerboardSquare("0", "2").click();
        await homepage.getCheckerboardSquare("2", "4").click();
        await homepage.page.waitForTimeout(2_000);
    });

    await test.step('Move fourth piece', async () => {
        await expect(homepage.makeAMovePlainText).toBeVisible();
        await homepage.getCheckerboardSquare("1", "1").click();
        await homepage.getCheckerboardSquare("0", "2").click();
        await homepage.page.waitForTimeout(2_000);
    });

    await test.step('Move fifth piece and capture blue piece', async () => {
        await expect(homepage.makeAMovePlainText).toBeVisible();
        await homepage.getCheckerboardSquare("3", "1").click();
        await homepage.getCheckerboardSquare("1", "3").click();
        await homepage.page.waitForTimeout(2_000);
    });

    await test.step('Restart game', async () => {
        await expect(homepage.makeAMovePlainText).toBeVisible();
        await homepage.restartBtn.click();
        await expect(homepage.startGamePlainText).toBeVisible();
    });
})