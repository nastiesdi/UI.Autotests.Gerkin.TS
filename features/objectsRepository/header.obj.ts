import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class headerRepository {
    readonly countItemInCart = element(by.css('.site-header .mycart span.count-inner'))
    
}