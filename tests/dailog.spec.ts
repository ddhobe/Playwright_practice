// handle dialog(alert, confirm,prompt)

// A] alerts

import{test,expect,Locator} from "@playwright/test";
test("simple dialog",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // registered the dialog handler
    page.on('dialog',(dialog)=>{
    console.log("Dialog type is :", dialog.type());

    expect(dialog.type()).toContain('alert');
     console.log("dialog text is :", dialog.message());

     expect(dialog.message()).toContain("I am an alert box!");
     dialog.accept()
    })

    await page.locator('#alertBtn').click();
    await page.waitForTimeout(3000)
})


// B] confirm Dialog
// confirmation dialog with text and ok and cancel button
test.only('confirmation Dialog',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // registered a dialog handler

    page.on('dialog',(dialog)=>{
        console.log("dialog type is:", dialog.type());
        expect(dialog.type()).toContain('confirm');

        console.log("Dialog text:",dialog.message());
        expect(dialog.message()).toContain("Press a button");
        dialog.accept();
        //dialog.dismiss()//to dismiss the dialog

    })
    await page.locator("#confirmBtn").click()

    const text:Locator=page.locator("#demo");

    //expect(text.innerText()).toContain("You Pressed ok!");

    await page.waitForTimeout(3000);
})
