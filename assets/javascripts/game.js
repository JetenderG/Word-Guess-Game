var rndWord;
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
  wordSelected: "",


  letteNum: [],
  numRemaining: 10,
  ratio: "",

  "randomNum": function () {
    var rndnum = Math.floor(Math.random() * 12);
    return rndnum;
  },
  "computerWord": function () {
    var rndWord = halloween["words"][this.randomNum()];
    this.wordSelected = rndWord;

    return rndWord;
  },
  "numUnderScores": function () {


    var wordlength = this.wordSelected.length;
    var unSC = "_ ";

    for (var i = 0; i < this.wordSelected.length; i++) {

      var repeat = console.log("_ ");


    };

    return repeat;

    return wordlength;
  },

};










var word = halloween.computerWord();

console.log(halloween.wordSelected);
console.log(halloween.numUnderScores());

//+ halloween.numUnderScores());

//document.querySelector("gamepad").addEventListener(onkeyup, "")