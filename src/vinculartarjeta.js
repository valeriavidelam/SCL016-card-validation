//Import the function to validate the creditcard
import validator from './validator.js';

//Create the event to my "ValidarTC" bttn to generate the 'validator.js' instruction 
const bttnValidar = document.getElementById ("validarTC");

//DUDA: He revisado que a veces ponen la opción getElementByid y Eventlistener en una misma línea, ¿Influye en algo?

//I give the instruction that when clicking on the button the validation is generated
bttnValidar.addEventListener ("click", () => {

//I generate an event to register the 'numberTC' like and object.
    const numberTC = document.getElementById ('numberTC');

//And generate this variable to register the event to validator the CC and  maskify it.
    const isValid = validator.isValid(numberTC.value)
    const maskify = validator.maskify(numberTC.value)
    

//With an 'alert' I sentence that if the card is valid it appears with a mask and everything with a "valid message" 

    if (isValid===true) {
        alert ("La tarjeta " + maskify + " es válida" );    
    }

//And if not, with an alert that says it is invalid.
    else {
        alert ("La tarjeta " + maskify + " es inválida");
    }

});



