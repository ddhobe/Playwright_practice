import{test,expect,Locator} from "@playwright/test"

test("playwright actions-input Box",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const textBox:Locator= page.locator('#name')
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    await textBox.fill ("John Kenedy")


    // validate the value using inputvalue() method.
    const enteredValue:string= await textBox.inputValue()
    console.log("textBox input value is:", enteredValue);
     expect(enteredValue).toBe("John Kenedy")
})


//radio buttons

test("Radio buttons",async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio:Locator= page.locator('#male');
    await expect(maleRadio).toBeVisible();
    await expect (maleRadio).toBeEnabled();

    //select radio button
  await maleRadio.check();
  // validation
  await expect(maleRadio).toBeChecked();

})


