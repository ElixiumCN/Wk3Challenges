document.addEventListener('keydown', function(e) {
if (e.code == "KeyA") {
    document.getElementById('audio').play();
    // console.log(e.code);
}
});

// e.code = "KeyA" quotation marks to mark it as string, which is required in this case.

document.addEventListener('keydown', function(e) {
    if (e.code == "KeyS") {
    document.getElementById('audio2').play();
      // console.log(e.code);
    }
});