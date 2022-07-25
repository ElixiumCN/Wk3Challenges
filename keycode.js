// my myFunction2 & myFunction3 were unaccepetable names for functions.
// They would not work. changing the names fixed it.

// demo2 & demo3 were unacceptable names for inputs. changing the names fixed it.

function myFunction(event) {
    let x = event.key;
    let y = event.code;
    let z = event.charCode;
    document.getElementById("demo").innerHTML = "event.key: " + x;
    document.getElementById("demotwo").innerHTML = "event.code: " + y;
    document.getElementById("demothree").innerHTML = "event.while: " + z;
}

