/*
Create Object 
  words
  Methods

*/
//Global Variables
var Wrnd = "";
var rndWord = [];
var rndWordUC = [];
var alphabetUS = [];
var alphabetNC = [];
var keyinput;
/////////////////////////////////////////////////////////////////////////
//objects and variables
var halloween = {

    words: ["zombie", "skeleton", "bats"],
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    guess: 15,


    ////////////////////////////////////////////////////////////////////////
    //Methods
    "RndWord": function () {
        var rnd = Math.floor(Math.random() * 3)
        Wrnd = halloween["words"][rnd];
        for (var i = 0; i < Wrnd.length; i++) {
            rndWord = Wrnd.split("");
        }
        return rndWord;
    },
    "alphabetarray": function () {
        for (var i = 0; i < this.alphabet.length; i++) {
            alphabetUS.push("_ ");
            alphabetNC.push("_ ")
        }
        return alphabetNC.join("");
    },
    "RndWordUC": function () {

        for (var i = 0; i < rndWord.length; i++) {
            rndWordUC.push("_ ");
        }
        return rndWordUC.join("");
    },
    "remainingGuess": function () {
        if (this.guess = 0) {
            document.querySelector().innerHTML = " No More Guesses Remainings"
        } else {
            this.guess - 1;
        }
    },
    "replaceUCAlphabet": function () {


        this.alphabet.forEach(function (item, index) {
            if (keyinput === item) {
                console.log(alphabetNC);
                alphabetNC.splice(index, 1, keyinput)
            }
        })
    },
    "replaceUCword": function () {
        this.RndWord().forEach(function (item, index) {
            if (keyinput === item) {
                console.log(rndWordUC);
                rndWordUC.splice(index, 1, keyinput);
            }
        })
    }
};

console.log(rndWordUC);

document.addEventListener("keyup", function (event) {
    var input = event.key;
    keyinput = input;
    if (halloween.alphabet.includes(input) == true); {
        halloween.remainingGuess();
        if (alphabetNC.includes(input) == false) {
            halloween.replaceUCAlphabet();
        }
        if (rndWordUC.includes(input) == true) {
            halloween.replaceUCword();
        }
    }
});






console.log(halloween.RndWord());
console.log(halloween.RndWordUC());
console.log(halloween.alphabet);
console.log(halloween.alphabetarray());
console.log(alphabetNC);