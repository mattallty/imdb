var imdb = require("../lib/imdb.js")

imdb("nm0000354", function(err, data) {
    if(err)
        throw err;
 
    console.log(data);
});