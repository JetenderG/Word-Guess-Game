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
  "randomNum": function () {
    var rndnum = Math.floor(Math.random() * 12);

    return rndnum;
  },
  "computerWord": function () {
    var rndWord = halloween["words"][this.randomNum()];
    return rndWord;
  },
  "numUnderScores": function () {
    var numHowMany = halloween.computerWord();

    var wordlength = numHowMany.length;


    return wordlength;
    //var numUnderSpace = numHowMan;
  },
};


console.log(halloween.numUnderScores())
//+ halloween.numUnderScores());