import { by, element } from 'protractor';

export class catalogSelectors {
    readonly mainText = element(by.xpath("//h1[@class='catalog-navigation__title']"));
    readonly navigationMenu = element(by.css("div.catalog-navigation_opened"));
    readonly ElectrInNaviMenu = element(by.xpath("//span[@class='catalog-navigation-classifier__item-title']//span[text()='Электроника']"));
    readonly ActiveItemInNavi = element(by.css('li.catalog-navigation-classifier__item_active'));
    readonly naviListOpened = element(by.css("div.catalog-navigation-list_opened"));
    readonly brendMenu = element(by.xpath("//ul[@class='catalog-navigation-classifier catalog-navigation-classifier_brand']//li[1]"));
    readonly honorMobilePhone = element(by.xpath("//*[@data-id='brand-0']//*[contains(text(),'Моб')]"));
    readonly honorHeadphones = element(by.xpath("//*[@data-id='brand-0']//*[contains(text(),'Наушники')]"));
    readonly honorWatch = element(by.xpath("//*[@data-id='brand-0']//*[contains(text(),'часы')]"));
    readonly allItemOnOpenedList = element.all(by.xpath("//div[@class='catalog-navigation-list__aside-item catalog-navigation-list__aside-item_active']//a"));
    readonly productHeader = element.all(by.css("h1.catalog-masthead__title"));
    readonly addToCompareText = element(by.css("#product-compare-control"));
    readonly addToCompareCheck = element(by.css("#product-compare-control span.i-checkbox__faux"));
    readonly searchElement = element(by.xpath("//div[@class='result__item result__item_product']"));
    readonly allShopSug = element(by.css('.product-aside__group'));
    readonly firstItemAddToCart = element(by.xpath("//div[@class='product-aside__group']/div[1]//a[contains(@class,'button')]"));
    readonly cartCounter = element(by.css(".b-top-profile__cart"));

    public getSelItemNavi(sectionName:string) {
        let selector = element(by.xpath(`//span[@class='catalog-navigation-classifier__item-title']//span[contains(text(), '${sectionName}')]`));
        return selector;
        }
    
    
    public getBrendItemSel(sectionName:string) {
        let selector = element(by.xpath(`//ul[@class='catalog-navigation-classifier catalog-navigation-classifier_brand']//li[${sectionName}]`));
        return selector;
        }

}