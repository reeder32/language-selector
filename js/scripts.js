// Site uses branching to return the result. - we'll use addition sum to return language
// jQuery is used to show and hide the result after questions are answered and submitted. (Tip: test your app several times with different answers.) - #output
//
// Business logic


// UI Logic
$(document).ready(function () {
  $('#food button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    if (txt) {
      $("#food-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $(".reveal").show();
    }
  });
  $('#activity button').on('click', function () {
    let txt = $(this).text().toLowerCase();
    console.log(txt);
    if (txt) {
      if (txt === "what's activity?") {
        txt = "potato";
      }
      $("#activity-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $(".reveal").show();
    }
  });
  $('#animal button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    if (txt) {
      $("#animal-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $(".reveal").show();
    }
  });
  $('#movie button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    if (txt) {
      $("#movie-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $(".reveal").show();
    }
  });
  $('#sport button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    if (txt) {
      $("#sport-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $(".reveal").show();
    }
  });
})