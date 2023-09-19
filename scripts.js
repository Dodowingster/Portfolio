// Get the header element
const header = document.getElementById("Header");

// Function to add or remove the "no-fixed" class based on scroll position
function handleScroll() {
    if (window.pageYOffset > 0) {
        header.classList.remove("no-fixed");
    } else {
        header.classList.add("no-fixed");
    }
}

// Listen for the scroll event and call the handleScroll function
window.addEventListener("scroll", handleScroll);

const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById("playPauseButton");

        // Function to toggle play and pause
        function togglePlayPause() {
            if (audio.paused) {
                // If audio is paused, play it and change the button image
                audio.play();
                playPauseButton.innerHTML = '<img src="https://cdn.discordapp.com/attachments/1153557771434852413/1153726383109984377/Play.gif">';
            } else {
                // If audio is playing, pause it and change the button image
            audio.pause();
            playPauseButton.innerHTML = '<img src="https://cdn.discordapp.com/attachments/1153557771434852413/1153667110946472117/image.png"">';
         }
    }

playPauseButton.addEventListener("click", togglePlayPause);