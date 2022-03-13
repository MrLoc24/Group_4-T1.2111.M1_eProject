$(function () {
  /* ---------------------------------------------------
    Code to handle Jumpotron animation
    ----------------------------------------------------- */
  // Changing background image on Jumpotron

  $("#change_honda_bg").click(function () {
    var imageUrl = "img/logo/honda.jpg";
    $("div#jumpo_heading").children("h1").html("HONDA");
    $("div#jumpo_heading").find("p:first-of-type").html("Trusted Brand");
    $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
    $(".jumpo_heading").css("color", "#a0a0a0");
    var el = $("#jumpo_heading"),
      newone = el.clone(true);

    el.before(newone);

    $("." + el.attr("class") + ":last").remove();
    //code to remove and clone animation in order to reset for every click
  });

  $("#change_suzuki_bg").click(function () {
    var imageUrl = "img/logo/suzuki-logo.jpg";
    $("div#jumpo_heading").children("h1").html("SUZUKI");
    $("div#jumpo_heading").find("p:first-of-type").html("Establish since 1909");
    $(".jumpotron").children("h1").empty();
    $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
    $(".jumpo_heading").css("color", "#054b93");
    var el = $("#jumpo_heading"),
      newone = el.clone(true);

    el.before(newone);

    $("." + el.attr("class") + ":last").remove();
  });

  $("#change_ford_bg").click(function () {
    var imageUrl = "img/logo/ford-logo.jpg";
    $("div#jumpo_heading").children("h1").html("FORD");
    $("div#jumpo_heading").find("p:first-of-type").html("Power to conquer");
    $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
    $(".jumpo_heading").css("color", "#dc7147");
    var el = $("#jumpo_heading"),
      newone = el.clone(true);

    el.before(newone);

    $("." + el.attr("class") + ":last").remove();
  });
  $("#change_home_bg").click(function () {
    var imageUrl = "img/logo/Home-logo.jpg";
    $("div#jumpo_heading").children("h1").html("Autoworld.com");
    $("div#jumpo_heading")
      .find("p:first-of-type")
      .html("Being updated being smart");
    $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
    $(".jumpo_heading").css("color", "#fff");
    var el = $("#jumpo_heading"),
      newone = el.clone(true);

    el.before(newone);

    $("." + el.attr("class") + ":last").remove();
  });
  $("#change_features_bg").click(function () {
    var imageUrl = "img/logo/features-banner.jpg";
    $("div#jumpo_heading").children("h1").html("Features");
    $("div#jumpo_heading")
      .find("p:first-of-type")
      .html("Highest price - Lowest price - Financial Services");
    $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
    $(".jumpo_heading").css("color", "#d8345f");
    var el = $("#jumpo_heading"),
      newone = el.clone(true);

    el.before(newone);

    $("." + el.attr("class") + ":last").remove();
  });
});
