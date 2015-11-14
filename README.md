imdb
====

> "They told me I couldn't do it. So that's why I did it." - Anonymous

An IMDB API for getting information on your favourite movies!

# Running / Building
To run the example:

    $ npm install
    $ node example/movie.js
    
# API / Usage

Provide the IMDB ID and go!
```
var imdb = require('imdb');

imdb('tt0066995', function(err, data) {
    if(err)
        throw err;

    console.log(data);
});
```