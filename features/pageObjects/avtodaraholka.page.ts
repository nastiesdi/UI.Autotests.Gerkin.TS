import { AssertionError, strict } from "assert";
// import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { catalogSelectors } from "../objectsRepository/catalog.obj";

const defaultTimeout = 6000;
const assert = require('chai').assert;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class Avtobaraholka {   
    private _pageUrl:string;
    get pageUrl():string {
        return this._pageUrl;
    }

    readonly catalogElem = new catalogSelectors;

    public async getPage(): promise.Promise<void> {
        this._pageUrl = 'https://ab.onliner.by/';
    }


    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        // await browser.wait(ExpectedConditions.visibilityOf(this.onlmainElements.peopleSection), defaultTimeout, "Homepage not loaded");
    }
}