const loginPGUActions = require("../pages/login_Performance_glitch_User/loginPGU/loginPGUAction");
const productPGUActions = require("../pages/login_Performance_glitch_User/productPGU/productPGUActions");
const checkoutPGUActions =require("../pages/login_Performance_glitch_User/checkoutPGU/checkoutPGUActions");

const infoActions = require("../pages/login_Standard_User/infoSU/infoActions");
const overviewActions = require("../pages/login_Standard_User/overviewSU/overviewActions");
const completeActions = require("../pages/login_Standard_User/completeSU/completeActions");
const loginSUActions = require("../pages/login_Standard_User/loginSU/loginSUActions");

const expectedSuccessMessage = 'Thank you for your order!';

describe("saucedemo site - Performance_glitch_User", ()=>{

    it("Login in with Performance_glitch_User", async()=>{
    //Login with performance_glitch_user 
       await loginPGUActions.clickOnusername_PGU_user();
       await loginPGUActions.clickOnpassword_PGU_user();
       await loginPGUActions.clickOnloginButton();
    }) ;

    it("Reset App State - Performance_glitch_User", async()=>{
    // Reset App State.
       await loginPGUActions.clickOnMenuButton();
       await loginPGUActions.clickOnResetAppState();
       await loginPGUActions.clickOnCloseIcon();
    });   

    it("Filter by name - Performance_glitch_User", async()=>{
    //Then filter by name (Z to A) 
    await productPGUActions.pgetZtoA();
    });

    it("The first product into the cart, click the cartIcon- Performance_glitch_User", async()=>{
    //select the first product into the cart.
      await productPGUActions.clickOnAddToCart();
      await productPGUActions.clickOnCartIcon();
      });

   
   it("Navigate up to the final checkout page - Performance_glitch_User", async()=>{
      //Then navigate up to the final checkout page 
       await checkoutPGUActions.clickOnCheckoutPGU();
   });

   it("verify the 1st product name and the total price - Performance_glitch_User", async()=>{
      //verify product's name 
      const firstProductName = await productPGUActions.getFirstProduct();
      const productNameInCart = await checkoutPGUActions.getProductname();
     
      console.log('1st product name in cart:', productNameInCart);
    
      if (productNameInCart === firstProductName) {
            console.log('Product name matches!');
        } else {
            console.error('Product name does not matches');
            console.log(`Expected: "${productNameInCart}"`);
            console.log(`Actual: "${firstProductName}"`);
        }
   });

   it("Verify the total price. - Performance_glitch_User", async()=>{
      // verify the total price.
      const totalPrice = await checkoutPGUActions.getPrice();
      console.log('Total Price:', totalPrice);
   });

   it("Finish the purchase journey - Performance_glitch_User", async()=>{
      //Give the information and do continue
         await infoActions.setFirstname();
         await infoActions.setLastName();
         await infoActions.setPostCode();
         await infoActions.clickOnContinueButton();
         
         //Then finish the purchase journey  
         await overviewActions.clickOnfinishButton();     
   });
        
     
   it("Verify the successful order message - Performance_glitch_User", async()=>{
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