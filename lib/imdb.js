var request = require('request');
var cheerio = require('cheerio');

module.exports = function(id, cb) {
  
  if(id.match(/tt\d+/i)) {
    
    request('http://www.imdb.com/title/' + id + '/', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        body = body.replace(/(\r\n|\n|\r)/gm,"").replace(/ +(?= )/g,'');
        $ = cheerio.load(body);
        
        var title = body.match(/<span class="itemprop" itemprop="name">([a-z0-9_ ]+)<\/span>/i)[1];
        var year = body.match(/<span class="nobr">\(<a href="\/year\/\d+\/\?ref_=tt_ov_inf">(\d+)<\/a>\)<\/span>/i)[1];
        
        if(body.match(/<meta itemprop="contentRating" content="([a-z0-9_-]+)">/i) != null) {
          var contentRating = body.match(/<meta itemprop="contentRating" content="([a-z0-9_-]+)">/i)[1];   
        } else { var contentRating = null; }
        
        if(body.match(/<time itemprop="duration" datetime="PT\d+\w+">(.+)<\/time>/i) != null) {
          var runtime = body.match(/<time itemprop="duration" datetime="PT\d+\w+">(.+)<\/time>/i)[1];   
        } else { var runtime = null; }
        
        var description = body.match(/<meta name="description" content="(.*?)" \/>/i)[1];
        
        if(body.match(/<span itemprop="ratingValue">(\d*\.?\d*)<\/span>/i) != null) {
          var rating = body.match(/<span itemprop="ratingValue">(\d*\.?\d*)<\/span>/i)[1];
        } else { var rating = null; }
        
        var poster = $('.image a img').attr('src');
        var genre = $('.infobar a').text().split(' ')[0].match(/([A-Z].*?[a-z])(?=[A-Z]|$)/gm);
        
        cb(null, {
            title: title,
            year: year,
            contentRating: contentRating || "N/A",
            runtime: runtime || "N/A",
            description: description,
            rating: rating || "N/A",
            poster: poster,
            genre: genre || ["N/A"]
        });
        
      } else { cb('Oops! Something went wrong on IMDB\'s side!', null); }
    });
    
  } else { cb('Woah!? That\'s not a valid id.', null); }
}