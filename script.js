console.log("Script loaded");

// below is basic example code for using a button
// you can use it, expand on it, or delete it
// that all depends on your team's plan.

const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  output.textContent = "JavaScript is working.";
})

// 1. Get the elements
const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');

// 2. The Click Function
startButton.addEventListener('click', function() {
    
    // Change background - Just the filename!
    gameContainer.style.backgroundImage = "url('room2.png')";
    
    // Hide the button
    startButton.classList.add('hidden');

    console.log("Success! Room switched.");
}); 
// ^ Make sure there is nothing after this line except maybe other functions.