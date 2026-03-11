const music = document.getElementById('bg-music');
const roomBg = document.getElementById('room-bg');
const startBtn = document.getElementById('start-button');
const gameCont = document.getElementById('game-container');
const lockCont = document.getElementById('lock-container');
const lockBox = document.getElementById('lock-hitbox');

const nextBtn1 = document.getElementById('next-level-btn');
const nextBtn2 = document.getElementById('next-level-btn-2');
const nextBtn3 = document.getElementById('next-level-btn-3');
const finalLink = document.getElementById('final-link-wrapper');

let musicStarted = false;

function playMusic() {
    if (music && !musicStarted) {
        music.volume = 0.3;
        music.load();
        music.play().then(() => musicStarted = true).catch(e => console.log("Interaction needed"));
    }
}

startBtn.addEventListener('click', () => {
    playMusic();
    roomBg.style.backgroundImage = "url('roomnum2.png')";
    startBtn.classList.add('hidden');
    gameCont.classList.remove('hidden');
});

nextBtn1.addEventListener('click', () => {
    roomBg.style.backgroundImage = "url('clickthelock.png')";
    gameCont.classList.add('hidden');
    lockCont.classList.remove('hidden');
});

lockBox.addEventListener('click', () => {
    roomBg.style.backgroundImage = "url('locksuccess.png')";
    lockBox.style.display = "none";
    nextBtn2.classList.remove('hidden');
    nextBtn2.style.display = "block";
});

nextBtn2.addEventListener('click', () => {
    roomBg.style.backgroundImage = "url('notewithletter.png')";
    nextBtn2.classList.add('hidden');
    nextBtn2.style.display = "none";
    nextBtn3.classList.remove('hidden');
    nextBtn3.style.display = "block";
});

// FINAL TRANSITION
nextBtn3.addEventListener('click', () => {
    roomBg.style.backgroundImage = "url('storyfin.png')";
    nextBtn3.classList.add('hidden');
    nextBtn3.style.display = "none";
    
    // Show the special link button
    if (finalLink) {
        finalLink.classList.remove('hidden');
        finalLink.style.display = "block";
    }
});

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