
// Dice roll function
// function rollDice (min, max) {
//     createDiceImage();
//     console.log("hello"); 
//     return min + Math.floor(Math.random() * (max - min + 1));
// }


// variable has to be set at the start for it to work,
// changing the variable at the end won't work because the variable has to be reset each time the button is pressed. hmm.

    //Attempt to get the element using document.getElementById
    let element = document.getElementById("dvisible");

    //If it isn't "undefined" and it isn't "null", then it exists.

function elementExist() {
    if(typeof(element) != 'undefined' && element != null){
        alert('Element exists!');
} else{
        alert('Element does not exist!');
}

}


// check if element exists
const el1 = document.getElementById('dvisible');
// const diceImage = document.getElementById('diceImage');

function detectImage() {
    // elementExist();
    let imagecounter = "something"
        if(imagecounter == "something"){
            createDiceImage();
            }

}


// create dice image
// If image element xyz not exist then create, if already exist then don't create
// its just a if -something- doesn't exist then do this.
// I'm not going to push any of my code until someone already has the full 1 player code posted in a desk or pages. 



const rollDice4 = () => rollDice(1, 4);
const rollDice6 = () => rollDice(1, 6);
const rollDice8 = () => rollDice(1, 8);
const rollDice12 = () => rollDice(1, 12);
const rollDice20 = () => rollDice(1, 20);
const rollSomeUltimateDice = () => rollDice(42, 42);

// Draw Score function

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}


// Roll Dice Function

// const rollDice = (min, max) => {

//     diceImageAppear();
//     console.log("hello"); 
//     return min + Math.floor(Math.random() * (max - min + 1));

// }