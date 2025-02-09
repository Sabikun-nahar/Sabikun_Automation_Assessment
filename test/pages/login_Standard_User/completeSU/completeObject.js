class completeObjects{

    get completeText(){
        return $("//h2[.='Thank you for your order!']");
    }
    get logOut(){
        return $("//a[contains(text(),'Logout')]");
    }
}

module.exports = new completeObjects();