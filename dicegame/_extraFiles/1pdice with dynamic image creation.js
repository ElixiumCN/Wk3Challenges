// Connecting all of the HTML elements needed and storing them in variables
const resetGameBtn = document.getElementById('resetGameBtn');
const rollDiceBtn = document.getElementById('rollDiceBtn');
//
let diceImageBox = document.getElementById('diceImageBox');

const scoreBox = document.getElementById('scoreBox');
const winBox = document.getElementById('winBox');

// Add click event on the "Roll Dice" button that runs the rollDice function
rollDiceBtn.addEventListener('click', rollDice)
resetGameBtn.addEventListener('click', resetGame)

// Roll Dice [function]
function rollDice() {
    createDiceImage(); // further down in the function to make sure the above code runs faster.
// no, further down doesn't make a difference.
    // let dice1 = document.getElementById("dice1");
    let status = document.getElementById("status2");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d1;
    (d1 === 1) ? score = 0 : score += d1; 
    // dice1.innerHTML = d1;
    status.innerHTML = "You rolled "+diceTotal+".";
        if(d1 == 1) {
            status.innerHTML += "<br />You rolled a 1 You lose!! the game will reset in 3 seconds";
                setTimeout(resetGame, 3000);
                    }
                    // Set score to zero if 1 is rolled otherwise incremenet the score

    // Fill HTML element with the value of the score variable.
    scoreBox.textContent = score
                
    // Condition for winning game
    if(score >= 20) {
        winBox.textContent = "You win!! with a score of "+score+". the game will reset in 3 seconds";
        setTimeout(resetGame, 3000);
        score = 0;
        d1 = 0;
    
    }

    }

// Create Dice Image when the Roll Dice Button is clicked [function]

function createDiceImage() {
    let diceImage = document.createElement('img');
    diceImage.setAttribute('src', 'dice.png');
    diceImage.setAttribute('height', 100); 
    diceImage.setAttribute('width', 100); 
    diceImage.setAttribute('id', 'diceImageBox'); 
    diceImageBox.replaceWith(diceImage);
    diceImageBox = document.getElementById('diceImageBox'); 
    // this line is REQUIRED
// paragraph tag is gone, replaced with an IMG tag.
    }

// Reset Game [function]
function resetGame() {
    document.getElementById("diceImageBox").style.visibility = "hidden"; 
    // above line is REQUIRED to set/read the ID of the dynamically created IMG element.
    scoreBox.textContent = "";
    winBox.textContent = "";
    dice1.textContent = "";
    status2.textContent = "";
    score = 0; // reset score to 0
    d1 = 0; // reset dice to 0
}