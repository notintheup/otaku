// Otaku javascript starts now
var topics = ["code"];
// console.log(topics);
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
        console.log(response.results[i]);
        console.log(response.results[i].synopsis);
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

        var ratings = $("<p class= text-format>").text("Rating: " + response.results[i].rated);
        var title = $("<p class= text-format>").text("Title:  " + response.results[i].title);
        var synopsis = $("<p class= text-format>").text("Synopsis:  " + response.results[i].synopsis);
        imageDiv.append(newImg);
        contentDiv.append(title, ratings, synopsis);
        animeDiv.append(imageDiv, contentDiv);
        $("#anime-view").append(animeDiv);

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
})
displayAnime();