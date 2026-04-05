import { test, expect, Locator } from "@playwright/test";

//single select Dropdown

test("single select dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // select option from dropdown
    await page.locator('#country').selectOption("India");//by visible text;

    await page.locator('#country').selectOption({ value: "uk" });//by using value attribute
    await page.locator('#country').selectOption({ label: 'India' });//by using label
    await page.locator('#country').selectOption({ index: 9 });


    //check number of options in the dropdown (count)
    const dropdownOption: Locator = page.locator('#country>option');
    await expect(dropdownOption).toHaveCount(10);

    //check an option present in a dropdown
    const options: string[] = await dropdownOption.allTextContents();
    const optionText = await options.map(text => text.trim());
    console.log(optionText);
    expect(optionText).toContain('Japan')

    //print all option in the dropdown
    for (let option of optionText) {
        console.log(option)
    }
    await page.waitForTimeout(3000);

})


// multiselect dropdown
test("multiselect dropdown", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");


    // using visible text
   // await page.locator('#colors').selectOption(['Red','Blue','Green']);

    // using value attribute
    //await page.locator('#colors').selectOption(['red','blue','green']);

    // using label
    //await page.locator('#colors').selectOption([{label:'Red'},{label:'Green'},{label:'White'}]);

    // using index
    await page.locator('#colors').selectOption([{index:0},{index:3},{index:6}]);

    await page.waitForTimeout(3000);


    // check number of option in a dropdown
    const dropdownOption:Locator=page.locator('#colors>option')
    await expect(dropdownOption).toHaveCount(7);

    //check an a option present in a dropdown
    const optionText:string[]=(await dropdownOption.allTextContents())
    .map(text=>text.trim())
      expect(optionText).toContain('Green');

      // printing all option of dropdown
      for(let i of optionText){
        console.log(i)
      }
      await page.waitForTimeout(3000);
})


// sorted dropdown

test.only("sorted dropdown", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const   options:Locator= page.locator("#animals > option");
    const optionText:string[]= (await options.allTextContents()).map(text=>text.trim())

    const originalList:string[]=[...optionText];
    const sortedlist:string[]=[...originalList].sort();

    console.log(originalList);
    console.log(sortedlist);
    expect(originalList).toEqual(sortedlist);

})



