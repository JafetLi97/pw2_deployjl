const formInputs = {
  "nombre": null,   
  "email": null,    
  "mensaje": null,  
};


document.addEventListener("DOMContentLoaded", ()=>{
  initPageLoad(); 
});


function initPageLoad(){
  formInputs.nombre = document.getElementById("txtNombre");
  formInputs.email = document.getElementById("txtEmail");
  formInputs.mensaje = document.getElementById("message");

  document.getElementById("formulario").addEventListener("submit", (e)=>{
      const [errors, isValid] = validateForm(); 
      if(!isValid) {
          alert("Formulario no Válido");
          console.log("Form Errors", errors);
          e.preventDefault();
      }
  });
}


function validateForm(){
  let errors = [];
  if(isEmpty(formInputs.nombre.value)){
      errors.push("El campo nombre no puede estar vacío");
  }
  if(!isEmail(formInputs.email.value)){
      errors.push("El campo email no es válido");
  }
  if(isEmpty(formInputs.mensaje.value)){
      errors.push("El campo mensaje no puede estar vacío");
  }
  console.log("Form Inputs", formInputs);
  return [errors, errors.length == 0];
}

function isEmpty(value) {
  return value.trim() === "";
}

function isEmail(value) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(value);
}



