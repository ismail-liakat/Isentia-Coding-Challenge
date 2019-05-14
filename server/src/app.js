const express = require('express');
const requestPromise = require('request-promise');
var cors = require('cors');
const app = express();
const port = 8080;

// JSON object to hold :
// 1. url - The flickr API URL
// 2. qs - The query string to be appended to the api call
// 3. json - Should the api's response be treated as json?
var flickrAPIOptions = {
    url:'https://api.flickr.com/services/feeds/photos_public.gne',
    qs:{format:"json",nojsoncallback:"1"},
    json:true
};

app.use(cors());

app.get("/getPictures/:filters", filterParser, (request,response) => {
    flickrApiHandler(request,response);
});

app.get("/getPictures", (request,response) => {
    flickrApiHandler(request,response);
});

/** 
 * Middleware to get filter values from rest call 
 * and append it to the flickr api query string object
*/
function filterParser(request,response,next){
    // Flickr api requires tags to be comma separated
    // split("+").join() will replace all + chars with a comma
    flickrAPIOptions.qs.tags = request.params.filters.split("+").join();
    next();
}

/**
 * Function to 
 * - call the flickr api, 
 * - handle success / failure
 * - send the json back to the client 
 */
function flickrApiHandler(request,response){
    // Call the flickr api
    requestPromise(flickrAPIOptions)
    .then((apiResponse)=>{ // Success handler
        var responseToClient = {
            returnCode:0,
            pictures:apiResponse.items
        };
        response.json(responseToClient);
    }).catch(()=>{ // Error handler
        var responseToClient = {
            returnCode:1,
            errorMessage:"There was an issue with the server. Please try again."
        };
        response.json(responseToClient);
    });
}

app.listen(port, () => {
    console.log(`Server Started Successfully at ${port}`);
});