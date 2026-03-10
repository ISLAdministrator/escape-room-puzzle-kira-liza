const startButton = document.getElementById('start-button');
const roomBackground = document.getElementById('room-bg');
const gameContainer = document.getElementById('game-container');

if (startButton) {
    startButton.addEventListener('click', function() {
        roomBackground.style.backgroundImage = "url('roomnum2.png')";
        startButton.classList.add('hidden');
        gameContainer.classList.remove('hidden');
    });
}

function setupDot(dotId, messageId) {
    const dot = document.getElementById(dotId);
    const msg = document.getElementById(messageId);

    if (dot && msg) {
        dot.addEventListener('click', function(event) {
            event.stopPropagation(); 
            msg.classList.remove('hidden');
            
            setTimeout(function() {
                msg.classList.add('hidden');
                dot.classList.add('hidden');
            }, 3000); 
        });
    }
}

// Initialize based on your assigned order
setupDot('dot3', 'message-1'); // First dot (msg1)
setupDot('dot1', 'message-2'); // Second dot (msg2)
setupDot('dot2', 'message-3'); // Third dot (msg3)
setupDot('dot4', 'message-4'); // Fourth dot (msg4 - Success)