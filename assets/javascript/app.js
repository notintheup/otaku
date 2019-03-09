// Otaku javascript starts now
var topics = ["tree"];

//Function to render anime cards
function renderAnime() {
  $(".table-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<td>");
    a.addClass("auto-td");
    a.attr("otaku-name", topics[i]);
    a.text(topics[i]);
    $(".table-view").append(a);
    $("#lookup-value").empty();
  }
}

//Function to display anime 
function displayAnime() {

  // var search_anime = $(this).attr("name");
  var queryURL = "https://api.jikan.moe/v3/search/anime?q=" + topics + "&limit=4";
  console.log(queryURL)

  // Ajax call to API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function (response) {

    for (var i = 0; i < response.results.length; i++) {
      // console.log(response.results[i])
      var animeURL = response.results[i].image_url;
      var table = $("<table>");
      var animeDiv = $("<td class= row>");
      var newImg = $("<img>");
      newImg.attr("src", animeURL);
      newImg.attr("rated", response.results[i].rated)
      newImg.attr("title", response.results[i].title)
      newImg.attr("synopsis", response.results[i].synopsis)
      newImg.addClass("image");
      table.append(animeDiv);
      animeDiv.append(newImg);
      var ratings = $("<p>").text("rated: " + response.results[i].rated);
      var title = $("<p>").text("Title: " + response.results[i].title);
      animeDiv.append(title, ratings);
      $("#anime-view").append(animeDiv);

    }
  })
}
//Click handlers start now
$("#search-otaku").on("click", function (event) {
  event.preventDefault();
  var lookup = $("#lookup-value").val().trim();
  topics.push(lookup);
  console.log(lookup);

})
displayAnime();