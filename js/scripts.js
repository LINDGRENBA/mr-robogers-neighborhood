// BUSINESS LOGIC
let checkNumbers = function(userNumber, userName) {
  let wrongNumber = 'Please enter a positive, whole number.';
  let numberArray = [];
  let reverseArray = [];

  if (userNumber >= 0) {
    for (let i = 0; i <= userNumber; i++) {
      let numberToString = i.toString(); 
      if (numberToString.includes('3')) {
        if (userName === '') {
          numberArray.push('Won\'t you be my neighbor?');
        } else {
          numberArray.push('Won\'t you be my neighbor, ' + userName + '?' );
        }
      } else if (numberToString.includes('2')) {
        numberArray.push('Boop!');
      } else if (numberToString.includes('1')) {
        numberArray.push('Beep!');
      } else {
        numberArray.push(i);
      }
    }
    for(let i = numberArray.length - 1; i >= 0; i--) {
      reverseArray.push(numberArray[i]);
    }
    return [numberArray.join(', '), reverseArray.join(', ')];
  } else {
    return wrongNumber;
  }
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();
    // get range from 0 to user's number
    let userNumber = parseInt($('#number').val());
    let userName = $("#name").val();
    let result = checkNumbers(userNumber, userName);
    // result will have value of array [numberArray, reverseArray]
    let resultFromZero = result[0];
    let resultFromUserNumber = result[1];

    // show range 0 to userNumber
    $('.number-range').text(resultFromZero);
    $('.results').slideDown();
    $('.reverse-div').slideDown();
    // show range userNumber to 0
    $('.reverse-button').click(function() {
      $('.number-range').text(resultFromUserNumber);
      $('.reverse-div').slideUp();
    });
  });
});