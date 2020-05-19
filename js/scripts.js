// BUSINESS LOGIC
let wrongNumber = 'Please enter a positive, whole number.';
let numberArray = [];

let checkNumbers = function(userNumber) {
  if(userNumber < 0) {
    return wrongNumber;
  } else {
    for (let i = 0; i <= userNumber; i++) {
      numberArray.push(i);
    }
    return numberArray;
  }
};





// USER INTERFACE LOGIC

$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();

    let userNumber = $('#number').val();
    let result = checkNumbers(userNumber);
    $('.number-range').text(result);
  });
});