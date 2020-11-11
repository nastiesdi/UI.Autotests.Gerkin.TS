import { by, element } from 'protractor';


export class itemsListRepository {
    readonly pageTitle = element(by.xpath("//h1"));
    readonly VarochnaePaneli = element(by.css("div.menu [href='/dlya-kuhni/vstraivaemaya-tehnika/varochnyie-paneli']"));
    readonly brand = element(by.css("select[name='brand']"));
    readonly akpoBrand = element(by.cssContainingText("Option","Akpo"))
    readonly filterButton = element(by.css("input.fiter-prod"))
    readonly allAkpoItems = element(by.css(".polka .product-item-block"))
    readonly shortPauseCheckbox = element(by.xpath("//div[contains(@class,'checkbox_minimal')][1]"))
    readonly breadcrumbs = element(by.css(".breadcrumbs "))
    readonly boosterCheckbox = element(by.xpath("//label[contains(text(), 'Booster')]/../../div[2]/div"))
    readonly plateInWashMashine = element(by.xpath("//*[@id='filter_6370']/.."))
    readonly AddToCartFirstItemInList = element(by.xpath('//div[@class="right-side-category"]//div[@class="product-item-block"][1]//a[@data-type="add_to_cart"]'))
}
