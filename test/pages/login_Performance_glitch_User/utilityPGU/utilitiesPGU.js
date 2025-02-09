class utilities{
    textToNumber(text){
      //$4,308.00
      return parseFloat(text.replace(/[$,]/g,""));
  }
  
  }
  
  module.exports = new utilities();