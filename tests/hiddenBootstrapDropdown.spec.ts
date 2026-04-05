import {test,expect,Locator} from "@playwright/test";
test("bootstrap hidden dropdown",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // login Step
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
        
   // await page.waitForTimeout(3000)


    // click on PIM
    //await page.locator('[class="oxd-main-menu-item active"]').click();


    await page.getByText('PIM').click();
    //click on job title dropdown
    await page.locator('form i').nth(2).click();

    // capture all the option from dropdown and count it.
    const options:Locator=page.locator('div[role="listbox"]')
    const Count:number= await options.count();
    console.log("number of options in a dropdown",Count)

    //print all options
    for(let i=0;i<Count;i++){
        const text=await options.nth(i).innerText();
        console.log(text)

        // click on Automation tester
        if(text=== "Automation Tester"){
            await options.nth(i).click();
            break;
        }
    }

    

    await page.waitForTimeout(3000)
})