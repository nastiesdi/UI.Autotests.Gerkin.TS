import { AssertionError, strict } from "assert";
// import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { onlMainRepository } from "../objectsRepository/onlinerMain.obj";

const defaultTimeout = 6000;
const assert = require('chai').assert;
let mainPageSection = new Map<string, any>()

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class NewsPage {

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
    public async getLocatorByName(): promise.Promise<void> {
        await mainPageSection.set('common', 
        {
            activeItemInMenu: this.onlmainElements.activeItemInMainMenu,
            mainBlock: this.onlmainElements.mainBlockNewsPage,
            rubrics: this.onlmainElements.rubrics,
        })

        await mainPageSection.set('people', 
        {
            pageUrl:'https://people.onliner.by/', 
            russianWord : 'Люди',
            finderOnMainPage: this.onlmainElements.getSelector('Люди'),
        })

        await mainPageSection.set('catalog', 
        {   finderOnMainPage: this.onlmainElements.getSelector('КАТАЛОГ'),
            pageUrl:'https://catalog.onliner.by/',
            mainBlock: element(by.css('div.catalog-content'))
        })

        await mainPageSection.set('opinions', 
        {
            finderOnMainPage: this.onlmainElements.getSelector('Мнения'),
            pageUrl:'https://people.onliner.by/opinions',
            russianWord : 'Мнения',
        })

        await mainPageSection.set('avto', 
        {
            finderOnMainPage: this.onlmainElements.getSelector('Авто'),
            pageUrl:'https://auto.onliner.by/',
            russianWord : 'Авто',
        })

        await mainPageSection.set('tehnology', 
        {
            finderOnMainPage: this.onlmainElements.getSelector('Технологии'),
            pageUrl:'https://tech.onliner.by/',
            russianWord : 'Технологии',
        })

        
        await mainPageSection.set('realt', 
        {
            finderOnMainPage: this.onlmainElements.getSelector('Недвижимость'),
            pageUrl:'https://realt.onliner.by/',
            mainBlock: this.onlmainElements.mainBlockNewsPage,
            activeItemInMenu: this.onlmainElements.activeItemInMainMenu,
            russianWord : 'Недвижимость',
        })
    }

    public async goToSection(sectionName:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(mainPageSection.get(sectionName).finderOnMainPage), defaultTimeout, `${sectionName} section not loaded`);
        await mainPageSection.get(sectionName).finderOnMainPage.click();
    }

    public async rightUrl(sectionName:string): promise.Promise<void> {
        let curentUrl = await browser.getCurrentUrl();
        let expectedUrl = await mainPageSection.get(sectionName).pageUrl;
        await assert.equal(curentUrl, expectedUrl, `ER: ${expectedUrl}, AR: ${curentUrl}`);
    }
    
    public async rightItemSelected(sectionName:string): promise.Promise<void> {
        let activeItemInMenu = await mainPageSection.get('common').activeItemInMenu;
        await assert.equal(await activeItemInMenu.getText(), mainPageSection.get(sectionName).russianWord, `${await activeItemInMenu.getText()} is not equal to ${mainPageSection.get(sectionName).russianWord}`);
    }

    public async mainBlockDisplayed(sectionName:string): promise.Promise<void> {
        await assert.isTrue(await browser.wait(ExpectedConditions.visibilityOf(mainPageSection.get('common').mainBlock)), `News block is not displayed`);
    }

    public async rubricsMenuDisplayed(sectionName:string): promise.Promise<void> {
        await assert.isTrue(await browser.wait(ExpectedConditions.visibilityOf(mainPageSection.get('common').rubrics)), `Rubrics menu block is not displayed`);
    }
}
