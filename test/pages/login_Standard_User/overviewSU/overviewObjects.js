

class overviewObjects{

    get totalPrice(){
        return $("//div[@class='summary_subtotal_label' and text() = 55.97]");
    }
    get finishButton(){
        return $("//button[@id='finish']");
    }
    
}

module.exports = new overviewObjects();