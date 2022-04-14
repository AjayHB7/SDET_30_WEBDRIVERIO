

describe('checkboxHandle', () => {
    it('selectingMultyCheckbox', async () => {
        await $("//a[text() = 'Contacts']").click()
        await browser.pause(2000)
        let elements = await $$("//input[@type = 'checkbox' and @name = 'selected_id']")

        // elements.forEach(async (element)=>{
        //     await element.waitForDisplayed()
        //     await browser.pause(1000)
        //     let name = await element.getAttribute("name")
        //     console.log("=================name======================"+name);
        //     await element.click()
        // })

        for (const element of elements) {
            await element.click()
            await browser.pause(1000)
        }
        console.log("=================completed======================");
        
        
    });
});