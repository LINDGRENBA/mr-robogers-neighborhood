// BUSINESS LOGIC
let checkNumbers = function(userNumber, userName) {
  let wrongNumber = 'Please enter a positive, whole number.';
  let numberArray = [];

  if (userNumber >= 0) {
    for (let i = 0; i <= userNumber; i++) {
      // change i value into string 
      let numberToString = i.toString();
      // check if string includeds 3, 2 or 1     
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
    return numberArray.join(', ');
  } else {
    return wrongNumber;
  }
};

let checkNumbersReversed = function(userNumber, userName) {
  let reverseArray = [];

    for (let i = userNumber; i >= 0; i--) {
      // change i value into string 
      let numberToString = i.toString();
      // check if string includeds 3, 2 or 1     
      if (numberToString.includes('3')) {
        if (userName === '') {
          reverseArray.push('Won\'t you be my neighbor?');
        } else {
          reverseArray.push('Won\'t you be my neighbor, ' + userName + '?' );
        }
      } else if (numberToString.includes('2')) {
        reverseArray.push('Boop!');
      } else if (numberToString.includes('1')) {
        reverseArray.push('Beep!');
      } else {
        reverseArray.push(i);
      }
    }
    return reverseArray.join(', ');
}


// USER INTERFACE LOGIC
$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();
    // get range from 0 to user's number
    let userNumber = parseInt($('#number').val());
    let userName = $("#name").val();
    let result = checkNumbers(userNumber, userName);
    $('.number-range').text(result);
    $('.results').slideDown();
    $('.reverse-div').slideDown();

    // reverse range to show from user's number to 0
    $('.reverse-button').click(function() {
      let reverseResult = checkNumbersReversed(userNumber, userName);
      $('.number-range').text(reverseResult);
      $('.reverse-div').slideUp();
    });
  });

});