require("normalize.css/normalize.css");
require("./styles/index.css");

document.addEventListener("DOMContentLoaded", () => {
    var element = document.getElementsByClassName("center")[0];
    element.innerHTML =
        "\
      <button id='button' class='select-button'>PRESS ME</button> \
      <audio controls id='player'> \
        <source src='" +
        require("./assets/coronavirus.mp3") +
        "' type='audio/mpeg' /> \
        Your browser does not support the audio tag. \
      </audio> \
    ";

    document.getElementById("button").addEventListener("click", () => {
        var audio = document.getElementById("player");
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    });

    window.addEventListener("load", () => {
        element.style.display = "block";
    });
});
