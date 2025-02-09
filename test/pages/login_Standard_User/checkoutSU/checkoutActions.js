const checkoutObjects = require("../checkoutSU/checkoutObjects");
const utilities = require("../utility/utilities");
class checkoutActions{

async getItem1(){
    return await checkoutObjects.item1.getText();
 }

 async getItem2(){
    return await checkoutObjects.item2.getText();
 }

 async getItem3(){
    return await checkoutObjects.item3.getText();
 }

 async getPrice1(price1i){
    const productPrice11 = await checkoutObjects.price1(price1i).getText();
    return utilities.textToNumber(productPrice11);
}
async getPrice2(price2i){
    const productPrice12 = await checkoutObjects.price2(price2i).getText();
    return utilities.textToNumber(productPrice12);
}
async getPrice3(price3i){
    const productPrice13 = await checkoutObjects.price3(price3i).getText();
    return utilities.textToNumber(productPrice13);
}

}

module.exports = new checkoutActions();