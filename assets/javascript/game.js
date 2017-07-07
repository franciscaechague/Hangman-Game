

//I give the computer options of words
var series = ["cersei", "winterfell", "baratheon", "throne", "westeros", "unsolid", "hodor", "targaryen", "varys", "lannister", "whitewalkers", "dorne", "dragons"];


//the computer chooses the word
var randomSeries = series[Math.floor(Math.random() * series.length)];


//displays the dashes that represent the letters
randomSeries.length;
// console.log(randomSeries.length);

var numberOfLoops = 0;

var guessesLeft = 10;

var leftToGuess = 0;



for (var i = 0; i < randomSeries.length; i++) {

	numberOfLoops++;


    var holder = document.createElement("span");

    holder.setAttribute("id","blank"+numberOfLoops);
    holder.setAttribute("class","placeholder");

    var blankSpot = document.createTextNode("_  ");

    holder.appendChild(blankSpot);

    document.querySelector("#dashes").appendChild(holder);

}


//if the letter is not in the word, add it to guessedLetters

document.onkeyup = function(event) {

	if(guessesLeft>0){

	var userGuess = event.key;

	var randomCharacters = randomSeries.split("");


	if (randomCharacters.indexOf(userGuess) === -1) {

		document.getElementById("guessedLetters").innerHTML += userGuess + "-";

		guessesLeft--;

		document.getElementById("remaining").innerHTML =+ guessesLeft;

	}

//if the letter is in the word, replace dash with letter.
	else {

		 var subArrayIndexLog = [];

    	for (var i = 0; i < randomCharacters.length; i++) {
      		if (randomCharacters[i] === userGuess){
      			subArrayIndexLog.push(i);
      		};
    	};
    	for(var j=0; j<subArrayIndexLog.length; j++){
    		var tmp = subArrayIndexLog[j];
    		var allDashes = document.getElementsByClassName('placeholder');
    		allDashes[tmp].innerHTML = userGuess;
				leftToGuess ++;

    	}


	}


	}

	else{

		var $gifLose = $('#gifLose');

		grow = function (size) {
		    if (size < 50) {
		        console.log(size);
		        $gifLose.css('width', size + '%');
		        $gifLose.css('height', size + '%');
		        size++;
		        setTimeout(grow, 10, size);
		    }
		}

		grow(0);

	}

	if (leftToGuess == randomSeries.length) {

		var obj = document.createElement("audio");

	  obj.src = "gameMainTheme.wav";

	  obj.play();

		var $gifWin = $('#gifWin');

		grow = function (size) {
		    if (size < 50) {
		        console.log(size);
		        $gifWin.css('width', size + '%');
		        $gifWin.css('height', size + '%');
		        size++;
		        setTimeout(grow, 10, size);
		    }
		}

		grow(0);
	}



};


//if you run out of guesses reset.
function playAgain() {
    location.reload();
}
