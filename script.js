console.log("Script loaded successfully");

// 1. Get the elements
const startButton = document.getElementById('start-button');
const roomBackground = document.getElementById('room-bg');

// 2. The Click Function
if (startButton) {
    startButton.addEventListener('click', function() {
        
        // Change background of the body (room-bg) to the new room
        roomBackground.style.backgroundImage = "url('room2.png')";
        
        // Hide the button
        startButton.classList.add('hidden');

        console.log("Success! Background changed to room2.png and button hidden.");
    });
}