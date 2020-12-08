import { AssertionError, strict } from "assert";
// import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { headerRepository } from "../objectsRepository/header.obj";
import { Avtobaraholka } from "../pageObjects/avtodaraholka.page"
import { Houses } from "../pageObjects/houses.page"
import commonSteps = require("../stepDefinitions/common.steps");

const defaultTimeout = 6000;
const assert = require('chai').assert;

let allPage = new Map<string, any>()
let avtobaraholkaPage: Avtobaraholka = new Avtobaraholka();
let housesPage: Houses = new Houses();
export class Header {   
    
    readonly headerElem = new headerRepository;

    public async Loaded(): promise.Promise<void> {
        avtobaraholkaPage.getPage();
        housesPage.getPage();
        allPage.set('Автобарахолка', avtobaraholkaPage);
        allPage.set('Дома и квартиры', housesPage);
        allPage.set('Услуги', {pageUrl:'https://s.onliner.by/tasks'});
        allPage.set('Барахолка', {pageUrl:'https://baraholka.onliner.by/'});
        allPage.set('Форум', {pageUrl:'https://forum.onliner.by/'});
    }

    public async openNewPageFromMainMenu(pageName): promise.Promise<void> {
        let itemSelector = await this.headerElem.getSelItemMainMenu(pageName);
        await browser.wait(ExpectedConditions.visibilityOf(itemSelector), defaultTimeout, "Homepage not loaded");
        await itemSelector.click()
    }

    public async rightUrlDisplayed(pageName): promise.Promise<void> {
        let curentUrl = await browser.getCurrentUrl();
        let expectedUrl = await allPage.get(pageName).pageUrl;
        await assert.equal(curentUrl, expectedUrl, `ER: ${expectedUrl}, AR: ${curentUrl}`);
    }

    public async rightTabIsHighlated(pageName): promise.Promise<void> {
        await assert.include(await this.headerElem.curentTab.getText(), pageName, `AR:${ this.headerElem.curentTab.getText()}, ER: ${pageName}`);
    }
    
    public async enterInSearchField(productName): promise.Promise<void> {
        await this.headerElem.searchField.sendKeys(productName);
    }

    public async fastSearchModalDisplayed(): promise.Promise<void> {
        await assert.isTrue(await browser.wait(ExpectedConditions.visibilityOf(this.headerElem.fastSearchModal)), `News block is not displayed`);
    }

    public async rightItemAreDisplayed(brendName:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.headerElem.modalIframe), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(this.headerElem.modalIframe.getWebElement());
        let searchedElement =  await this.headerElem.allFoundItems.getText();
        let ms= await String(searchedElement).split("от ");
        for (let i of ms.slice(1)) {
            await assert.include(i.toUpperCase(), brendName.toUpperCase(), `${brendName} is not in ${i}`);
        }
    }
}