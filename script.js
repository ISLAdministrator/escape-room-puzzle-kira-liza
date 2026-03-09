// 1. Target the elements exactly as named in HTML
const startButton = document.getElementById('start-button');
const roomBackground = document.getElementById('room-bg');
const gameContainer = document.getElementById('game-container');

// 2. The Logic
startButton.addEventListener('click', function() {
    // Change the background image
    roomBackground.style.backgroundImage = "url('room2.png')";
    
    // Hide the start button
    startButton.classList.add('hidden');

    // REVEAL the container holding the dots
    // This removes the 'display: none' that kept it hidden at the start
    gameContainer.classList.remove('hidden');

    console.log("Room 2 active: Dots should now be visible.");
});