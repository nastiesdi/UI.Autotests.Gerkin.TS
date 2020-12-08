import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import {Catalog} from "../pageObjects/catalog.page";
import { prependOnceListener } from "process";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let catalogPage = new Catalog;

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        await catalogPage.PrepareDict()
        await catalogPage.BrandDict()
        // await catalogPage.getLocatorByName()
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions

    //Given expression, can only be used with Given in .feature file
    this.Then(/^Title 'Каталог' is displayed/, async () => {
        await catalogPage.rightTitle();
    });

    this.Then(/^Navigation panel displayed/, async () => {
        await catalogPage.categoryNaviDispl();
    });

    this.Then(/^I click on category "(.*?)"/, async (itemName) => {
        await catalogPage.openCategory(itemName);
    });

    this.Then(/^"(.*?)" item is active/, async (itemName) => {
        await catalogPage.choisenCategoryIsActive(itemName);
    });

    this.Then(/^I click on brend "(.*?)"/, async (itemName) => {
        await catalogPage.openBrand(itemName);
    });

    this.Then(/^Catalog navigation list opened/, async () => {
        await catalogPage.catalogNavigationListOpened();
    });

    this.Then(/^I click on mobilePhone category/, async () => {
        await catalogPage.openItemFronCategory();
    });

    this.Then(/^I click on headphones category/, async () => {
        await catalogPage.openHeadphonesCategory();
    });
    
    this.Then(/^(.*?) item is displayed/, async (brandName) => {
        await catalogPage.rightItemAreDisplayed(brandName);
    });

    this.Then(/^I click on watch category/, async () => {
        await catalogPage.openWatchCategory();
    });

    this.Then(/^I click on all proposals/, async () => {
        await catalogPage.openAllProposalsy();
    });
    
    this.Then(/^I see (.*?) product is displayed/, async (productName) => {
        await catalogPage.isProductRight(productName);
    });

    this.Then(/^I add product to compare/, async (productName) => {
        await catalogPage.addToCompare();
    });

    this.Then(/^Text was changed/, async () => {
        await catalogPage.textChangedAfterAddingToCompare();
    });

    this.Then(/^I add product to cart/, async () => {
        await catalogPage.addToCart();
    });

    this.Then(/^Text on button changed/, async () => {
        await catalogPage.textOnButtonChanged();
    });

    this.Then(/^Bage is displayed/, async () => {
        await catalogPage.bageIsDisplayed();
    });
}