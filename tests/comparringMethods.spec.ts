//comparring Methods

import { test, expect, Locator } from "@playwright/test";
test("comparring methods", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    const product: Locator = page.locator(".product-title") // 6 [h2]

    // innerText() Method
    console.log(await product.nth(1).innerText())//14.1-inch Laptop

    // textContents()
    console.log(await product.nth(1).textContent());//            14.1-inch Laptop     (whitespaces)


    const count: number = await product.count();
    console.log("number of products", count);//number of products 6

    // if we need remove the whitespaces after textContent() mtd 
    // so we need to use a trim() method.

    const productName: string | null = await product.nth(2).textContent();
    console.log("text after trimmed", productName?.trim());



    //allInnerTexts() and allTextContents()

    const productName1:string[]=await product.allInnerTexts();
    console.log('products name captured using allInnerText():',productName1);

    const productName2:string[]=await product.allTextContents();
    console.log('products names after using allTextContents():',productName2);
   
    // trimmed the unwanted elements
    
    const trimmedText=await productName2.map(text=>text.trim());
    console.log('trimmed text: ',trimmedText);



    //all() convert Locator----->Locator[];

    const productLocators:Locator[]=await product.all();
    console.log("all product locators: ",productLocators);

    // to extract single text into array
    console.log(await productLocators[2].innerText());


    // extract all values from array using for of loop
    for(let prLOC of productLocators){
        console.log("all text using innerText(): ",await prLOC.innerText())
    }

    // using for in loop

    for (let i in productLocators){
        console.log("text using for in loop: ",await productLocators[i].innerText())
    }




})