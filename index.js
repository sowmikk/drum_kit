for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    const btn = document.querySelectorAll(".drum")[i];

    btn.addEventListener("click", function () {

        var buttonPressed = this.innerHTML;

        makeSound(buttonPressed);

        btn.classList.add("pressed")

        setTimeout(function () {
                btn.classList.remove("pressed");
            },
            100);
    })
}

document.addEventListener("keypress", function (e) {
    var pressedKey = e.key;

    makeSound(pressedKey);

    document.querySelector("button").classList.add("pressed")

    setTimeout(function () {
            document.querySelector("button").classList.remove("pressed");
        },
        100);

})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            break;
    }
}