// Add interface to add a file with drag and drop or past a txt or use wikipedia api
// and save the result into a file in for exemple a json object


var txt;
var counts = {};
var keys = [];

function preload() {
  txt = loadStrings('rainbow.txt');
}


function setup() {
  noCanvas();
  var allwords = txt.join("\n");
  var tokens = allwords.split(/\W+/);
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (!/\d+/.test(word)) {
    if (counts[word] === undefined) {
      counts[word] = 1;
      keys.push(word);
    }else {
      counts[word] += 1; 
    }
    }
  }
  console.log(keys);
  keys.sort(compare);
  
  function compare(a,b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }
  
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    createDiv(key + " " + counts[key]);
  }
  
}

