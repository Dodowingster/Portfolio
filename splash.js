
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
                splashScreen.style.display = 'none';
                window.location.href = 'portfolio.html'
            }, 2000); // 1000 milliseconds = 1 second
        }
    }, 50); // Adjust the interval duration (milliseconds) as needed
}

// Start the typing animation immediately
typeText();
