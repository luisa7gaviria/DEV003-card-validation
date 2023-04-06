const validator = {
  maskify: function(text) {
    
    const cardNum= text.length;
    let mask = "";
    if (cardNum > 4){
      for(let i=0; i < cardNum -4; i++){
        mask = mask + "#" ;
      }
      const lastFour = text.slice(-4);
      const masked = mask + lastFour ;
      return masked;
    }else{
      return text;
    }
  
  },
     
    
    
  isValid: function(vTarjeta) {
    const cardNum = vTarjeta.toString().split('').reverse(); 
    const plus = []; 
  
    cardNum.forEach((e,i) =>{ 
        
      if(i%2 !==0){ 
        const pairNum = e*2; 
        if( pairNum >= 10){ 
          plus.push(pairNum.toString().split('').reduce((a , b) => parseInt(a) + parseInt(b))); 
        } else{                                                                                 
          plus.push(pairNum); 
        }
      } else{
        plus.push(parseInt(e)); 
      
      }
    });
  
    const totalPlus = plus.reduce((a , b) => a + b );{ 
      if(totalPlus %10 === 0){                        
        return true;
      } else{
        return false;
      }
    }
    
  }
  
      
}
  
export default validator;
