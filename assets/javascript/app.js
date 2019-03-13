// Otaku javascript starts now
var topics = ["code"];
// console.log(topics);
//Function to render anime cards

/** function renderAnime() {
  var tb = $("#table");
  $("#anime-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<td>");
    a.addClass("auto-td");
    a.attr("otaku-name", topics[i]);
    a.text(topics[i]);
    $(".table-view").append(a);
    $("#lookup-value").empty();
  }
}
*/
//Function to display anime 
function displayAnime() {

  // var search_anime = $(this).attr("name");
  var queryURL = "https://api.jikan.moe/v3/search/anime?q=" + topics + "&limit=5";
  // console.log(queryURL)
  $("#anime-view").empty();
  // Ajax call to API
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function (response) {

      for (var i = 0; i < response.results.length; i++) {
        if (response.results[i].rated !== 'R'){
        var animeURL = response.results[i].image_url;
        var table = $("<table id=table>");
        var animeDiv = $("<td class = row >");
        var imageDiv = $("<div class = imagebox>");
        var contentDiv = $("<div class = content>");
        var newImg = $("<img class = img>");
        newImg.attr("src", animeURL);
        newImg.attr("rated", response.results[i].rated);
        newImg.attr("title", response.results[i].title);
        newImg.attr("synopsis", response.results[i].synopsis);
        newImg.addClass("image");
        table.append(animeDiv);
        // animeDiv.append(newImg);

        var ratings = $("<p class= text-format>").text("Rating: " + response.results[i].rated);
        var title = $("<p class= text-format>").text("Title:  " + response.results[i].title);
        var synopsis = $("<p class= text-format>").text("Synopsis:  " + response.results[i].synopsis);
        imageDiv.append(newImg);
        contentDiv.append(title, ratings, synopsis);
        animeDiv.append(imageDiv, contentDiv);
        $("#anime-view").append(animeDiv);

      }
    }
    });
}
//Click handlers start now
$("#search-otaku").on("click", function (event) {
  event.preventDefault();
  var lookup = $("#lookup-value").val().trim();
  topics = lookup;
  // topics.push(lookup);
  // console.log(lookup);
  displayAnime();
  //renderAnime();
})
displayAnime();