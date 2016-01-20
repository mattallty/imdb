var imdb = require('../index');

imdb('tt2277860', function(err, data) {
    if(err)
        throw err;
    
    console.log(data);
});