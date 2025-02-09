
class productPGUObjects{

    get dropdownZtoA(){
        return $("//select[contains(@class,'product_sort_container')]");
    }

    get firstProduct(){
        return $("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]");
    }
    get addToCart(){
        return $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
    }
    get cartIcon(){
        return $("//a[contains(@class,'shopping_cart_link')]");
    }
    


}

module.exports = new productPGUObjects();

