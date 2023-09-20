const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById("playPauseButton");
const decoItem = document.querySelector(".Deco-item");

// Function to toggle play and pause
function togglePlayPause() {
    if (audio.paused) {
        // If audio is paused, play it and change the button image
        audio.play();
        playPauseButton.innerHTML = '<img src="https://cdn.discordapp.com/attachments/1153557771434852413/1153726383109984377/Play.gif">';
        decoItem.style.animation = "rotate 10s linear infinite";
    } else {
        // If audio is playing, pause it and change the button image
        audio.pause();
        playPauseButton.innerHTML = '<img src="https://cdn.discordapp.com/attachments/1153557771434852413/1153667110946472117/image.png">';
        decoItem.style.animation = "none";
    }
}

playPauseButton.addEventListener("click", togglePlayPause);

// JavaScript to toggle the widget
const widgetToggle = document.getElementById('widget-toggle');
const widget = document.getElementById('widget');

widgetToggle.addEventListener('click', function () {
    widget.classList.toggle('active');
});

// Get a reference to the email copy button
const emailCopyButton = document.getElementById('emailCopyButton');

// Add a click event listener to the button
emailCopyButton.addEventListener('click', function () {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    
    // Set its value to the email address you want to copy
    tempInput.value = 'aqqil.azman99@gmail.com'; // Replace with your email address
    
    // Append the input element to the document
    document.body.appendChild(tempInput);
    
    // Select the input's value
    tempInput.select();
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);

    alert('Email address copied to clipboard: ' + tempInput.value);
});


