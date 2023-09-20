/*
const header = document.querySelector("header");
let scrollTimeout; // Timeout to track scrolling inactivity

// Function to hide the header with animation
function hideHeader() {
    header.classList.add("hidden-header");
}

// Function to show the header with animation
function showHeader() {
    header.classList.remove("hidden-header");
}

// Function to handle header visibility based on scroll direction
function handleScroll() {
    if (window.scrollY > 0) {
        hideHeader();
    }

    // Clear the previous timeout
    clearTimeout(scrollTimeout);

    // Set a timeout to show the header after 1 second (adjust as needed)
    scrollTimeout = setTimeout(() => {
        showHeader();
    }, 1000); // 1000 milliseconds = 1 second
}

// Add an event listener to call the handleScroll function when scrolling
window.addEventListener("scroll", handleScroll);

// Initially, show the header on page load
showHeader();
*/
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

// Select the splash screen element
const splashScreen = document.getElementById('splash-screen');

// Text to display in the splash container
const textToType = "My knowledge, and my all, is yours to take. What would you hear of me?";

// Get references to HTML elements
const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");

// Function to simulate typing effect
function typeText() {
    let i = 0;

    // Use an interval to add characters one by one
    const typingInterval = setInterval(() => {
        if (i < textToType.length) {
            textElement.innerHTML += textToType.charAt(i);
            i++;
        } else {
            // Text has been fully typed, clear the interval
            clearInterval(typingInterval);
            cursorElement.style.display = "none"; // Hide the cursor
            
            setTimeout(() => {
                splashScreen.style.display = 'none'; // Hide the splash screen
            }, 2000); // 1000 milliseconds = 1 second
        }
    }, 50); // Adjust the interval duration (milliseconds) as needed
}

// Start the typing animation immediately
typeText();

