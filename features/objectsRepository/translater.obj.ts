import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class translaterRep {
    readonly allApps = element(by.css(".gb_Sc a"));
    readonly googleChroome = element(by.css('li.j1ei8c a[href*="www.google.com"]'))
    readonly iframe = element(by.css('iframe[role="presentation"]'))
}