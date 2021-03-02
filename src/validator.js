const validator = {

  //This is the function to present the Numbers.
  isValid: (CCNumber) => {
  
  //Creating a variable to convert the numbers in an Array and then reverse it. 
  //With the 'split' option I divide the array into pieces and with 'reverse' option... I reverse the array.
    let convertir = CCNumber.split('').reverse();
    let suma = 0;
    let n = 0;
  
    //Here I assign position 0 to my string of numbers and tell it to order them considering those that are in even position.
    for (let i = 0; i < convertir.length; i++) {
      //Now, We multiply all the numbers that are in even position.
      if (i % 2 === 1) {
        n = Number(convertir[i]) * 2;
        // If resulting number is greater than 10, replace it with the sum of it's own digits.
        if (n >= 10) {
          n = (n - 10) + 1;
        }
       
      } else {
        n = Number(convertir[i]);
      }
      // Sum all the final digits
      suma = suma + n;
    }
    // Finally, take that sum and divide it by 10. If the remainder equals zero (0) the credit card number is valid.
    return suma % 10 === 0 ? true : false;
  },

//And this is to generate a maskify in to the numbers.

  maskify: (CCNumber) => {
    let maskifyNumber = CCNumber;
    let finalNumber = '';
    for (let i = 0; i < maskifyNumber.length; i++) {
      if (i < maskifyNumber.length - 4) {
        finalNumber = finalNumber + '#';
      } else {
        finalNumber = finalNumber + (maskifyNumber[i]); 
      }     
    }
    return finalNumber;
  }
};

export default validator ;