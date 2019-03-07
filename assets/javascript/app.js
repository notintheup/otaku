// Otaku javascript starts now
var topics = ["sara", "tom", "jenni", "george"];

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
  var queryURL = "https://api.jikan.moe/v3/search/anime?q=" + topics + "&page=1";
  console.log(queryURL)

  // Ajax call to API
  $.ajax({
    type: "GET",
    url: queryURL,
    // dataType: "JSON",
    // contentType: "application/json",
    success: function (search_anime) {
      console.log("MSG: " + search_anime);

    },
    error: function () {
      alert("ERROR!!");
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