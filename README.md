imdb
====
![npm](https://img.shields.io/npm/v/imdb.svg)
![downloads](https://img.shields.io/npm/dt/imdb.svg)

An IMDB API for getting information on your favourite movies!

## Installing
Install via [npm](https://npmjs.com)

    $ npm install imdb

## Running / Building
To run the example:

    $ npm install
    $ node examples/movie.js
    
## API / Usage

Provide the IMDB ID and go! Also see the `examples/` folder for inspiration!

```javascript
var imdb = require('imdb');

imdb('tt2277860', function(err, data) {
  if(err)
    console.log(err.stack);

  if(data)
    console.log(data);
});
```