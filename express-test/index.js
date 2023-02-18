var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are clever.');
console.dir(result);    // Score: -2, Comparatise