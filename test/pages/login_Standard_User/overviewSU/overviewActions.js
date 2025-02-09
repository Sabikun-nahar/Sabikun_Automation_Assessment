const overviewObjects = require("../overviewSU/overviewObjects");
const utilities = require("../utility/utilities");
class overviewActions{

    async finalTotalPrice(){
        const finalPrice = await overviewObjects.totalPrice.getText();
        return utilities.textToNumber(finalPrice);
    }
    async clickOnfinishButton(){
        await overviewObjects.finishButton.click();
        await browser.pause(3000);
        }

}

module.exports = new overviewActions();