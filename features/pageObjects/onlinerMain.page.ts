import { AssertionError, strict } from "assert";
// import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { onlMainRepository } from "../objectsRepository/onlinerMain.obj";

const defaultTimeout = 60000;
const assert = require('chai').assert;
let mainPageSection = new Map<string, any>()

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class OnlinerMainPage {

    //Locators      
    readonly onlmainElements = new onlMainRepository;

    // readonly mainPageSectionber = new Map<string, any>();

    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        await browser.wait(ExpectedConditions.visibilityOf(this.onlmainElements.peopleSection), defaultTimeout, "Homepage not loaded");
    }

    public async OpenPage(url:string): promise.Promise<void> {
        await browser.navigate().to(url);
    }

    public async goToSection(sectionName:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(mainPageSection.get(sectionName).finderOnMainPage), defaultTimeout, `${sectionName} section not loaded`);
        await mainPageSection.get(sectionName).finderOnMainPage.click()
    }

}
