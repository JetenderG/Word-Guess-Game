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
var worduser;
var wordcp;
var keyinput;
/////////////////////////////////////////////////////////////////////////
//objects and variables
var halloween = {

    words: ["Bone",
        "blackcat",
        "cemetery",
        "crypt",
        "bogeyman",
        "ghost",
        "wereWolf",
        "grimReaper",
        "zombie",
        "frankenstein",
        "candy",
        "witch"
    ],
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    guess: 15,
    winner: 0,
    loser: 0,


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
        document.querySelector('.wordGuess').innerHTML = "Word  :  " + rndWordUC.join("");
        return rndWordUC.join("");
    },
    "remainingGuess": function () {

        if (this.guess > 0) {
            this.guess = this.guess - 1;
            return this.guess;
        }
    },

    "replaceUCAlphabet": function () {
        this.alphabet.forEach(function (item, index) {
            if (keyinput === item) {
                console.log(alphabetNC);
                alphabetNC.splice(index, 1, keyinput)
                document.querySelector(".alguess").innerHTML = "Letters Already Guessed  :  " + alphabetNC.join("");
                alphabetNC.join("");
            }
        })
    },
    "replaceUCword": function () {
        rndWord.forEach(function (item, index) {
            if (keyinput === item) {
                rndWordUC.splice(index, 1, keyinput);
                document.querySelector(".wordGuess").innerHTML = "Word  :  " + rndWordUC.join("");
                worduser = rndWordUC.join("");
                return rndWordUC



            }
        })
    },

    "update": function () {

        rndWordUC.join("")
        console.log(rndWordUC);

    },

    "winloss": function () {
        console.log(rndWord);
        console.log(rndWordUC);
        if (Wrnd == rndWordUC.join("")) {

            alert("Winner");
            this.winner = this.winner + 1;
            document.querySelector(".wins").innerHTML = "Win :  " + halloween.winner;
            return this.winner;


        } else if (this.guess === 0) {
            document.querySelector(".numguess").innerHTML = "Remaining Guesses :  " + this.guess;
            alert("You Lose");
            this.loser = this.loser + 1;
            document.querySelector(".lose").innerHTML = "Lose :  " + halloween.loser;
            return this.loser;

        }

    },
    "disablekey": function () {
        if (alphabetNC.includes(keyinput) == true) {

            keyinput = false;
        } else {
            keyinput = keyinput;
        }


    }
}


document.addEventListener("keyup", function (event) {
    var input = event.key;
    keyinput = input;

    document.querySelector(".numguess").innerHTML = "Remaining Guesses  :  " + halloween.guess;
    document.querySelector(".wins").innerHTML = "Win :  " + halloween.winner;
    document.querySelector(".lose").innerHTML = "Lose :  " + halloween.loser;

    if (halloween.alphabet.includes(input) == true); {
        halloween.remainingGuess();
        if (alphabetNC.includes(input) == false) {
            halloween.replaceUCAlphabet();
            halloween.replaceUCword();
            halloween.winloss();


        } else if (rndWord.includes(input) == true) {
            console.log("hi");
            halloween.replaceUCword();

        }


    }
});

document.querySelector(".numguess").innerHTML = "Remaining Guesses  :  " + halloween.guess;
document.querySelector(".wins").innerHTML = "Win :  " + halloween.winner;
document.querySelector(".lose").innerHTML = "Lose :  " + halloween.loser;
document.querySelector('.wordGuess').innerHTML = "Word  :  "




console.log(halloween.RndWord());
console.log(halloween.RndWordUC());
console.log(halloween.alphabet);
console.log(halloween.alphabetarray());
console.log(alphabetNC);
console.log(halloween.update());
console.log(halloween.alphabetNC);
console.log(rndWord);
console.log(halloween.guess);
console.log(halloween.replaceUCword());
console.log(worduser);