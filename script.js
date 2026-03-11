const music = document.getElementById('bg-music');
const startButton = document.getElementById('start-button');
const roomBackground = document.getElementById('room-bg');
const gameContainer = document.getElementById('game-container');
const nextBtn1 = document.getElementById('next-level-btn');
const nextBtn2 = document.getElementById('next-level-btn-2');
const lockContainer = document.getElementById('lock-container');
const lockHitbox = document.getElementById('lock-hitbox');

let hasStartedMusic = false;

function playGlobalMusic() {
    if (music && !hasStartedMusic) {
        music.volume = 0.5; 
        music.load(); 
        music.play().then(() => {
            hasStartedMusic = true;
        }).catch(err => console.log("Audio blocked. Waiting for click."));
    }
}

// 1. Start Button -> Room 2
if (startButton) {
    startButton.addEventListener('click', function() {
        playGlobalMusic(); 
        roomBackground.style.backgroundImage = "url('roomnum2.png')";
        startButton.classList.add('hidden');
        gameContainer.classList.remove('hidden');
    });
}

// 2. Next Button 1 -> Lock Screen
if (nextBtn1) {
    nextBtn1.addEventListener('click', function() {
        roomBackground.style.backgroundImage = "url('clickthelock.png')";
        nextBtn1.classList.add('hidden');
        gameContainer.classList.add('hidden'); // Clears all dots
        lockContainer.classList.remove('hidden'); 
    });
}

// 3. Lock Hitbox -> Success Screen
if (lockHitbox) {
    lockHitbox.addEventListener('click', function() {
        roomBackground.style.backgroundImage = "url('locksuccess.png')";
        // Hide hitbox so they can't click the lock again
        lockHitbox.classList.add('hidden'); 
        // Show the second button
        if (nextBtn2) nextBtn2.classList.remove('hidden');
    });
}

// 4. Next Button 2 -> Final Note
if (nextBtn2) {
    nextBtn2.addEventListener('click', function() {
        roomBackground.style.backgroundImage = "url('notewithletter.png')";
        // Hide button 2
        nextBtn2.classList.add('hidden');
        console.log("Showing the final note.");
    });
}

// 5. Dot Logic
function setupDot(dotId, messageId, isFinal = false) {
    const dot = document.getElementById(dotId);
    const msg = document.getElementById(messageId);

    if (dot && msg) {
        dot.addEventListener('click', function(e) {
            e.stopPropagation(); 
            msg.classList.remove('hidden');

            if (isFinal) {
                dot.classList.add('hidden');
                if (nextBtn1) nextBtn1.classList.remove('hidden');
            } else {
                setTimeout(() => {
                    msg.classList.add('hidden');
                    dot.classList.add('hidden');
                }, 3000); 
            }
        });
    }
}

setupDot('dot3', 'message-1');
setupDot('dot1', 'message-2');
setupDot('dot2', 'message-3');
setupDot('dot4', 'message-4', true);

document.addEventListener('click', playGlobalMusic);