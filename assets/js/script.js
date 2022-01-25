// variables
let computerScore = 0;
let playerScore = 0;
let moves = 0;
let result = document.getElementById("result");

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

// function to change moves allowed based on game difficulty on mouse click of difficulty buttons
// if unclick then default is normal mode
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

// moves counter begins on mouse click of weapons button
// check results of player selection vs computer generated
function checkResult(selected){
    let weaponSelect = ["rock", "paper", "scissors", "lizard", "spock"];
    let num = Math.floor(Math.random()*5);

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
}

// when counter gets to zero then winner is declared
// game over and reload
function gameOver();

selectDifficulty();
checkResult();