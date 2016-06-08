var letter = {
  whereIsTheLetter : function(letter){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.indexOf(letter);
  }

};

var a = letter.whereIsTheLetter('x')
console.log(a)
