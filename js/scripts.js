// Site uses branching to return the result. - we'll use addition sum to return language
// jQuery is used to show and hide the result after questions are answered and submitted. (Tip: test your app several times with different answers.) - #output
//
// Business logic


// UI Logic
$(document).ready(function () {
  $('#food button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    const index = $(this).attr("name");
    console.log(index);
    $("#food-card img").remove();
    $("#food-card p").remove();
    if (txt && index) {
      $("#food-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $("#food-card").append(`<p value="${index}">${txt}</p>`);
      $(".reveal").fadeIn();
    }
  });
  $('#activity button').on('click', function () {
    let txt = $(this).text().toLowerCase();
    const index = $(this).attr("name");
    $("#activity-card img").remove();
    $("#activity-card p").remove();
    if (txt && index) {
      if (txt === "what's activity?") {
        txt = "potato";
      }
      $("#activity-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $("#activity-card").append(`<p value="${index}">${txt}</p>`);
      $(".reveal").fadeIn();
    }
  });
  $('#animal button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    const index = $(this).attr("name");
    $("#animal-card img").remove();
    $("#animal-card p").remove();
    if (txt && index) {
      $("#animal-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $("#animal-card").append(`<p value="${index}">${txt}</p>`);
      $(".reveal").fadeIn();
    }
  });
  $('#movie button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    const index = $(this).attr("name");
    $("#movie-card img").remove();
    $("#movie-card p").remove();
    if (txt && index) {
      $("#movie-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $("#movie-card").append(`<p value="${index}">${txt}</p>`);
      $(".reveal").fadeIn();
    }
  });
  $('#sport button').on('click', function () {
    const txt = $(this).text().toLowerCase();
    const index = $(this).attr("name");
    $("#sport-card img").remove();
    $("#sport-card p").remove();
    if (txt && index) {
      $("#sport-card").append(`<img src="img/${txt}.jpg" alt="this is a picture of your favorite food.">`);
      $("#sport-card").append(`<p value="${index}">${txt}</p>`);
      $(".reveal").fadeIn();
    }
  });

  $(".form-group").submit(function (e) {
    e.preventDefault();
    const foodValue = parseInt($("#food-card p").attr("value"));
    const activityValue = parseInt($("#activity-card p").attr("value"));
    const animalValue = parseInt($("#animal-card p").attr("value"));
    const movieValue = parseInt($("#movie-card p").attr("value"));
    const sportValue = parseInt($("#sport-card p").attr("value"));
    console.log(foodValue, activityValue, animalValue, movieValue, sportValue);
  })

})