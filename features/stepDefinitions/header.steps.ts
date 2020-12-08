import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import {Header} from "../pageObjects/header.page";
import { prependOnceListener } from "process";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let header = new Header;

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        // await header.getLocatorByName()
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions

    //Given expression, can only be used with Given in .feature file
    this.Then(/^I open "(.*?)" page  from header/, async (nameSection) => {
        await header.openNewPageFromMainMenu(nameSection);
    });

    this.Then(/^I see "(.*?)" section/, async (nameSection) => {
        await header.Loaded()
        await header.rightUrlDisplayed(nameSection);
    });

    
    this.Then(/^I can see "(.*?)" section is highlated/, async (nameSection) => {
        await header.rightTabIsHighlated(nameSection);
    });

    this.Then(/^I enter "(.*?)" in search field/, async (productName) => {
        await header.enterInSearchField(productName);
    });

    this.Then(/^I see fast search modal/, async () => {
        await header.fastSearchModalDisplayed();
    });

    this.Then(/^Searched items "(.*?)" are displayed/, async (productName) => {
        await header.rightItemAreDisplayed(productName);
    });

    

    
}