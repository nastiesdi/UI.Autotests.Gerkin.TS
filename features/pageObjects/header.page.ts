import { AssertionError, strict } from "assert";
// import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { headerRepository } from "../objectsRepository/header.obj";

const defaultTimeout = 6000;
const assert = require('chai').assert;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class Header {   
    //Locators      
    readonly headerElem = new headerRepository;

    // readonly mainPageSectionber = new Map<string, any>();

    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        // await browser.wait(ExpectedConditions.visibilityOf(this.onlmainElements.peopleSection), defaultTimeout, "Homepage not loaded");
    }

    public async openNewPageFromMainMenu(pageName): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        let itemSelector = await this.headerElem.getSelItemMainMenu(pageName)
        await browser.wait(ExpectedConditions.visibilityOf(itemSelector), defaultTimeout, "Homepage not loaded");
        await itemSelector.click()
    }

}