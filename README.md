# **LIRI Bot (_Not_ Siri)**

## **Overview**
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## **Before You Begin**
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
Make a new GitHub repository called liri-node-app and clone it to your computer.
To retrieve the data that will power this app, you'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

* [Axios](https://www.npmjs.com/package/axios)

* You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)


## **Let's see it in action!**
Utilizing a switch case, we call a function based on the user input, from one of the following option:
* concert-this _+ artist name_
* spotify-this-song _+ song title_
* movie-this _+ movie title_

### **concert-this example**
* example input: `node liri.js concert-this foo fighters` yields:
![image of concert-this](https://i.imgur.com/h1UVUD9.jpg)
![image of concert-this](https://i.imgur.com/QFjJqIA.jpg)

### **movie-this example** (includes a result if you don't search a title, defaulting to _"Mr. Nobody"_)
* example input `node liri.js movie-this fight club`
* example input `node liri.js movie-this captain marvel`
* example input `node liri.js movie-this`
![image of movie-this](https://i.imgur.com/Gsk13hQ.jpg)

### **spotify-this-song example** (includes a result if you don't search a title, defaulting to _"The Sign"_)
* example input: `node liri.js spotify-this-song i feel good`
* example input `node liri.js spotify-this-song`
![image of spotify-this-song](https://i.imgur.com/fLvVBTH.jpg)
