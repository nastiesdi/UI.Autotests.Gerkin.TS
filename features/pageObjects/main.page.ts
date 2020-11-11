import { AssertionError, strict } from "assert";
// import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { onetehRepository } from "../objectsRepository/mainPage.obj";

const defaultTimeout = 60000;
const assert = require('chai').assert;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class OnetehPage {

    //Locators      
    readonly onetehElements = new onetehRepository;

    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        await browser.wait(ExpectedConditions.visibilityOf(this.onetehElements.sarchField), defaultTimeout, "Homepage not loaded");
    }

    public async SearchOnMainPage(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.onetehElements.sarchField), defaultTimeout, "Fast Search not visible");
        await this.onetehElements.sarchField.sendKeys(name);
    }

    public async NothingFounded(name:string): promise.Promise<void> {
        //Wait till element is present in DOM, but not necessary  visible
        console.log('Nothing founded function')
        await browser.wait(ExpectedConditions.presenceOf(this.onetehElements.nothingFoundedText), defaultTimeout, "Iframe not loaded");
        let textElement = await this.onetehElements.nothingFoundedText.getText();
        await assert.equal(textElement, name, `${textElement} is not equal with wwww`);
    }

    public async FindItem(name:string): promise.Promise<void> {
        //Wait till element is present in DOM, but not necessary  visible
        console.log('Find item function')
        await browser.wait(ExpectedConditions.visibilityOf(this.onetehElements.productName), defaultTimeout, "Iframe not loaded");
        let itemName = await this.onetehElements.productName.getText();
        await assert.include(itemName.toUpperCase, name.toUpperCase, `${name} is not in ${itemName}`);
        await ExpectedConditions.presenceOf(this.onetehElements.closeSearchButton);
    }

    public async CloseSearchButtonDisplayed(): promise.Promise<void> {
        //Wait till element is present in DOM, but not necessary  visible
        console.log('CloseSearchButtonDisplayed function')
        await ExpectedConditions.presenceOf(this.onetehElements.closeSearchButton);
    }

    public async OpenDropdownMenu(): promise.Promise<void> {
        //Wait till element is present in DOM, but not necessary  visible
        console.log('OpenDropdownMenu function')
        await browser.wait(ExpectedConditions.visibilityOf(this.onetehElements.forKithenButton), defaultTimeout, "Iframe not loaded");
        await browser.actions().mouseMove(this.onetehElements.forKithenButton).perform();
        await browser.sleep(5000);
    }

    public async goToSectionItems(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.onetehElements.SectionItems), defaultTimeout, "Iframe not loaded");
        await browser.actions().click(this.onetehElements.SectionItems).perform();
    }

    public async goToSectionVannaItems(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.onetehElements.SectionPlatesItems), defaultTimeout, "Iframe not loaded");
        await browser.actions().click(this.onetehElements.SectionPlatesItems).perform();
    }
    
    public async isItemSelected(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.onetehElements.SectionItems), defaultTimeout, "Iframe not loaded");
        await browser.actions().click(this.onetehElements.SectionItems).perform();
    }
}
