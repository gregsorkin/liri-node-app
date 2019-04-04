// Include other documents and API keys, as per the instructions
require("dotenv").config();

const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify)
const moment = require("moment");
const fs = require("fs");
const axios = require("axios");
const divider = "\n- = - = = - = = = - = = = = - = = = - = = - = -";


// Run the Bands In Town/Concert API function
function bandsInTown(input) {
    console.log("\n Searching for " + input + "'s next shows...");
    console.log("\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

    let queryURL = "http://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(function(response) {
        //console.log(response.data);  
       for (let i = 0; i < response.data.length; i++) {

            console.log("\nVenue Name: " + response.data[i].venue.name + "\nVenue Location: " 
                    + response.data[i].venue.city + ", " + response.data[i].venue.region +  
                    "\nDate of Event: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
            console.log(divider);
        }
    })
    .catch(function(err) {
        console.log("Error " + err + " has occurred.");
        return;
});
};

// Run the Spotify API function
function spotifyThisSong(input) {

    if (!input) {
        input = "The Sign";
    }
    
    spotify.search(
        {type: "track", query: input}).then(function(data) {
        let spotifyData = data.tracks.items[0];
        console.log(divider + "\nArtist(s): " + spotifyData.artists[0].name + "\nSong name: " + spotifyData.name
                    + "\nPreview Link: " + spotifyData.album.external_urls.spotify + "\nAlbum name: " + spotifyData.album.name
                    + divider);
        }).catch(function(err) {
                console.log("Error " + err + " has occurred.");
                return;
        });
};

// Run the OMDB API function
function omdb(input) {
    if (!input) {
        input = "Mr. Nobody";
    };

    if (input === "Mr. Nobody") {
        console.log("*** If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/ ***");
        console.log("*** It's on Netflix! ***");
    };

    let queryURL = "http://www.omdbapi.com/?t=" + input + "&apikey=trilogy&plot=short&tomatoes=true";

    axios.get(queryURL).then(function(response) {
        console.log(divider + "\nTitle: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating
        + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " +
        response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + divider);
    });
};

// Run the Do What It Says function
function doWhat() {
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
        }
        
        let text = data.split(",");
        spotifyThisSong(text);
    });
};

// Set up the switch cases
function switchCase(action, input) {
    switch (action) {
        case "concert-this": bandsInTown(input);
        break;

        case "spotify-this-song": spotifyThisSong(input);
        break;

        case "movie-this": omdb(input);
        break;

        case "do-what-it-says": doWhat();
        break;
    }
};

// Wrapping the switchCase in another function was the only way I and my tutor (Leah D.) could get this to work
var runLiri = function(arg1, arg2) {
    switchCase(arg1, arg2);
};

// Run the 'wrapper' function from the start
runLiri(process.argv[2], process.argv.slice(3).join(" "));
