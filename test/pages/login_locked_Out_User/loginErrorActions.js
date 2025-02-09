
const loginErrorObjects = require("./loginErrorObjects");
class loginErrorActions{
    //login with locked_out_user and verify the error message,
    async clickOnusernamelocked_out_user(){
        await loginErrorObjects.usernamelocked_out_user.setValue("locked_out_user");
        await browser.pause(3000);
    }
    async clickOnpasswordlocked_out_user(){
        await loginErrorObjects.passwordlocked_out_user.setValue("secret_sauce");
        await browser.pause(3000);
    }
    async clickOnloginButton(){
        await loginErrorObjects.loginButton.click();
        await browser.pause(3000);
        }

    async getCompleteText(){
        await loginErrorObjects.completeText.getText();
           // await browser.pause(3000);
        }

}

module.exports = new loginErrorActions();