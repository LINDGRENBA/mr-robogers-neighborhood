// BUSINESS LOGIC
let wrongNumber = 'Please enter a positive, whole number.';

let checkNumbers = function(userNumber) {
  if(userNumber < 0) {
    return wrongNumber;
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