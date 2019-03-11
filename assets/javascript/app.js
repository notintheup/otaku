// Otaku javascript starts now
var topics = ["code"];
// console.log(topics);
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
  // console.log(queryURL)

  // Ajax call to API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function (response) {

    for (var i = 0; i < response.results.length; i++) {
      console.log(response.results[i])
      var animeURL = response.results[i].image_url;
      var table = $("<table>");
      var animeDiv = $("<td class= row>");
      var newImg = $("<img>");
      newImg.attr("src", animeURL);
      newImg.attr("rated", response.results[i].rated)
      newImg.attr("title", response.results[i].title)
      newImg.attr("synopsis", response.results[i].synopsis)
      newImg.attr("url", response.results[i].url)
      newImg.addClass("image");
      table.append(animeDiv);
      animeDiv.append(newImg);
      var title = $("<h2>").text("Title: " + response.results[i].title);
      var ratings = $("<h3>").text("rated: " + response.results[i].rated);
      var synopsis = $("<p>").text("Synopsis: " + response.results[i].synopsis);
      var url = $("<a href>").text(response.results[i].url);
      animeDiv.append(title, [ratings, synopsis, url]);
      $("#anime-view").append(animeDiv);

    }
  })
}
//Click handlers start now
$("#search-otaku").on("click", function (event) {
  event.preventDefault();
  var lookup = $("#lookup-value").val().trim();
  topics.push(lookup);
  // console.log(lookup);
  displayAnime();
})
// Handler of animation
// $(document).on("click", ".image", detailsAnime);

displayAnime();