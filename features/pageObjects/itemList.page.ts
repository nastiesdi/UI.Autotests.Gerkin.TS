import { AssertionError, strict } from "assert";
//import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { threadId } from "worker_threads";
import { itemsListRepository } from "../objectsRepository/itemsList.obj";

const defaultTimeout = 60000;
const assert = require('chai').assert;


//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class ItemListPage {

    //Locators      
    readonly itemsListElements = new itemsListRepository;

    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        await browser.wait(ExpectedConditions.visibilityOf(this.itemsListElements.pageTitle), defaultTimeout, "Homepage not loaded");
    }

    public async FindTitle(name:string): promise.Promise<void> {
        //Wait till element is present in DOM, but not necessary  visible
        console.log('FindTitle function')
        await browser.wait(ExpectedConditions.presenceOf(this.itemsListElements.pageTitle), defaultTimeout, "Iframe not loaded");
        let itemName = await this.itemsListElements.pageTitle.getText();
        await assert.equal(itemName.toUpperCase(), name.toUpperCase(), `${name} is not in ${itemName}`);
    }

    public async OpenItemsSection(): promise.Promise<void> {
        //Wait till element is present in DOM, but not necessary  visible
        console.log('OpenItemsSection')
        await browser.wait(ExpectedConditions.presenceOf(this.itemsListElements.VarochnaePaneli), defaultTimeout, "Iframe not loaded");
        await browser.actions().click(this.itemsListElements.VarochnaePaneli).perform();
    }

    public async OpenDropdownList(): promise.Promise<void> {
        console.log('OpemDropdownList')
        await browser.wait(ExpectedConditions.presenceOf(this.itemsListElements.brand), defaultTimeout, "Iframe not loaded");
        await browser.actions().click(this.itemsListElements.brand).perform();
    }

    public async SelectItemInDropdownList(name:string): promise.Promise<void> {
        console.log('SelectItemInDropdownList')
        // await console.log(`name is ${name}`)
        await this.itemsListElements.brand.element(by.cssContainingText("option", name)).click()
    }

    public async FilterItems(): promise.Promise<void> {
        console.log('FilterItems')
        await browser.wait(ExpectedConditions.presenceOf(this.itemsListElements.filterButton), defaultTimeout, "Iframe not loaded");
        await this.itemsListElements.filterButton.click()

    }

    public async ChangedValueInDropDisp(name): promise.Promise<void> {
        console.log('ChangedValueInDropDisp')
        let choisenBrand = await this.itemsListElements.brand.element(by.cssContainingText("option", name)).isSelected()
        console.log(choisenBrand)
        await assert.isOk(choisenBrand, 'Item in dropdown list where choisen')
        // await assert.equal(choisenBrand, 'sss', `${choisenBrand} is not equal with wwww`);
        
    }

    public async ItemsListAkpoDisolayed(brandName): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.itemsListElements.filterButton), defaultTimeout, "Iframe not loaded");
        console.log('ItemsListAkpoDisolayed')
        let all = await browser.findElements(this.itemsListElements.allAkpoItems)
        await console.log(all)
    }

    public async BrandDisplayedInBreabcrumbs(brandName): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.itemsListElements.breadcrumbs), defaultTimeout, "Iframe not loaded");
        await browser.sleep(5000);
        console.log('BrandDisplayedInBreabcrumbs')
        let actualBreadcrumps = await this.itemsListElements.breadcrumbs.getText()
        await assert.include(actualBreadcrumps, brandName, `${brandName} is not in ${actualBreadcrumps}`)
    }

    public async SetBoosterCheckbox(): promise.Promise<void> {
        console.log('SetBoosterCheckbox')
        await browser.sleep(6000)
        await this.itemsListElements.boosterCheckbox.click()
    }

    public async BoosterCheckboxIsSet(): promise.Promise<void> {
        console.log('BoosterCheckboxIsSet')
        await assert.isOk(this.itemsListElements.boosterCheckbox.isSelected())
    }
    
    public async SetCheckplateInWashMashine(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.itemsListElements.plateInWashMashine), defaultTimeout, "Iframe not loaded");
        console.log('SetCheckplateInWashMashine')
        // await this.itemsListElements.plateInWashMashine.click()
        await browser.actions().click(this.itemsListElements.plateInWashMashine).perform();
        await browser.actions().mouseMove(this.itemsListElements.filterButton).perform()
    }

    public async PlateInWashMashinCheckboxIsSet(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.itemsListElements.plateInWashMashine), defaultTimeout, "Тут очень странная ошибка. Если в папке Features 3 сценария - все работает ок. Если 4 - то нужная страница не открывается (раз через два) это даже если я запускаю тесты с флагом Smoke и отмечаю им только этот тест");
        console.log('PlateInWashMashinCheckboxIsSet')
        let attr = await this.itemsListElements.plateInWashMashine.getAttribute('class')
        console.log(attr)
        await assert.include(attr, 'checked', 'Radio button was not checked')
    }

    public async AddFirstItemToCart(): promise.Promise<void> {
        console.log('AddFirstItemToCart')
        await browser.wait(ExpectedConditions.presenceOf(this.itemsListElements.AddToCartFirstItemInList), defaultTimeout, "Iframe not loaded");
        await this.itemsListElements.AddToCartFirstItemInList.click()
        browser.sleep(5000)
    }
}
