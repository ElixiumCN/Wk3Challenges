// found best fix

diceImageBox.appendChild(diceImage); // no

diceImageBox.replaceWith(diceImage); // yes

// the other new idea was to fill the diceImageBox with an empty string before running the function... in theory this would work.. in practice it doesn't for me.

function createDiceImage () {

    const diceImage = document.createElement('img');
    diceImage.setAttribute('src', 'dice.png');
    diceImage.setAttribute('id', 'dvisible');
    console.log ("createDiceImage");
    diceImageBox.appendChild(diceImage);

    if (el1 === null) {
        console.log('element does NOT exist in DOM');
    } else {
        console.log('element exists in DOM');
    }

}




// another idea: create the image in a prexisting ID'd box.
// then the roll function fills that box with blank after 1 second at the end of the function


// probably fix
// when running the create image set a var to imagecount1
// if var == imagecount1 then don't create image.. skip the following lines of code.
// This idea needs more work. Have to create the variable at the start of the run.



// the detect element function does work, but not for elements that are created after the page has been loaded (that have been dynamically created e.g. via clicking on something)
// so just tolerate multiple images for now and work on the next part of the game.