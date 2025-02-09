
const checkoutActions = require("../pages/login_Standard_User/checkoutSU/checkoutActions");
const completeActions = require("../pages/login_Standard_User/completeSU/completeActions");
const infoActions = require("../pages/login_Standard_User/infoSU/infoActions");
const loginSUActions = require("../pages/login_Standard_User/loginSU/loginSUActions");
const overviewActions = require("../pages/login_Standard_User/overviewSU/overviewActions");
const expectedSuccessMessage = 'Thank you for your order!';
var itemsToAdd = [
    "add-to-cart-sauce-labs-backpack",
    "add-to-cart-sauce-labs-bike-light",
    "add-to-cart-sauce-labs-bolt-t-shirt"
];

const productprice1 = 29.99;
const productprice2 = 9.99;
const productprice3 = 15.99;

describe("Saucedemo site - Standard_user", ()=>{
    it("Login in with Standard_user", async()=>{
        //Login with standard_user. 
        await loginSUActions.clickOnusernameStandard_user();
        await loginSUActions.clickOnpasswordStandard_user();
        await loginSUActions.clickOnloginButton();

        //Then from the hamburger menu Reset App State.
        await loginSUActions.clickOnMenuButton();
        await loginSUActions.clickOnResetAppState();
        await loginSUActions.clickOnCloseIcon();

        //Then Add Any three items to the cart. 
         for (let item of itemsToAdd) {
                await $(`#${item}`).click();
                await browser.pause(3000);
        }
        await loginSUActions.clickOnaddToCart();
        
      
        //Then navigate up to the final checkout page 
        await loginSUActions.clickOnCheckout();
     });

     // and verify all the product's name  
   it("Verify product name in checkout page", async()=>{
    const actualName1 = await checkoutActions.getItem1();
    const actualName2 = await checkoutActions.getItem2();
    const actualName3 = await checkoutActions.getItem3();

    const expectedName1 = await loginSUActions.getProductItem1();
    const expectedName2 = await loginSUActions.getProductItem2();
    const expectedName3 = await loginSUActions.getProductItem3();

    expect(expectedName1).toHaveText(actualName1);
    expect(expectedName2).toHaveText(actualName2);
    expect(expectedName3).toHaveText(actualName3);
});

//verify the total price.
it("Verify total price", async()=>{
    const p1 = await checkoutActions.getPrice1(productprice1);
    const p2 = await checkoutActions.getPrice2(productprice2);
    const p3 = await checkoutActions.getPrice3(productprice3);

    const totalPrice = p1 + p2 + p3;
    console.log('Total Price: %d', totalPrice);
    const finalTotalResult = await overviewActions.finalTotalPrice();
    if (finalTotalResult === totalPrice) {
        console.log('Total price is correct: %d', finalTotalResult);
    } else {
        console.log('Total price is not correct: %d', totalPrice);
    }
});

it("finish the purchase journey", async()=>{

    //Give the information and do continue
    await infoActions.setFirstname();
    await infoActions.setLastName();
    await infoActions.setPostCode();
    await infoActions.clickOnContinueButton();

    //Then finish the purchase journey  
    await overviewActions.clickOnfinishButton();

});

it("The successful order message", async()=>{
    //Verify the successful order message.
     const successMessage = await completeActions.getCompleteText();
     if (successMessage === expectedSuccessMessage) {
        console.log('Success message is displayed correctly.');
    } else {
        console.error('Error message is incorrect.');
        console.log(`Expected: "${expectedSuccessMessage}"`);
        console.log(`Actual: "${successMessage}"`);
    }
});


it("Reset the App State again and log out.", async()=>{
   //Then Reset the App State again and log out.
    await loginSUActions.clickOnMenuButton();
    await loginSUActions.clickOnResetAppState();
    await completeActions.logOutButton();
})
})