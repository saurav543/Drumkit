var numofdrum = document.querySelectorAll('.drum');
for (var i = 0; i < numofdrum.length; i++) {

    numofdrum[i].addEventListener('click', function() {
        var pressword = this.innerHTML;
        switchfun(pressword);
        buttonAnimation(pressword);
    });
    document.addEventListener('keypress', function(event) {
        switchfun(event.key);
        buttonAnimation(event.key);
    });

}


function switchfun(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom1 = new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;
        case 's':
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;
        case 'd':
            var tom1 = new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;
        case 'j':
            var tom1 = new Audio('sounds/snare.mp3');
            tom1.play();
            break;
        case 'k':
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play();
            break;
        case 'l':
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentkey) {
    var key = document.querySelector("." + currentkey);
    key.classList.add(currentkey, 'pressed');
    setInterval(function() {
        key.classList.remove("pressed");
    }, 200);
}