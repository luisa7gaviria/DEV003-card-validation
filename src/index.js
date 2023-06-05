import validator from './validator.js';

const card = document.getElementById('card');
const user = document.getElementById('name')
const submitCard = document.getElementById('submitCard');
const closeBtn = document.querySelector('.closeBtn');
const modal = document.querySelector('.validation_modal');
const setImg = document.querySelector('.validatedImg');

submitCard.disabled = true;

function enableSubmit(){
  
  const error = document.getElementById('typeErrorNumber') ;
  const regExp = /[A-z]/g;

  if (regExp.test(card.value)) {
    error.style.display = "block"
    submitCard.disabled = true;
  } else {
    card.value.length >= 12 ? submitCard.disabled = false : submitCard.disabled = true
    error.style.display = "none"
    
  }
}

function showValidation(){
  
  const mascara = validator.maskify(card.value);
  const tvalid = validator.isValid(card.value);
  const savedCard = document.getElementById("saved_card");
  const validatedCard = document.getElementById("validated_card");

  if(tvalid === true){

    setImg.setAttribute("src", "./assets/valid.png");
    savedCard.innerHTML = user.value + ", tu tarjeta: " + mascara;
    validatedCard.innerHTML = " es válida";

  }else{

    setImg.setAttribute("src", "./assets/invalid.png");
    savedCard.innerHTML = user.value +", tu tarjeta " + mascara;
    validatedCard.innerHTML =" es inválida "; 
  }
}

card.addEventListener("keyup", () => {
  enableSubmit();
} )

submitCard.addEventListener("click" , (e) =>{
  e.preventDefault();
  showValidation();
  modal.style.display = "block";
  card.value = '';
  user.value = '';
  submitCard.disabled = true;
}
);
closeBtn.addEventListener("click" , () =>{
  modal.style.display = "none";
});