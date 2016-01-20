var imdb = require("../lib/imdb.js")

imdb("nm0544718", function(err, data) {
    if(err)
        throw err;
 
    console.log(data);
});