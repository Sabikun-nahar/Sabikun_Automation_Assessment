
class checkoutObjects{

    get item1(){
        return $("//div[contains(text(),'Sauce Labs Backpack')]");
    }
    get item2(){
        return $("#//div[contains(text(),'Sauce Labs Bike Light')]");
    }
    get item3(){
        return $("//div[contains(text(),'Sauce Labs Bolt T-Shirt')]");
    }
    //price
     price1(price1i){
        return $(`//div[@class='inventory_item_price' and text() = "${price1i}"]`);
    }
     price2(price2i){
        return $(`//div[@class='inventory_item_price' and text() = "${price2i}"]`);
    }
     price3(price3i){
        return $(`//div[@class='inventory_item_price' and text() = "${price3i}"]`);
    }

    
}

module.exports = new checkoutObjects();