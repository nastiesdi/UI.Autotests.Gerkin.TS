import { by, element } from 'protractor';
let mainPageSection = new Map<string, any>()
//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class onlMainRepository {
    readonly peopleSection = element(by.xpath("//h2/a[contains(text(), 'Люди')]"));
    readonly catalogSections = element(by.xpath("//h2/a[contains(text(), 'КАТАЛОГ')]"))
    readonly activeItemInMainMenu = element(by.css('.project-navigation__item_active .project-navigation__link'))
    readonly mainBlockNewsPage =  element(by.css('div.news-container'))
    readonly rubrics = element(by.css('div.news-rubrics'))

public getSelector(sectionName:string) {
    let selector = element(by.xpath(`//h2/a[contains(text(), '${sectionName}')]`));
    return selector;
    }
    
}
