//Function to display api 
function displayAnime() {

  var search_anime = $(this).attr("name");
  var queryURL = "https://api.jikan.moe/v3/search/anime?q=";
  console.log(queryURL)

  // Ajax call to giphy API
  $.ajax({
    type: "GET",
    url: queryURL,
    // dataType: "JSON",
    // contentType: "application/json",
    success: function (data) {
      console.log("MSG: " + data);

    },
    error: function () {
      alert("ERROR!!");
    }

  })
}