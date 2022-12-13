import validator from './validator.js';

console.log(validator);
const formulario= document.getElementById('btn');



formulario.addEventListener("click", function(e){
  const tarjeta = document.getElementById("card");
  
  e.preventDefault();
  data();
  alert(validator.maskify(tarjeta.value));
  //console.log(validator.maskify(tarjeta.value));
  

});

function data(){
  const nombp=document.getElementById("name").value;
  const cardp=document.getElementById("card").value;

  if(nombp===""){
    alert("El nombre es obligatorio");
    document.getElementById("name").focus();
  }
  else{
    if(cardp===""){
      alert("El número de tarjeta es obligatorio");
      document.getElementById("card").focus();
      
    }
  }
  
  console.log(nombp + cardp);
}



 