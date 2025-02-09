const loginErrorActions = require("../pages/login_locked_Out_User/loginErrorActions");
const expectedErrorMessage = 'Epic sadface: Sorry, this user has been locked out.';
describe("saucedemo site", ()=>{

    it("Login in with locked out user", async()=>{
    //Try login with locked_out_user and verify the error message,
       await loginErrorActions.clickOnusernamelocked_out_user();
       await loginErrorActions.clickOnpasswordlocked_out_user();
       await loginErrorActions.clickOnloginButton();
    });
    it("Verify the successful order message - Performance_glitch_User", async()=>{
       //Verify the successful order message
          const errorMessage = await loginErrorActions.getCompleteText();
        if (errorMessage === expectedErrorMessage) {
            console.log('Test Passed: Error message is displayed correctly.');
        } else {
            console.error('Test Failed: Error message is incorrect.');
            console.log(`Expected: "${expectedErrorMessage}"`);
            console.log(`Actual: "${errorMessage}"`);
        }
    });
})