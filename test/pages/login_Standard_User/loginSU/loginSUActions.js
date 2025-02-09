const loginSUObjects = require("../loginSU/loginSUObjects");

class loginSUActions{

//Login with standard_user. 
    async clickOnusernameStandard_user(){
        await loginSUObjects.usernameStandard_user.setValue("standard_user");
        await browser.pause(3000);
    }
    async clickOnpasswordStandard_user(){
        await loginSUObjects.passwordStandard_user.setValue("secret_sauce");
        await browser.pause(3000);
    }
    async clickOnloginButton(){
        await loginSUObjects.loginButton.click();
        await browser.pause(3000);
        }


//Then from the hamburger menu Reset App State. 
    async clickOnMenuButton(){
        await loginSUObjects.menuButton.click();
        await browser.pause(3000);
        }

    async clickOnResetAppState(){
        await loginSUObjects.resetAppState.click();
        await browser.pause(3000);
        }

    async clickOnCloseIcon(){
        await loginSUObjects.closeButton.click();
        await browser.pause(6000);
       }

    //After adding three items to the cart and clicked the cart.
   
       async clickOnaddToCart(){
        const addToCartButton = await loginSUObjects.addToCart;
        await addToCartButton.click();
        await browser.pause(6000);
       }


   //Then navigate up to the final checkout page 
   async clickOnCheckout(){
    await loginSUObjects.checkout.click();
    //await browser.pause(4000);
    }

// and verify all the product's name and the total price. 
async getProductItem1(){
    return await loginSUObjects.productItem1.getText();
 }
 async getProductItem2(){
    return await loginSUObjects.productItem2.getText();
 }
 async getProductItem3(){
    return await loginSUObjects.productItem3.getText();
 }
//Then finish the purchase journey and verify the successful order message. 
//Then Reset the App State again and log out.
}

module.exports = new loginSUActions();