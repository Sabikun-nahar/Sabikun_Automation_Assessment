
class loginErrorObjects{

    get usernamelocked_out_user(){
        return $("//input[contains(@data-test,'username')]");
    }
    get passwordlocked_out_user(){
        return $("#password");
    }
    get loginButton(){
        return $("//input[@id='login-button']");
    }

    get completeText(){
        return $("h3[data-test='error']");
    }
}

module.exports = new loginErrorObjects();