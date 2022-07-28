// Hidden Div Function - For showing Div with dice image when the roll button is clicked

function showDice() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Page load function to hide the dice before the button is clicked.

document.addEventListener('DOMContentLoaded', function() {
    showDice();
    }, false);

// roll dice function


    function rollDice(min, max) {
        console.log("hello"); // to test if function has run
        return min + Math.floor(Math.random() * (max - min + 1));
    
        // showDice();
    // unreachable code? why can't I put the console.log line under the return line?
    }
    