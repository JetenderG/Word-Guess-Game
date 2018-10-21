var rndWord;
var rndWordArray = [];
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

    this.alophabet.forEach(function (item, index) {

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

    this.genRndArray.forEach(function (item, index) {

      if (input === item) {
        letterNum[index] = input;
      }
    })

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

    if (halloween.alophabet.includes(input) == true); {
      halloween.guessremaing();

      if (input != alpharray) {
        halloween.replceUC();
        halloween.guessremaing();
      }




    }
  }

);


document.querySelector(".numguess").innerHTML = "Guesses Remaining :  " + halloween.guesses;
document.querySelector(".wins").innerHTML = "Winds :  " + halloween.wins;
document.querySelector(".lose").innerHTML = "Loses :  " + halloween.loses;

document.querySelector(".alguess").innerHTML = "Letter Guessed  :" + halloween.alphaunderscore();
document.querySelector(".wordGuess").innerHTML = "Word to be Guessed :  " + halloween.numUnderScores();

document.write(halloween.guesses);


//+ halloween.numUnderScores());

console.log(letterNum);
console.log(halloween.computerWord());
console.log(halloween.numUnderScores());
console.log(letterNum);
console.log(halloween.arraycreation());
console.log(halloween.alphcreate());
console.log(createArray);
console.log(halloween.alphaunderscore());
console.log(halloween.genRndArray());
console.log(halloween.guessremaing());
//document.querySelector("gamepad").addEventListener(onkeyup, "")


//