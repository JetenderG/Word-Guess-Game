var halloween = {
  words: [
    "bone",
    "black Cat",
    "cemetery",
    "crypt",
    "bogeyman",
    "ghost",
    "WereWolf",
    "Grim Reaper",
    "Zombie",
    "Frankenstein",
    "candy",
    "witch"
  ],
  wins: 0,
  loses: 0,
  guessedLetters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ],
  letteNum: [],
  numRemaining: 10,
  ratio: "",
  //returns value between 0-12
  "randomNum": function () {
    var rndnum = Math.floor(Math.random() * 12);

    return rndnum;
  },
  //returns a index value from word array 
  "computerWord": function () {
    var rndWord = halloween["words"][this.randomNum()];
    return rndWord;
  },

  "numUnderScores": function (halloween) {
    var randomword = halloween[this.computerWord()];
    for (var i = 0; i < randomword.length;)
    {
      return console.log("_ ")
    }

    //var numUnderSpace = numHowMan;
  },
};

function lettelength (){

  var fucUnSc = halloween.computerWord();

  return fucUnSc.length;

}
console.log(halloween.numUnderScores());
console.log(halloween.computerWord());
//+ halloween.numUnderScores());