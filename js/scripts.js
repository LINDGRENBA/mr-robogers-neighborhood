// BUSINESS LOGIC






// USER INTERFACE LOGIC

$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();

    let userNumber = $('#number').val();
    $('.number-range').text(userNumber);
  });
});