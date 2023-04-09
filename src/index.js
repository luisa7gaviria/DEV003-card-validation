import validator from './validator.js';

const formulario = document.getElementById('btn');
document.getElementById('btn').disabled = false;
document.getElementById('card').addEventListener("keyup" , errorNumber);
document.getElementById('card').addEventListener("keyup" , habilitate);
document.getElementById('name').addEventListener("keyup", habilitateName)

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

function habilitateName() {
  const name = document.getElementById('name')

  if (name.value.length >= 5) {
    document.getElementById('btn').disabled = false;
  } else {
    document.getElementById('btn').disabled = true
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
  const user = document.getElementById('name')

  document.getElementById("card").value = mascara;

  const tvalid = validator.isValid(tarjeta);

  
  if(tvalid === true){
    document.getElementById("finalt").innerHTML = user.value + ", tu tarjeta: " + mascara;
    document.getElementById("finalv").innerHTML = " es válida ✅";
    finalBox.style.borderColor = "green";
 

  }else{
    document.getElementById("finalt").innerHTML = user.value +", tu tarjeta " + mascara;
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