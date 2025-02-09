const completeObject = require("../completeSU/completeObject");

class completeActions{
    //verify the success message
    async getCompleteText(){
    await completeObject.completeText.getText();
     await browser.pause(3000);
    }

    async logOutButton(){
        await completeObject.logOut.click();
        await browser.pause(3000);
    }
}

module.exports = new completeActions();