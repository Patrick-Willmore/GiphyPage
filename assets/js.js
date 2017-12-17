var topics =  ["plants", "cities", "people", "clouds", "boats", "faces", "ocean"];

//api key = HBsx5MFBfKeBhf3OIRkGr2Gpixr5JjbI


var apiKey = 'HBsx5MFBfKeBhf3OIRkGr2Gpixr5JjbI';
// Perfoming an AJAX GET request to our queryURL
var search;

var queryUrl = "https://api.giphy.com/v1/gifs/search?q=timelapse-" + search + "&api_key=" + apiKey + "&limit=10";

let recentClick;
// queryUrl += apiKey




$.ajax({
    url: queryUrl,
    method: 'GET',
}).done(function(result) {
    // console.log(result.response.docs[0].headline.main);
    console.log(result.data[0]);
}).fail(function(err) {
    throw err;
});
// After the data from the AJAX request comes back

for (var i = 0; i < topics.length; i++) { 
    var buttons = $(`<button id ="${topics[i]}" value="${i}">${topics[i]}</button>`) 
    buttons.appendTo('#timelapseButtons'); 
} 

$("button").click(function(event) {
    $("#Gifs").empty();
    recentClick = ($(this).val());
    search = topics[recentClick];
    queryUrl = "https://api.giphy.com/v1/gifs/search?q=timelapse-" + search + "&api_key=" + apiKey + "&limit=10";
    resultArray =[];
    $.ajax({
        url: queryUrl,
        method: 'GET',
    }).done(function(result) {      
        // console.log(result.response.docs[0].headline.main);
        console.log(result.data);
        resultArray.push(result.data);
        console.log(resultArray);
        for (var j = 0; j < resultArray[0].length; j++) { 
            // $("#Gifs").html(`<img src="${resultArray[0][j].bitly_gif_url}">${j}</img>`);
            var myString = `<div class = 'stuff'><img src="${resultArray[0][j].images.downsized.url}"> <figcaption>Rating:${resultArray[0][j].rating.toUpperCase()}</figcaption></img></div>`;
            $("#Gifs").append(myString);
            // buttons.appendTo('#Gifs'); 
        } 
     
    }).fail(function(err) {
        throw err;
    });
// for (var i = 0; i < topics.length; i++) { 
//     $("Gifs").html(`<img src="${resultArray[0][i].bitly_gif_url}">`);
//     // buttons.appendTo('#Gifs'); 
// } 


});
