//handle static table

import { test, expect, Locator } from "@playwright/test";
test("static web table", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table: Locator = page.locator('[name="BookTable"] > tbody');
    await expect(table).toBeVisible();

    //count number of rows in a table
    const rows: Locator = table.locator("tr")//(including headers)
    expect(rows).toHaveCount(7);//or

    const rowsCount: number = await rows.count()
    console.log("total number of rows: ", rowsCount);

    // find number of columns/headers

    const columns: Locator = await rows.locator("th");
    await expect(columns).toHaveCount(4);


    // read all Data from a second row
    const secondRowCell = rows.nth(2).locator("td")

    const secondRowText: string[] = await secondRowCell.allInnerTexts();
    console.log("second row Data", secondRowText);

    await expect(secondRowCell).toHaveText(['Learn Java', 'Mukesh', 'Java', '500'])


    //print second row using for of loop
    for (let text of secondRowText) {

        console.log(text);
    }

    // read all data from the table(excluding header)

    console.log("printing all table data.........")

    const allRowData = await rows.all()

    for (let row1 of allRowData.slice(1)) {
        const cols = await row1.locator("td").allInnerTexts();
        //console.log(cols.join ("\t")),
        console.log(cols)
    }


    // print book name where author name is mukesh

    const mukeshBook: string[] = [];
    for (let row2 of allRowData.slice(1)) {
        const cell = await row2.locator("td").allInnerTexts();
        const author = cell[1];
        const book = cell[0]

        if (author === "Amit") {
            console.log(`${author}:\t ${book}`)
            mukeshBook.push(book);
        }


    }

    expect(mukeshBook).toHaveLength(2);


    // calculate total price of all book

    let totolPrice:number=0;

    for(let roww of allRowData.slice(1)){
        const cell = await roww.locator("td").allInnerTexts()
        const price=cell[3];
        totolPrice+= parseInt(price);

    }
    console.log("total price of all books:",totolPrice);
    expect(totolPrice).toBe(7100);


})