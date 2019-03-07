//Redirect
<a href='https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code'>Login with AniList</a>
$query = [
    'client_id', '1698',
    'redirect_uri' , '{redirect_uri}', // https://notintheup.github.io/otaku/
    'response_type' , 'code'    
];


$url = 'https://anilist.co/api/v2/oauth/authorize?' . urldecode(http_build_query($query));

// ...
// echo "<a href='$url'>Login with Anilist</a>";

//Authorization
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query
        })
    };

fetch(url, options).then(handleResponse, handleError);

function handleResponse (response) {
    console.log(response);
}

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

  var search_anime = $(this).attr("name");
  var queryURL = "https://api.jikan.moe/v3/search/anime?q=jenni&page=1";
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