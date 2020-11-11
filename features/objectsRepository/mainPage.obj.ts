import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class onetehRepository {
    readonly sarchField = element(by.css(".input-search"));
    readonly nothingFoundedText = element(by.xpath("//div[@class= 'item']/div"))
    readonly productName = element(by.xpath("//div[@class='right-side-result']/div/div[2]/a"))
    readonly closeSearchButton = element(by.xpath("//a[@class='close-search']"))
    readonly forKithenButton = element(by.xpath("//li[@class='item1']/a[@href='/dlya-kuhni']"))
    readonly SectionItems = element(by.xpath(`//li[@class='item1']//b[text()='Встраиваемая техника']`))
    readonly SectionPlatesItems = element(by.xpath(`//span[contains(text(),'Формы для выпечки, противни')]`))
    //Iframe, needed to enter and find some elements in DOM, if you won't switch to it - you will have error "Element Not Found"
    //readonly searchPopupIframe = element(by.css(".modal-iframe"));
}