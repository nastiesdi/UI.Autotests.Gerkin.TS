import { AssertionError, strict } from "assert";
// import { assert } from "console";
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { catalogSelectors } from "../objectsRepository/catalog.obj";
import { headerRepository } from "../objectsRepository/header.obj";

const defaultTimeout = 6000;
const assert = require('chai').assert;

let naviItems = new Map<string, any>()
let brandItem = new Map<string, any>()



//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class Catalog {   
    //Locators      
    readonly catalogElem = new catalogSelectors;
    readonly header = new headerRepository;

    public async PrepareDict(): promise.Promise<void> {
        naviItems.set('Электроника', 1)
        naviItems.set('Компьютеры', 2)
        naviItems.set('Бытовая', 3)
        naviItems.set('Стройка', 4)
        naviItems.set('Дом', 5)
        naviItems.set('Авто', 6)
        naviItems.set('Красота', 7)
        naviItems.set('Детям', 8)
        naviItems.set('Работа', 9)
        naviItems.set('Еда', 16)
    }
    
    public async BrandDict(): promise.Promise<void> {
        brandItem.set('Honor', 1)
        brandItem.set('Apple', 2)
        brandItem.set('Asus', 3)
        brandItem.set('Lenovo', 4)
        brandItem.set('Xiaomi', 5)
        brandItem.set('Bosch', 6)
        brandItem.set('Nokia', 7)
        brandItem.set('LG', 8)
        brandItem.set('Candy', 9)
        brandItem.set('beurer', 10)
    }

    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        // await browser.wait(ExpectedConditions.visibilityOf(this.onlmainElements.peopleSection), defaultTimeout, "Homepage not loaded");
    }

    public async rightTitle(): promise.Promise<void> { 
        await assert.equal(await this.catalogElem.mainText.getText(), 'Каталог', `${await this.catalogElem.mainText.getText()} is not equal to Каталог`);
    }

    public async categoryNaviDispl(): promise.Promise<void> {
        await assert.isTrue(await browser.wait(ExpectedConditions.visibilityOf(this.catalogElem.navigationMenu)), `News block is not displayed`);
    }

    public async openCategory(sectionName:string): promise.Promise<void> {
        // await browser.wait(ExpectedConditions.presenceOf(this.catalogElem.navigationMenu), defaultTimeout, `${sectionName} section not loaded`);
        let selector = await this.catalogElem.getSelItemNavi(sectionName)
        await selector.click()
    }

    public async choisenCategoryIsActive(sectionName:string): promise.Promise<void> {
        let dataId = await this.catalogElem.ActiveItemInNavi.getAttribute('data-id');
        await assert.equal(dataId, naviItems.get(sectionName), `${dataId} is not equal to ${naviItems.get(sectionName)}`);
    }

    public async catalogNavigationListOpened(): promise.Promise<void> {
        await assert.isTrue(await browser.wait(ExpectedConditions.visibilityOf(this.catalogElem.naviListOpened)), `Navi list is not displayed`);
    }

    public async openBrand(sectionName:string): promise.Promise<void> {
        let selector = await this.catalogElem.getBrendItemSel(brandItem.get(sectionName));
        await selector.click()
    }

    public async openItemFronCategory(): promise.Promise<void> {
        await browser.actions().mouseMove(this.catalogElem.honorMobilePhone).click().perform();
    }

    public async openHeadphonesCategory(): promise.Promise<void> {
        await browser.actions().mouseMove(this.catalogElem.honorHeadphones).click().perform();
    }

    public async openWatchCategory(): promise.Promise<void> {
        await browser.actions().mouseMove(this.catalogElem.honorWatch).click().perform();
    }

    public async openAllProposalsy(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.header.modalIframe), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(this.header.modalIframe.getWebElement());
        await browser.wait(ExpectedConditions.presenceOf(this.catalogElem.searchElement), defaultTimeout, "Iframe not loaded");
        await this.catalogElem.searchElement.click();
    }


    public async isProductRight(ProductName): promise.Promise<void> {
        let headerText = await this.catalogElem.productHeader.getText(); 
        await assert.equal(ProductName, headerText, `${headerText} is not equal to ${ProductName}`);
    }

    public async addToCompare(): promise.Promise<void> {
        await this.catalogElem.addToCompareCheck.click();
    }

    public async textChangedAfterAddingToCompare(): promise.Promise<void> {
        let newText = await this.catalogElem.addToCompareText.getText();
        await assert.equal(newText, "Добавлен к сравнению", `${newText} is not equal to ${newText}`);
    }

    public async addToCart(): promise.Promise<void> {
        await this.catalogElem.firstItemAddToCart.click();
    }

    public async textOnButtonChanged(): promise.Promise<void> {
        let newText = await this.catalogElem.firstItemAddToCart.getText();
        await assert.equal(newText, "В корзине", `${newText} is not equal to ${newText}`);
    }

    public async bageIsDisplayed(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.catalogElem.cartCounter), defaultTimeout, "Cart counter not loaded");
        let newText = await this.catalogElem.cartCounter.getText();
        await assert.equal(newText, "1", `${newText} is not equal to ${newText}`);
    }
    
    public async rightItemAreDisplayed(brendName:string): promise.Promise<void> {
        let blockElement= await this.catalogElem.allItemOnOpenedList.getText();
        let ms= await String(blockElement).split(".,");
        for (let i of ms) {
            await assert.include(i.toUpperCase(), brendName, `${brendName} is not in ${i}`);
        }
    }

}   