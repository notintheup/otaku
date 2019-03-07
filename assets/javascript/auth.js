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