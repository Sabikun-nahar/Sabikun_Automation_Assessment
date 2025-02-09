const productPGUObjects = require("../productPGU/productPGUObjects");

class productPGUActions{
    
    async pgetZtoA(){
        await productPGUObjects.dropdownZtoA.selectByAttribute('value', 'za');
        await browser.pause(3000);
    }

    async getFirstProduct(){
        await productPGUObjects.firstProduct.getText();
        await browser.pause(3000);
    }

    async clickOnAddToCart(){
        await productPGUObjects.addToCart.click();
        await browser.pause(3000);
    }

    async clickOnCartIcon(){
        await productPGUObjects.cartIcon.click();
        await browser.pause(3000);
    }

}

module.exports = new productPGUActions();
