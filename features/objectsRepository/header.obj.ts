import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class headerRepository {
    readonly curentTab = element(by.xpath("//li[contains(@class,'b-main-navigation__item_current')]"));
    readonly searchField = element(by.className('fast-search__input'));
    readonly fastSearchModal = element(by.id('fast-search-modal'));
    readonly allFoundItems = element(by.css('.search__content-wrapper'));
    readonly oneElement = element(by.css('.result__item.result__item_product'));
    readonly modalIframe = element(by.css('iframe.modal-iframe'));

    public getSelItemMainMenu(sectionName:string) {
        let selector = element(by.xpath(`//div[@class='b-top-menu']//span[text()='${sectionName}']`));
        return selector;
        }

    
    
}