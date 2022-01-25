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
function selectDifficulty();

// moves counter begins on mouse click of weapons button
// check results of player selection vs computer generated
function checkResult();

// when counter gets to zero then winner is declared
// game over and reload
function gameOver();
