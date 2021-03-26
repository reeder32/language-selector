// Site uses branching to return the result. - we'll use addition sum to return language
// jQuery is used to show and hide the result after questions are answered and submitted. (Tip: test your app several times with different answers.) - #output
//
// Business logic
function getScore(food, activity, animal, movie, sport) {
  return food + activity + animal + movie + sport;
}

// UI Logic
$(document).ready(function () {
  $('#food button').click(function (e) {
    e.preventDefault();
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
  $('#activity button').click(function (e) {
    e.preventDefault();
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
  $('#animal button').click(function (e) {
    e.preventDefault();
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
  $('#movie button').click(function (e) {
    e.preventDefault();
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
  $('#sport button').click(function (e) {
    e.preventDefault();
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

  $("#start-over").click(function () {
    $("#formOne").slideDown();
    $(".output").fadeOut();
    $("#food-card img").remove();
    $("#food-card p").remove();
    $("#activity-card img").remove();
    $("#activity-card p").remove();
    $("#animal-card img").remove();
    $("#animal-card p").remove();
    $("#movie-card img").remove();
    $("#movie-card p").remove();
    $("#sport-card img").remove();
    $("#sport-card p").remove();
  });

  $("#formOne").submit(function (e) {
    e.preventDefault();
    const foodValue = parseInt($("#food-card p").attr("value"));
    const activityValue = parseInt($("#activity-card p").attr("value"));
    const animalValue = parseInt($("#animal-card p").attr("value"));
    const movieValue = parseInt($("#movie-card p").attr("value"));
    const sportValue = parseInt($("#sport-card p").attr("value"));
    if (foodValue && activityValue && animalValue && movieValue && sportValue) {
      const score = getScore(animalValue, activityValue, animalValue, movieValue, sportValue)
      let language;
      if (score <= 5) {
        language = "Python"
      } else if (score > 5 && score <= 10) {
        language = "HTML"
      } else {
        language = "GO"
      }
      $("#formOne").slideUp();
      $(".reveal").fadeOut();
      $("#language").text(language);
      $(".output").fadeIn();
    } else {
      alert("Looks like you forgot a question...");
    }

  })

})