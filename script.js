// 1. Identify all elements at the very beginning
const startButton = document.getElementById('start-button');
const roomBackground = document.getElementById('room-bg');
const gameContainer = document.getElementById('game-container');
const dot3 = document.getElementById('dot3');
const message1 = document.getElementById('message-1');

// 2. Logic for the Start Button
if (startButton) {
    startButton.addEventListener('click', function() {
        // Change the background to Room 2
        roomBackground.style.backgroundImage = "url('Roomn02.png')";
        
        // Hide the start button
        startButton.classList.add('hidden');

        // Show the container that holds the dots
        gameContainer.classList.remove('hidden');

        console.log("Room 2 active: Dots should now be visible.");
    });
}

// 3. Logic for Glowing Dot 3 (Independent from Start Button)
if (dot3) {
    dot3.addEventListener('click', function(event) {
        // Stop the click from "bubbling" to the background (fixes the double-click issue)
        event.stopPropagation();

        // Show the message msg1.png
        if (message1) {
            message1.classList.remove('hidden');
            console.log("Dot 3 clicked! Showing msg1.png");

            // Timer to hide BOTH the message and the dot after 1.5 seconds
            setTimeout(function() {
                message1.classList.add('hidden');
                dot3.classList.add('hidden');
                console.log("1.5 seconds passed: Dot 3 and msg1 hidden.");
            }, 3000); 
        }
    });
}