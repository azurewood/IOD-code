var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are clever.');
console.dir(result);    // Score: -2, Comparatise


let shoppingList=["apple","kiwi fruit","banana"]
console.log(shoppingList)
shoppingList.unshift("pear")
console.log(shoppingList)
shoppingList[2]="pineapple"
console.log(shoppingList)
shoppingList.push("eggs")
console.log(shoppingList)
shoppingList.shift()
console.log(shoppingList)