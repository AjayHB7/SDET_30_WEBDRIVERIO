describe('assignment', () => {
    it('captureScreenShot', async () => {
        await browser.url("https://www.flipkart.com/")
        await $("//button[text()='✕']").waitForClickable()
        await $("//button[text()='✕']").click()
        await $("//input[@name='q']").setValue("camera")
        await browser.keys("Enter")
        let parentWindow = await browser.getWindowHandle()
        await $("(//div[@class='_13oc-S'])[position() = 1]").click()
        let windowHandles = await browser.getWindowHandles()

        for (const window of windowHandles) {
            await browser.switchToWindow(window)
            if (!(window == parentWindow)) {
                break;
            }
        }

        let images = await $$("//div[@class = '_2E1FGS']");
        

        for (let index = 0; index < images.length; index++) {
            const element = images[index];
            await element.waitForDisplayed()
            await element.saveScreenshot("./screenShot_"+index+".png")
            
        }
        // for (const image of images) {
        //     await image.saveScreenshot("./screenshot"+)
        // }
        await browser.debug()
    });
});