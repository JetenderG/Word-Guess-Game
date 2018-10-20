var rndWord;
var rndWordArray = []
var letterNum = [];
var createArray = [];
var alpharray = [];
var alphabetUnderscore = [];
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
  guesses: 0,
  wins: 0,
  loses: 0,
  wordSelected: "",
  unSC: "",
  numRemaining: 10,
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

      rndWordArray = rndWord.split()


    }



  },
  //Generates the UnderScores
  "numUnderScores": function () {
    // var wordlength = this.wordSelected.length;
    for (var i = 0; i < this.wordSelected.length; i++) {
      letterNum.push("_ ");

    }

    return letterNum.join("");

  }, //Number guesses or user input placed 
  "guesses": function () {
    var limit = 15;

    if (this.guesses < limit) {
      this.guesses++
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
    return alphabetUnderscore.join("");
  },

  "replceUC": function (input) {

    alphabetUnderscore.forEach(function (item, index) {

      if (input === item) {
        alphabetUnderscore[index] = input;
      }
    })
  },

  "guessremaing": function () {

    this.guesses++;
  },
  // search word thorugh use input 
  "search": function () {
    for (var i = 0; i < this.wordSelected.length; i++) {
      if (input === "b") {};
    }
  },



  // Look into wheather you win or lose 
  "gameWL": function () {
    this.wins += 1;
    this.loses += 1;
  }

};


// finding specfic letters
// return index value of letter
//replace _ with letter
//increment wins/loss
//deincrement guesses 






document.addEventListener("keyup", function (event) {
    //funt();
    //funct2();
    var input = event.key;

    if (input === halloween.alophabet.includes(input)); {
      halloween.guessremaing();

      if (input != alpharray) {
        halloween.replceUC();
      }



    }
  }

);


document.querySelector(".numguess").innerHTML = "Guesses Remaining :  " + halloween.guesses;
document.querySelector(".wordGuess").innerHTML = letterNum.join(" ");
document.querySelector(".wins").innerHTML = "wins :  " + halloween.wins;
document.querySelector(".alguess").innerHTML = halloween.guesses;
document.write(halloween.guesses);


//+ halloween.numUnderScores());

console.log(alpharray);
console.log(halloween.computerWord());
console.log(halloween.numUnderScores());
console.log(letterNum);
console.log(halloween.arraycreation());
console.log(halloween.alphcreate());
console.log(createArray);
console.log(halloween.alphaunderscore());
console.log(rndWordArray);
console.log(halloween.guessremaing());
//document.querySelector("gamepad").addEventListener(onkeyup, "")


//