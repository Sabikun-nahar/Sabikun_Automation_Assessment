
class infoObjects{

    get firstName(){
        return $("//input[@id='first-name']");
    }
    get lastName(){
        return $("//input[@id='last-name']");
    }
    get postCode(){
        return $("//input[@id='postal-code']");
    }
    get continueButton(){
        return $("//input[@id='continue']");
    }
}

module.exports = new infoObjects();