let timer;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function startStopwatch() {
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateTime();
    }, 1000);
    running = true;
    startStopBtn.textContent = 'Stop';
}

function stopStopwatch() {
    clearInterval(timer);
    running = false;
    startStopBtn.textContent = 'Start';
}

function resetStopwatch() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    laps.innerHTML = '';
}

function updateTime() {
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function addLap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = display.textContent;
        laps.appendChild(lapTime);
    }
}

startStopBtn.addEventListener('click', () => {
    if (running) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
});

resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', addLap);
