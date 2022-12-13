const validator = {
  maskify: function(text) {
  
    const cardNum= text.length;
    let mask ="";
    if (text.length > 4){
      for(let i=0; cardNum -4; i++){
        mask = mask + "#"
      }
      const lastFour=text.slice(-4);
      const masked= mask + lastFour;
      return masked;
    } else{
      return cardNum;
    }

  },
 
    
  
  validate: function isValid(){
    
    
    
    
    

  }
};

export default validator;
  
  

