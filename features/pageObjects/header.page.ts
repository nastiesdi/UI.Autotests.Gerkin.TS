import { AssertionError, strict } from "assert";
//import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { headerRepository } from "../objectsRepository/header.obj";

const defaultTimeout = 60000;
const assert = require('chai').assert;


//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class Header {

    Locators      
    readonly heaserElements = new headerRepository;

    public async IsCountItemsInCartRight(): promise.Promise<void> {
        console.log('IsCountItemsInCartRight')
        await browser.wait(ExpectedConditions.presenceOf(this.heaserElements.countItemInCart), defaultTimeout, "Iframe not loaded");
        let itemName = await this.heaserElements.countItemInCart.getText();
        console.log(`item count - ${itemName}`)
        await assert.equal(itemName, 1, `expected: 1, actual: ${itemName}`);
    }

}