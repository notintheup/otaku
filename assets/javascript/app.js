// Otaku javascript starts now
var topics = ["otaku"];
//Function to display anime 
function displayAnime() {
  // var search_anime = $(this).attr("name");
  var queryURL = "https://api.jikan.moe/v3/search/anime?q=" + topics + "&limit=20";
  $("#anime-view").empty();
  // Ajax call to API
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function (response) {

      for (var i = 0; i < response.results.length; i++) {
        console.log(response.results[i]);
        if (response.results[i].rated == 'PG-13') {
          var animeURL = response.results[i].image_url;
          var url = response.results[i].url;
          var linkContainer = $("<a>");
          linkContainer.attr("href", url);
          var table = $("<table id=table>");
          var animeDiv = $("<td class=card>");
          var imageDiv = $("<div class = card-body>");
          var contentDiv = $("<div class = card-text>");
          var newImg = $("<img class = card-img-top>");
          newImg.attr("src", animeURL);
          newImg.attr("rated", response.results[i].rated);
          newImg.attr("title", response.results[i].title);
          newImg.attr("synopsis", response.results[i].synopsis);
          newImg.attr("url", response.results[i].url);
          table.append(imageDiv);
          var ratings = $("<p class= text-format>").text("Rating: " + response.results[i].rated);
          var title = $("<p class= text-format>").text("Title:  " + response.results[i].title);
          var synopsis = $("<p class= text-format>").text("Synopsis:  " + response.results[i].synopsis);

          imageDiv.append(newImg, title, ratings, synopsis);
          animeDiv.append(imageDiv, contentDiv);
          linkContainer.append(animeDiv);
          $("#anime-view").append(linkContainer);
        }
      }
    });
}

//Wikipedia search button
$("#searchWiki").click(function () {
  var q = document.getElementById("searchid").value;
  $('#results').html('');
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=10&generator=search&origin=*&gsrsearch=" + q, function (data) {
    $('#results').append('<p>Top Wiki Search Results for "' + q + '"</p>');
    $.each(data.query.pages, function (i) {
      $('#results').append("<p><a href='https://en.wikipedia.org/?curid=" + data.query.pages[i].pageid +
        "' target='_blank'>" + data.query.pages[i].title + "</a></p>");
    });

  });
});

$("#clearSearch").click(function () {
  document.getElementById("searchid").value = "";
  document.getElementById("results").innerHTML = "";
});

//Click handlers start now
$("#search-otaku").on("click", function (event) {
  event.preventDefault();
  var lookup = $("#lookup-value").val().trim();
  topics = lookup;
  displayAnime();
  $("#lookup-value").val("");
});
$(".img").on("click", function (event) {
  event - preventDefault();
});
displayAnime();
