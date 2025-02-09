const checkoutPGUObjects = require("../checkoutPGU/checkoutPGUObjects");
const utilities = require("../utilityPGU/utilitiesPGU");
class checkoutPGUActions{
    
    async clickOnCheckoutPGU(){
        await checkoutPGUObjects.checkoutPGUButton.click();
        await browser.pause(3000);
    }
    async getProductname(){
        await checkoutPGUObjects.checkoutProductname.getText();
        await browser.pause(3000);
    }

    async getPrice(){
        const getprice1 = await checkoutPGUObjects.checkoutPrice.getText();
        return utilities.textToNumber(getprice1);
    }
}

module.exports = new checkoutPGUActions();