// play again button hidden until game over
document.getElementById('play-again').style.visibility='hidden';
document.getElementById('play-again').style.display = "none";
// hide weapon buttons and score board until difficulty selected
document.getElementById('game-zone').style.visibility='hidden';
document.getElementById('game-zone').style.display = "none";
document.getElementById('score-board').style.visibility='hidden';
document.getElementById('score-board').style.display = "none";
 // change message to choose difficulty
 document.getElementById('message').innerHTML = "Select difficulty to play";

// variables
var computerScore = 0;
var playerScore = 0;
var moves = 1;
var maxMoves = document.getElementById("moves-counter").innerText;

// create object for outcomes of weapon selection
// initial inspiration from (https://dev.to/abhidevelopssuntech/how-to-make-rock-paper-scissors-in-javascript-47ef)
// and then edited for my own requirements
var selectedWeapon = {
    'rock' : {
        'rock' : 'draw',
        'scissors' : 'win',
        'paper' : 'lose',
        'lizard' : 'win',
        'spock' : 'lose'
    },

    'scissors' : {
        'rock' : 'lose',
        'scissors' : 'draw',
        'paper' : 'win',
        'lizard' : 'lose',
        'spock' : 'lose'
    },

    'paper' : {
        'rock' : 'win',
        'scissors' : 'lose',
        'paper' : 'draw',
        'lizard' : 'lose',
        'spock' : 'win'
    },

    'lizard' : {
        'rock' : 'lose',
        'scissors' : 'lose',
        'paper' : 'win',
        'lizard' : 'draw',
        'spock' : 'win'
    },

    'spock' : {
        'rock' : 'win',
        'scissors' : 'win',
        'paper' : 'lose',
        'lizard' : 'lose',
        'spock' : 'draw'
    },
};

// function to change moves allowed based on game difficulty
// on mouse click of difficulty buttons
function selectDifficulty(difficultyRating) {
    var easyMoves = 7;
    var normalMoves = 5;
    var hardMoves = 3;

    // resets counter and score board if difficulty switched during game play
    moves = 1;
    computerScore = 0;
    playerScore = 0;

    if (difficultyRating == "easy") {
        maxMoves = easyMoves;
        document.getElementById("computer-score").innerHTML = 0;
        document.getElementById("player-score").innerHTML = 0;
    } else if (difficultyRating == "hard") {
        maxMoves = hardMoves;
        document.getElementById("computer-score").innerHTML = 0;
        document.getElementById("player-score").innerHTML = 0;
    } else maxMoves = normalMoves;
        document.getElementById("computer-score").innerHTML = 0;
        document.getElementById("player-score").innerHTML = 0;

    document.getElementById("moves-counter").innerText = maxMoves;
    
    // make weapon buttons and score-board visible
    document.getElementById('game-zone').style.visibility='visible';
    document.getElementById('game-zone').style.display = "inherit";
    document.getElementById('score-board').style.visibility='visible';
    document.getElementById('score-board').style.display = "inline-flex";
    // change message to select your weapon
    document.getElementById('message').innerHTML = "Select your weapon";
}

// on mouse click of weapon buttons
// begins moves counter and
// checks result of player selection vs computer generated
function checkResult(selected){
    var weaponSelect = ["rock", "paper", "scissors", "lizard", "spock"];
    
    // generate random number
    var num = Math.floor(Math.random()*5);
    var movesCounter = maxMoves-moves;
    moves++;

    document.getElementById("moves-counter").innerText = movesCounter;

    // generates random weapon selection from array
    var computerSelected = weaponSelect[num];

    // switch to increment score
    // if case is win then player score to increment by one,
    // if case is lose then computer score to increment by one,
    // otherwise no change
    switch(selectedWeapon[selected][computerSelected]){
        case 'win':
            playerScore++;
            break;
        case 'lose':
            computerScore++;
            break;
        default:
            break;
    }

    if (movesCounter == maxMoves) {
        document.getElementById("computer-selected").innerHTML = "Computer is thinking...";
        document.getElementById("player-selected").innerHTML = "Player... make your move";
    } else {
        document.getElementById("computer-selected").innerHTML = `Computer picked ${weaponSelect[num]}`;
        document.getElementById("player-selected").innerHTML = `You picked ${selected}`;
    }

// when counter gets to zero, game over
// gets player and computer scores and compares value 
// a winner is declared
    if (movesCounter == 0) {
        if (playerScore > computerScore) {
            document.getElementById("result").innerHTML = "YOU WIN!";
        } else if (playerScore < computerScore) {
            document.getElementById("result").innerHTML = "YOU LOSE!";
        } else document.getElementById("result").innerHTML = "IT'S A DRAW!";
    }

    if (movesCounter ==0) {
        // change message to game over
        document.getElementById('message').innerHTML = "GAME OVER!";
        document.getElementById('message').style.fontSize = '300%';
        // hide weapon buttons and selection text
        document.getElementById('game-zone').style.visibility='hidden';
        document.getElementById('game-zone').style.display = "none";
        // hide difficulty buttons
        document.getElementById('difficulty-area').style.visibility='hidden';
        document.getElementById('difficulty-area').style.display = "none";
        // make play again button visible
        document.getElementById('play-again').style.visibility='visible';
        document.getElementById('play-again').style.display = "inherit";
    }

    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("player-score").innerHTML = playerScore;
}