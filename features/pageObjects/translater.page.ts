import { AssertionError, strict } from "assert";
//import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { translaterRep } from "../objectsRepository/translater.obj";

const defaultTimeout = 60000;
const assert = require('chai').assert;


//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class Translator {
      
    readonly translaterElements = new translaterRep;

    public async OpenAllApps(): promise.Promise<void> {
        console.log('OpenAllApps')
        await browser.wait(ExpectedConditions.presenceOf(this.translaterElements.allApps), defaultTimeout, "Iframe not loaded");
        await this.translaterElements.allApps.click();
    }

    public async OpenGoogleCalendar(): promise.Promise<void> {
        console.log('OpenGoogleCom')
        await browser.wait(ExpectedConditions.presenceOf(this.translaterElements.iframe), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(this.translaterElements.iframe.getWebElement())
        let searchedElement = element(by.css('li.j1ei8c a[href*="www.google.com"]'))
        searchedElement.click()
    }

    public async LoginFormDisplayed(): promise.Promise<void> {
        console.log('LoginFormDisplayed')
        let all_page = await browser.getAllWindowHandles()
        await browser.switchTo().window(all_page[1]);
        let url = await browser.getTitle()
        await assert.include(url.toLowerCase(), 'google календарь', `google календарь is not in ${url}`);
    }
}