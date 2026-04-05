import { test, expect, Locator } from "@playwright/test";

// duplicate dropdown
test("duplicate Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const options:Locator= page.locator('#colors>option');
    const optionText:string[]=(await options.allTextContents())
        .map(text=>text.trim())

    const myset=new Set <string>();
    const  duplicates:string[]=[]

    for(let opt of optionText){
        if(myset.has(opt)){
            duplicates.push(opt)
        }
        else{
            myset.add(opt)
        }
    }
    console.log('duplicate option are:',duplicates);

    if(duplicates.length>0){
        console.log('duplicate option found:',duplicates)
    }
    else{
        console.log('No duplicate found')
    }
    expect(duplicates.length).toBe(2);



})


// Autosuggest Dropdown

test("Autosuggest dropdown",async ({page})=>{
    await page.goto("https://www.flipkart.com/");
   // await page.locator("input[name='q']").fill('smart', { timeout: 10000 });
   const input:Locator= page.getByPlaceholder('Search for Products, Brands and More').first();
   await input.fill('smart');
    await page.waitForTimeout(3000);

    //get all suggested options
    const options:Locator=page.locator('ul>li')
    const optionCount=await options.count()
    console.log('suggested options count',optionCount);

    //print the all suggested option in the console
    for(let i=0;i<optionCount;i++){
        console.log(await options.nth(i).innerText())
    }

    //print perticular option based on index
    console.log("5th position", await options.nth(5).innerText())

    // //select smartphone option
    // for(let i=0;i<optionCount;i++){
    //     const text=await options.nth(i).innerText();

    //     if(text ==='smartphone'){
    //         options.nth(i).click();
    //         break;
    //     }
    // }
    await page.waitForTimeout(3000)

})