import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import {NewsPage} from "../pageObjects/newsList.page";
import { prependOnceListener } from "process";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let onlMainPage = new NewsPage;

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        await onlMainPage.getLocatorByName()
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions

    //Given expression, can only be used with Given in .feature file
    this.Then(/^I see "(.*?)" url displayed/, async (nameSection) => {
        await onlMainPage.rightUrl(nameSection);
    });

    this.Then(/^"(.*?)" section is selected in main menu/, async (nameSection) => {
        await onlMainPage.rightItemSelected(nameSection);
    });

    this.Then(/^I see "(.*?)" main block/, async (nameSection) => {
        await onlMainPage.mainBlockDisplayed(nameSection);
    });

    this.Then(/^I see rubrics menu/, async () => {
        await onlMainPage.rubricsMenuDisplayed('nameSection');
    });
}