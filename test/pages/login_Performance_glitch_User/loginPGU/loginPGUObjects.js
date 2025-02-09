class loginPGUObjects{

    get username_Performance_Glitch_user(){
        return $("//input[contains(@data-test,'username')]");
    }
    get password_Performance_Glitch_user(){
        return $("#password");
    }
    get loginButton_Performance_Glitch_user(){
        return $("//input[@id='login-button']");
    }

    get menuButton_Performance_Glitch_user(){
        return $("//button[contains(text(),'Open Menu')]");
    }
    get resetAppState_Performance_Glitch_user(){
        return $("//a[@id='reset_sidebar_link']");
    }
    
    get closeButton_Performance_Glitch_user(){
        return $("//button[contains(text(),'Close Menu')]");
    }
    
}

module.exports = new loginPGUObjects();