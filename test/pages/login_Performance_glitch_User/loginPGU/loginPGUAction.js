const loginPGUObjects = require("../loginPGU/loginPGUObjects");

class loginPGUActions{

//Login with standard_user. 
    async clickOnusername_PGU_user(){
        await loginPGUObjects.username_Performance_Glitch_user.setValue("performance_glitch_user");
        await browser.pause(3000);
    }
    async clickOnpassword_PGU_user(){
        await loginPGUObjects.password_Performance_Glitch_user.setValue("secret_sauce");
        await browser.pause(3000);
    }
    async clickOnloginButton(){
        await loginPGUObjects.loginButton_Performance_Glitch_user.click();
        await browser.pause(3000);
        }


//Then from the hamburger menu Reset App State. 
    async clickOnMenuButton(){
        await loginPGUObjects.menuButton_Performance_Glitch_user.click();
        await browser.pause(3000);
        }

    async clickOnResetAppState(){
        await loginPGUObjects.resetAppState_Performance_Glitch_user.click();
        await browser.pause(3000);
        }

    async clickOnCloseIcon(){
        await loginPGUObjects.closeButton_Performance_Glitch_user.click();
        await browser.pause(6000);
       }

    }

    module.exports = new loginPGUActions();