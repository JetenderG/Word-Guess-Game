var rndWord;
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


    // var wordlength = this.wordSelected.length;

    for (var i = 0; i < this.wordSelected.length; i++) {
      //__________________________________
      document.write("_ ")
      //________________________________________
    };


  },

  "arraycreation": function () {

    var createArray = this.wordSelected.split("");

    return createArray;
  },


  "search": function () {


  }




};


// finding specfic letters
// return index value of letter
//replace _ with letter
//increment wins/loss
//deincrement guesses 






//document.addEventListener("onkeyup", function () {if (onkeyup === halloween.wordSelected));

var word = halloween.computerWord();
console.log(halloween.numUnderScores());
console.log(halloween.wordSelected);
console.log(halloween.arraycreation());
//+ halloween.numUnderScores());

//document.querySelector("gamepad").addEventListener(onkeyup, "")