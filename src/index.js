import validator from './validator.js';
import mdLinks from '/lu-md-links/index.js';

console.log(validator);
console.log(mdLinks)
const formulario = document.getElementById('btn');
document.getElementById('btn').disabled = false;
document.getElementById('card').addEventListener("keyup" , errorNumber);
document.getElementById('card').addEventListener("keyup" , habilitate);

function data(){
  const nombp=document.getElementById("name").value;
  const cardp=document.getElementById("card").value;
  
 
  if( nombp === ""){
    alert('El nombre es obligatorio')
    document.getElementById("name").focus();

  }else{ 
    if(cardp === "")
      alert('El número de tarjeta es obligatorio')
    document.getElementById("card").focus();

  }
  
}
function errorNumber(){
  const tarjetNum = document.getElementById('card') ;
  const error = document.getElementById('typeErrorNumber') ;
  const regExp = /[A-z]/g;
  if(regExp.test(tarjetNum.value) === true){
    error.style.display = "block";
  } else{
    error.style.display = "none";
  }
  
}

function habilitate(){
  const regE = /[A-z]/g;
  const onlyNum = document.getElementById('card');


  if (regE.test(onlyNum.value) === true ){
    document.getElementById('btn').disabled = true;

  } else if (document.getElementById('card').value.length >= 12){
    document.getElementById('btn').disabled = false; 
  }else{
    document.getElementById('btn').disabled = true ;
  }
    

}


function showValidation(){
  const tarjeta = document.getElementById("card").value;
  const mascara = validator.maskify(tarjeta);
  const finalBox = document.getElementById("finalbox");

  document.getElementById("card").value = mascara;

  const tvalid = validator.isValid(tarjeta);

  
  if(tvalid === true){
    document.getElementById("finalt").innerHTML = "Tu tarjeta: " + validator.maskify(tarjeta);
    document.getElementById("finalv").innerHTML = " es válida ✅";
    finalBox.style.borderColor = "green";
 

  }else{
    document.getElementById("finalt").innerHTML = "Tu tarjeta " + validator.maskify(tarjeta);
    document.getElementById("finalv").innerHTML =" es inválida ❌";
    finalBox.style.borderColor = "red";
     
  }
  
}
formulario.addEventListener("click" , (e) =>{
  e.preventDefault();
  data();
  showValidation();

}
);