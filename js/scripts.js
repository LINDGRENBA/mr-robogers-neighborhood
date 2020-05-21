// BUSINESS LOGIC
let checkNumbers = function(userNumber, userName) {
  let numberArray = [];
  let reverseArray = [];

  if (userNumber >= 0) {
    for (let i = 0; i <= userNumber; i++) {
      let numberToString = i.toString(); 
      if (numberToString.includes('3')) {
        //check if user has entered name or if there is only whitespace
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
    //reverse the numberArray and push to reverseArray
    for(let i = numberArray.length - 1; i >= 0; i--) {
      reverseArray.push(numberArray[i]);
    }
    return [numberArray.join(', '), reverseArray.join(', ')];
  } 
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();

    let userNumber = parseInt($('#number').val());
    let userName = $("#name").val();
    let result = checkNumbers(userNumber, userName);
    // result will have value of returned array [numberArray, reverseArray]
    let resultFromZero = result[0];
    let resultReversed = result[1];

    // show range 0 to userNumber
    $('.number-range').text(resultFromZero);
    $('.results').slideDown();
    $('.reverse-div').slideDown();
    // show range userNumber to 0
    $('.reverse-button').click(function() {
      $('.number-range').text(resultReversed);
      $('.reverse-div').slideUp();
    });
  });
});