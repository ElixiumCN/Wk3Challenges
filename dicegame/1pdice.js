// Create variables to fix slowdown bug.
let score = 0;

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

// sound
let rollsound = new Audio("roll2.wav"); 

// Roll Dice [function]
function rollDice() {
    // play sound
    rollsound.pause();
    rollsound.currentTime = 0;
    rollsound.play();
//    
    createDiceImage(); 
    // createDiceImage(); further down in the function to make sure the above code runs faster.
// no, further down doesn't make a difference.
    // let dice1 = document.getElementById("dice1");
    let status = document.getElementById("status2");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d1;
    (d1 === 1) ? score = 0 : score += d1; 

    if(d1 === 1){
        document.getElementById("diceImageBox").src="01.png";
    } else if(d1 === 2){
        document.getElementById("diceImageBox").src="02.png";
    } else if(d1 === 3){
        document.getElementById("diceImageBox").src="03.png";
    } else if(d1 === 4){
        document.getElementById("diceImageBox").src="04.png";
    } else if(d1 === 5){
        document.getElementById("diceImageBox").src="05.png";
    } else if(d1 === 6){
        document.getElementById("diceImageBox").src="06.png";
    }

    // dice1.innerHTML = d1;
    status.innerHTML = "You rolled "+diceTotal+".";
        if(d1 == 1) {
            status.innerHTML += "<br />You rolled a 1 You lose!!";
            // status.innerHTML += "<br />You rolled a 1 You lose!! the game will reset in 2 seconds";
            rollDiceBtn.style.visibility = "hidden"; 
                // setTimeout(resetGame, 2000);
                    }
                    // Set score to zero if 1 is rolled otherwise incremenet the score



    // Fill HTML element with the value of the score variable.
    scoreBox.textContent = score
                
    // Condition for winning game
    if(score >= 20) {
        winBox.textContent = "You win!! with a score of "+score+".";
        // winBox.textContent = "You win!! with a score of "+score+". the game will reset in 2 seconds";
        rollDiceBtn.style.visibility = "hidden"; 
        // setTimeout(resetGame, 2000);
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
    rollDiceBtn.style.visibility = "visible"; 
    scoreBox.textContent = "";
    winBox.textContent = "";
    dice1.textContent = "";
    status2.textContent = "";
    score = 0; // reset score to 0
    d1 = 0; // reset dice to 0
}

// Programmatically change the src of an img tag
// document.getElementById("imageid").src="../template/save.png";