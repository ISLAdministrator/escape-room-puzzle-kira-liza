console.log("Script loaded successfully");

// 1. Get the elements
const startButton = document.getElementById('start-button');
const roomBackground = document.getElementById('room-bg');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');

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