const infoObjects = require("../infoSU/infoObjects");

class infoActions{
    //login with locked_out_user and verify the error message,
    async setFirstname(){
        await infoObjects.firstName.setValue("Sabikun");
        await browser.pause(3000);
    }
    async setLastName(){
        await infoObjects.lastName.setValue("Nahar");
        await browser.pause(3000);
    }
    async setPostCode(){
        await infoObjects.postCode.setValue("1233");
        await browser.pause(3000);
    }
    async clickOnContinueButton(){
        await infoObjects.continueButton.click();
        await browser.pause(3000);
        }

}

module.exports = new infoActions();