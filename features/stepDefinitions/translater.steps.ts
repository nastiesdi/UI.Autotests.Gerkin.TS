import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import {Translator} from "../pageObjects/translater.page";

export = function cventSteps() {

    
    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let translator = new Translator;

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

   // Step Definitions

    this.Given(/^I am on google translate page$/, async () => {
        await browser.navigate().to('https://translate.google.com/');
        // await oneteh.Loaded();
    });

    this.Then(/^I click apps button/, async () => {
        await translator.OpenAllApps()
        // await Translator.Loaded();
    });

    this.Then(/^I click on google calendar icon/, async () => {
        await translator.OpenGoogleCalendar()
        // await Translator.Loaded();
    });
    
    this.Then(/^login form is displayed/, async () => {
        await translator.LoginFormDisplayed()
        // await Translator.Loaded();
    });
}