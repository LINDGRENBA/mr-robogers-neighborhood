// BUSINESS LOGIC
let wrongNumber = 'Please enter a positive, whole number.';
let numberArray = [];

let checkNumbers = function(userNumber) {
  if(userNumber < 0) {
    return wrongNumber;
  } else {
    // create a for loop that counts from 0 to the user's number and push the number to array
    for (let i = 0; i <= userNumber; i++) {
      // NEED TO CHANGE i TO STRING AND THEN CHECK IF STRING INCLUDES 1? - IF SO, WILL NEED TO PARSE INT i WHEN PUSHING BACK TO ARRAY
      let numberToString = i.toString();
      if (i === 3) {
        numberArray.push('Won\'t you be my neighbor?');
      } else if (i === 2) {
        numberArray.push('Boop!');
      } else if (i === 1) {
        numberArray.push('Beep!');
      } else {
        numberArray.push(i);
      }
    }

    return numberArray;
  }
};

// Need to ParseInt numbers before pushing to array




// USER INTERFACE LOGIC

$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();

    let userNumber = parseInt($('#number').val());
    let result = checkNumbers(userNumber);
    $('.number-range').text(result);
  });
});