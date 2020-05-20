// BUSINESS LOGIC
let checkNumbers = function(userNumber) {
  let wrongNumber = 'Please enter a positive, whole number.';
  let numberArray = [];

  if (userNumber >= 0) {
    for (let i = 0; i <= userNumber; i++) {
      // change i value into string 
      let numberToString = i.toString();
      // check if string includeds 3, 2 or 1     
      if (numberToString.includes('3')) {
        numberArray.push('Won\'t you be my neighbor?');
      } else if (numberToString.includes('2')) {
        numberArray.push('Boop!');
      } else if (numberToString.includes('1')) {
        numberArray.push('Beep!');
      } else {
        numberArray.push(i);
      }
    }
    return numberArray.join(', ');
  } else {
    return wrongNumber;
  }
};


// USER INTERFACE LOGIC
$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();

    let userNumber = parseInt($('#number').val());
    let result = checkNumbers(userNumber);
    $('.number-range').text(result);
    $('.results').slideDown();
  });
});