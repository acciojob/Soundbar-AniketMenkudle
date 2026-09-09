//your JS code here. If required.

const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        // Stop previous sound
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get sound name
        const soundName = button.dataset.sound;

        // Create audio
        currentAudio = new Audio(`sounds/${soundName}.mp3`);

        // Play sound
        currentAudio.play();
    });

});


// Stop button
stopButton.addEventListener("click", () => {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});
```
