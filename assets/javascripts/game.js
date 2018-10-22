var rndWord;
var rndWordArray = [];
var letterNum = [];
var createArray = [];
var alpharray = [];
var alphabetUnderscore = [];
var guesses = 0;
var input;

var halloween = {
  words: [
    "Bone",
    "BlackCat",
    "Cemetery",
    "Crypt",
    "Bogeyman",
    "Ghost",
    "WereWolf",
    "GrimReaper",
    "Zombie",
    "Frankenstein",
    "Candy",
    "Witch"
  ],
  wins: 0,
  loses: 0,
  wordSelected: "",
  unSC: "",
  numRemaining: 15,
  ratio: "",
  alophabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  //Generates random Number
  "randomNum": function () {
    var rndnum = Math.floor(Math.random() * 12);
    return rndnum;
  },
  //Generates Random Word
  "computerWord": function () {
    var rndWord = halloween["words"][this.randomNum()];
    this.wordSelected = rndWord;
    return rndWord;
  },
  "genRndArray": function () {
    for (var i = 0; i < this.wordSelected.length; i++) {
      rndWordArray = this.wordSelected.split("");
      return rndWordArray
    }
  },
  //Generates the UnderScores
  "numUnderScores": function () {
    // var wordlength = this.wordSelected.length;
    for (var i = 0; i < this.wordSelected.length; i++) {
      letterNum.push("_ ");
    }
    return letterNum.join("");
  },
  //Number guesses or user input placed 
  "guessestyped": function () {
    var limit = 15;
    if (guesses < limit) {
      return guesses++
    }
  },
  // Generates an array the splits the letter of random word
  "arraycreation": function () {
    arraysplit = this.wordSelected.split("");
    for (var i = 0; i < this.wordSelected.length; i++) {
      createArray = arraysplit.join("");
    }
    return createArray;
  },
  // create underscore of alphabet
  "alphcreate": function () {
    var prealpharaay = this.alophabet.splice(0, 27, "_ ");
    var alpharray = prealpharaay.join(" ")
    return alpharray;
  },
  "alphaunderscore": function () {
    for (var i = 0; i < 27; i++) {
      alphabetUnderscore.push("_ ");
    }
    var alphaUS = alphabetUnderscore.join("");
    return alphaUS
  },
  "replceUC": function (input) {
    var index = halloween.alophabet.indexOf(input);
    if (index >= 0) {
      alphabetUnderscore[index] = input;
      return input;
    }
    return input;
  },

  // search word thorugh use input 
  "search": function (input) {
    this.genRndArray().forEach(function (items, index) {
      console.log(items);
      console.log(index);
      console.log(input);
    });
  },
  // Look into wheather you win or lose 
  "gameW": function () {
    if (this.genRndArray === letterNum) {
      this.wins += 1;
    }
  },
  "gameL": function () {
    if (this.guesses === 0 && this.genRndArray !== letterNum) {
      this.loses += 1;
    }
  }
};


// finding specfic letters
// return index value of letter
//replace _ with letter
//increment wins/loss
//deincrement guesses 





document.addEventListener("keyup", function (event) {
  input = event.key;
  if (halloween.alophabet.includes(input) == true); {
    halloween.guessestyped();
    if (alpharray.includes(input) == false) {
      halloween.replceUC(input);
      console.log(halloween.replceUC(input));
    };
  }
});
console.log(halloween.guessremaing)
console.log(halloween.computerWord());
console.log(halloween.guesses);
document.querySelector(".numguess").innerHTML = "Guesses Remaining :  " + guesses;
document.querySelector(".wins").innerHTML = "Winds :  " + halloween.wins;
document.querySelector(".lose").innerHTML = "Loses :  " + halloween.loses;
document.querySelector(".alguess").innerHTML = "Letter Guessed  :" + halloween.alphaunderscore();
document.querySelector(".wordGuess").innerHTML = "Word to be Guessed :  " + halloween.numUnderScores();
//+ halloween.numUnderScores());
console.log(letterNum);
console.log(halloween.numUnderScores());
console.log(letterNum);
console.log(halloween.arraycreation());
console.log(halloween.alphcreate());
console.log(createArray);
console.log(halloween.alphaunderscore());
console.log(halloween.genRndArray());
console.log(halloween.guessestyped());
console.log(halloween.search());
console.log(input);
console.log(alphabetUnderscore);
//console.log(halloween.replceUC(input));
//document.querySelector("gamepad").addEventListener(onkeyup, "")


//