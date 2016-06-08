
var randomNumbers = {
  randNumberFuncCount : 2,
  colour: ['blue', 'green', 'yellow', 'purple'],
  randNumberOne : function(){
   var a = (Math.floor((Math.random() * 10) + 1));
   console.log(a);
   return a;
 },

  randNumberTwo : function(){
    var a = (Math.floor((Math.random() * 10) + 1));
    console.log(a);
    return a;
  }
};


if (randomNumbers.randNumberOne() == randomNumbers.randNumberTwo()) {
  console.log('they match')
} else {
  console.log('no match')
  console.log(randomNumbers.colour[Math.floor(Math.random(randomNumbers.colour) * randomNumbers.colour.length)])
}
