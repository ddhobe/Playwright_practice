import { test, expect, Locator } from "@playwright/test"

test("playwright actions-input Box", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const textBox: Locator = page.locator('#name')
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    await textBox.fill("John Kenedy")


    // validate the value using inputvalue() method.
    const enteredValue: string = await textBox.inputValue()
    console.log("textBox input value is:", enteredValue);
    expect(enteredValue).toBe("John Kenedy")
})


//radio buttons

test("Radio buttons", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio: Locator = page.locator('#male');
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

    //select radio button
    await maleRadio.check();
    // validation
    await expect(maleRadio).toBeChecked();

})


// checkbox

test("playwright Action-check box", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select specific checkBox (sunday) by getByLabel method and assert it.

    const sundayCheckBox: Locator = page.getByLabel('Sunday');
    await sundayCheckBox.check();
    await expect(sundayCheckBox).toBeChecked();

    await page.waitForTimeout(5000);


    // select all check boxes and assert all

    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const checkboxes: Locator[] = days.map(day => page.getByLabel(day))
    expect(checkboxes.length).toBe(7);

    // check all checkboxes and assert each.
    for (let checkBox of checkboxes) {
        await checkBox.check();
        await expect(checkBox).toBeChecked();
    }
    await page.waitForTimeout(3000);


    // uncheck last 3 checkboxes

    for (let checkBox of checkboxes.slice(-3)) {
        await checkBox.uncheck();
        await expect(checkBox).not.toBeChecked();
    }

    await page.waitForTimeout(5000);

    //toggle checkboxes

    for (let checkBox of checkboxes) {
        if (await checkBox.isChecked()) {
            await checkBox.uncheck();
            await expect(checkBox).not.toBeChecked();
        }

        else {
            await checkBox.check();
            await expect(checkBox).toBeChecked();
        }
    }
    await page.waitForTimeout(2000);


    // randomly check checkboxes by index(1,2,3);

    const indexes=[1,2,5];
    for(let i of indexes){
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
    await page.waitForTimeout(3000);


    // select the checkboxes based on the label.
    const weekName:string="Friday";
   for(const day of days){
    if(day.toLowerCase()=== weekName.toLowerCase()){
        const checkbox=page.getByLabel(day);
        await checkbox.check();
        await expect(checkbox).toBeChecked()
    }
   }

   await page.waitForTimeout(3000);


})