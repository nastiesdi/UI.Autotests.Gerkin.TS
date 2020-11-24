import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class catalogSelectors {
    readonly mainText = element(by.xpath("//h1[@class='catalog-navigation__title']"))
    readonly navigationMenu = element(by.css("div.catalog-navigation_opened"));
    readonly ElectrInNaviMenu = element(by.xpath("//span[@class='catalog-navigation-classifier__item-title']//span[text()='Электроника']"))
    readonly ActiveItemInNavi = element(by.css('li.catalog-navigation-classifier__item_active'))
    readonly naviListOpened = element(by.css("div.catalog-navigation-list_opened"))
    readonly brendMenu = element(by.xpath("//ul[@class='catalog-navigation-classifier catalog-navigation-classifier_brand']//li[1]"))
    readonly mobilePhone = element(by.xpath("//*[@data-id='brand-0']//*[contains(text(),'Моб')]"))

    public getSelItemNavi(sectionName:string) {
        let selector = element(by.xpath(`//span[@class='catalog-navigation-classifier__item-title']//span[contains(text(), '${sectionName}')]`));
        return selector;
        }
    
    
    public getBrendItemSel(sectionName:string) {
        let selector = element(by.xpath(`//ul[@class='catalog-navigation-classifier catalog-navigation-classifier_brand']//li[${sectionName}]`));
        return selector;
        }
    // readonly nothingFoundedText = element(by.xpath("//div[@class= 'item']/div"))
    // readonly productName = element(by.xpath("//div[@class='right-side-result']/div/div[2]/a"))
    // readonly closeSearchButton = element(by.xpath("//a[@class='close-search']"))
    // readonly forKithenButton = element(by.xpath("//li[@class='item1']/a[@href='/dlya-kuhni']"))
    // readonly SectionItems = element(by.xpath(`//li[@class='item1']//b[text()='Встраиваемая техника']`))
    // readonly SectionPlatesItems = element(by.xpath(`//span[contains(text(),'Формы для выпечки, противни')]`))
    //Iframe, needed to enter and find some elements in DOM, if you won't switch to it - you will have error "Element Not Found"
    //readonly searchPopupIframe = element(by.css(".modal-iframe"));
}