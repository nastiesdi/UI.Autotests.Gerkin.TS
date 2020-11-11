import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import {Header} from "../pageObjects/header.page";

export = function cventSteps() {

    
    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let ItemList = new Header;

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

    this.Then(/^Right count of item is displayed/, async () => {
        await ItemList.IsCountItemsInCartRight();
    });
}