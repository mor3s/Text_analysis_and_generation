//Diastic Machine
//Poetry Generator
//take a word and a text and for each letter of the word take a word in the text with the same letter at the same position



function diastic(seed, words) {
  
  var phrase = "";
  var currentWord = 0
  for (var i = 0; i < seed.length; i++) {
    var c = seed.charAt(i);
    
    for (var j = currentWord; j < words.length; j++) {
       if(words[j].charAt(i) == c) {
         phrase = phrase + words[j] + " ";
         currentWord = j + 1;
          //console.log(words[j]);
         break;
       }
    }
  }
  
  return phrase;
}











var srctxt;
var words;

function preload() {
  srctxt = loadStrings("rainbow.txt");
}


function setup() {
  noCanvas();
  srctxt = join(srctxt, ' ');
  words = splitTokens(srctxt, ' ,!.?');
  
  var seed = select("#seed");
  var submit = select("#submit");
  submit.mousePressed(function() {
    var phrase = diastic(seed.value(), words);
    //createP(seed.value()); 
    createP(phrase); 
  });
}

