// variables
let computerScore = 0;
let playerScore = 0;
let moves = 0;
document.getElementById('play-again').style.visibility='hidden';
document.getElementById('play-again').style.display = "none";
// let result = document.getElementById("result");

// create object for outcomes of weapon selection
let selectedWeapon = {
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
}

// function to change moves allowed based on game difficulty
// on mouse click of difficulty buttons
// if unclicked then default is normal mode
function selectDifficulty(difficultyRating) {
    let easyMoves = 7;
    let normalMoves = 5;
    let hardMoves = 3;

    if (difficultyRating == "easy") {
        maxMoves = easyMoves;
    } else if (difficultyRating == "hard") {
        maxMoves = hardMoves;
    } else maxMoves = normalMoves;

    document.getElementById("moves-counter").innerText = maxMoves;
}

// on mouse click of weapon buttons
// begins moves counter and
// checks result of player selection vs computer generated
function checkResult(selected){
    let weaponSelect = ["rock", "paper", "scissors", "lizard", "spock"];
    let num = Math.floor(Math.random()*5);
    let movesCounter = maxMoves-moves;
    moves++;

    document.getElementById("moves-counter").innerText = movesCounter;

    let computerSelected = weaponSelect[num];

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
        document.getElementById("computer-selected").innerHTML = `Computer is thinking...`;
        document.getElementById("player-selected").innerHTML = `Player... make your move`;
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
        } else document.getElementById("result") = "IT'S A DRAW!";
    }

    if (movesCounter ==0) {
        document.getElementById('message').innerHTML = `GAME OVER!`;
        document.getElementById('message').style.fontSize = '300%';
        document.getElementById('game-zone').style.visibility='hidden';
        document.getElementById('game-zone').style.display = "none";

        document.getElementById('difficulty-area').style.visibility='hidden';
        document.getElementById('difficulty-area').style.display = "none";

        document.getElementById('play-again').style.visibility='visible';
        document.getElementById('play-again').style.display = "inherit";
    }

    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("player-score").innerHTML = playerScore;
}

function playAgain() {
    
}

selectDifficulty();
checkResult();