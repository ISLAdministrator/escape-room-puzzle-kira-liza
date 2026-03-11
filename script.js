const music = document.getElementById('bg-music');
const startBtn = document.getElementById('start-button');
const roomBg = document.getElementById('room-bg');
const gameCont = document.getElementById('game-container');
const nextBtn1 = document.getElementById('next-level-btn');
const nextBtn2 = document.getElementById('next-level-btn-2');
const lockCont = document.getElementById('lock-container');
const lockBox = document.getElementById('lock-hitbox');

let musicStarted = false;

function playMusic() {
    if (music && !musicStarted) {
        music.volume = 0.3;
        music.load();
        music.play().then(() => musicStarted = true).catch(e => console.log("Click to play"));
    }
}

// 1. Start Game
startBtn.addEventListener('click', () => {
    playMusic();
    roomBg.style.backgroundImage = "url('roomnum2.png')";
    startBtn.classList.add('hidden');
    gameCont.classList.remove('hidden');
});

// 2. Room 2 -> Lock Room
nextBtn1.addEventListener('click', () => {
    roomBg.style.backgroundImage = "url('clickthelock.png')";
    gameCont.classList.add('hidden');
    lockCont.classList.remove('hidden');
    lockBox.style.display = "block"; // Explicitly enable hitbox
});

// 3. HITBOX -> Success
lockBox.addEventListener('click', () => {
    console.log("Lock Success!");
    roomBg.style.backgroundImage = "url('locksuccess.png')";
    lockBox.style.display = "none"; // Remove hitbox so it doesn't block button
    nextBtn2.classList.remove('hidden');
    nextBtn2.style.display = "block";
});

// 4. Success -> Final Note
nextBtn2.addEventListener('click', () => {
    roomBg.style.backgroundImage = "url('notewithletter.png')";
    nextBtn2.classList.add('hidden');
});

// Dot Logic
function setupDot(id, msgId, isFinal = false) {
    const d = document.getElementById(id);
    const m = document.getElementById(msgId);
    d.addEventListener('click', (e) => {
        e.stopPropagation();
        m.classList.remove('hidden');
        if (isFinal) {
            d.classList.add('hidden');
            nextBtn1.classList.remove('hidden');
        } else {
            setTimeout(() => {
                m.classList.add('hidden');
                d.classList.add('hidden');
            }, 3000);
        }
    });
}

setupDot('dot3', 'message-1');
setupDot('dot1', 'message-2');
setupDot('dot2', 'message-3');
setupDot('dot4', 'message-4', true);

document.addEventListener('click', playMusic);