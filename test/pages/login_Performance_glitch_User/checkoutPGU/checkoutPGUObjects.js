
class checkoutPGUObjects{

    get checkoutPGUButton(){
        return $("//button[contains(.,'Checkout')]");
    }

    get checkoutProductname(){
        return $("//div[@class='inventory_item_name' and text() = 'Test.allTheThings() T-Shirt (Red)']");
    }

    get checkoutPrice(){
        return $("//div[@class='inventory_item_price' and text() = 15.99]");
    }
}

module.exports = new checkoutPGUObjects();
