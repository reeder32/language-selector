// Site uses branching to return the result. - we'll use addition sum to return language
// jQuery is used to show and hide the result after questions are answered and submitted. (Tip: test your app several times with different answers.) - #output
//
// Business logic


// UI Logic
$(document).ready(function () {
  $('#dropdown-animal button').on('click', function () {
    $('#datebox').val($(this).text());
  });
})