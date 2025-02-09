
class loginSUObjects{

    get usernameStandard_user(){
        return $("//input[contains(@data-test,'username')]");
    }
    get passwordStandard_user(){
        return $("#password");
    }
    get loginButton(){
        return $("//input[@id='login-button']");
    }

    get menuButton(){
        return $("//button[contains(text(),'Open Menu')]");
    }
    get resetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }
    
    get closeButton(){
        return $("//button[contains(text(),'Close Menu')]");
    }

    get addToCart(){
        return $("(//a[@class='shopping_cart_link'])[1]");
    }
    get checkout(){
        return $("//button[contains(@id,'checkout')]");
    }

    get productItem1(){
        return $("//div[contains(text(),'Sauce Labs Backpack')]");
    }
    get productItem2(){
        return $("//div[contains(text(),'Sauce Labs Bike Light')]");
    }
    get productItem3(){
        return $("//div[contains(text(),'Sauce Labs Bolt T-Shirt')]");
    }
 
}

module.exports = new loginSUObjects();