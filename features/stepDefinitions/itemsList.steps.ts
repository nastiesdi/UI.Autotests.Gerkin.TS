import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import {ItemListPage} from "../pageObjects/itemList.page";

export = function cventSteps() {

    
    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let ItemList = new ItemListPage;

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

    this.Given(/^I am on rrrrr homepage$/, async () => {
        await browser.navigate().to(browser.params.onetehByURL);
        await ItemList.Loaded();
    });

    this.Then(/^Title "(.*?)" is displayed/, async (value) => {
        await ItemList.FindTitle(value);
    });

    this.Then(/^I go to the items varochnae paneli section/, async () => {
        await ItemList.OpenItemsSection();
    });

    this.Then(/^Open drop-down list/, async () => {
        await ItemList.OpenDropdownList();
    });        

    this.Then(/^I select "(.*?)" in dropdovn list/, async (value) => {
        await ItemList.SelectItemInDropdownList(value);
    });

    this.Then(/^I click FILTER button/, async () => {
        await ItemList.FilterItems();
    });

    this.Then(/^Text "(.*?)" displayed in brand droplist/, async (value) => {
        await ItemList.ChangedValueInDropDisp(value);
    });

    this.Then(/^I see "(.*?)" product/, async (value) => {
        await ItemList.ItemsListAkpoDisolayed(value);
    });

    this.Then(/^I see "(.*?)" in the breadcrumbs/, async (value) => {
        await ItemList.BrandDisplayedInBreabcrumbs(value);
    });

    this.Then(/^I set booster checkbox/, async () => {
        await ItemList.SetBoosterCheckbox();
    });

    this.Then(/^I see booster checkbox is selected/, async () => {
        await ItemList.BoosterCheckboxIsSet();
    });

    this.Then(/^I set 'plate can be washed in washmashine' checkbox/, async () => {
        await ItemList.SetCheckplateInWashMashine();
    });

    this.Then(/^I see 'plate can be washed in washmashine checkbox' is selected/, async () => {
        await ItemList.PlateInWashMashinCheckboxIsSet();
    });

    this.Then(/^I add first item from the list to the cart/, async () => {
        await ItemList.AddFirstItemToCart();
    });

}