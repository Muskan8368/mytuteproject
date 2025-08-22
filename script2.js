document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const box = document.getElementById('box');
    const gameArea = document.getElementById('game-area');
    const resultDisplay = document.getElementById('result');
    const startBtn = document.getElementById('start-btn');

    let startTime;
    let timeoutId;

    // Start game
    startBtn.addEventListener('click', () => {
        resultDisplay.textContent = 'Reaction Time: --';
        box.style.display = 'none';
        startBtn.disabled = true;

        // Shorter random delay: 200ms to 1000ms
        const delay = Math.random() * 800 + 200;

        timeoutId = setTimeout(showBox, delay);
    });

    // Show box at random position
    function showBox() {
        const areaWidth = gameArea.clientWidth - 80;  // 80 = box width
        const areaHeight = gameArea.clientHeight - 80;

        const randomX = Math.floor(Math.random() * areaWidth);
        const randomY = Math.floor(Math.random() * areaHeight);

        box.style.left = `${randomX}px`;
        box.style.top = `${randomY}px`;
        box.style.backgroundColor = '#3498db'; // Reset color
        box.style.display = 'block';

        startTime = new Date().getTime(); // Record start time
    }

    // When user clicks box
    box.addEventListener('click', () => {
        const endTime = new Date().getTime();
        const reactionTime = (endTime - startTime) / 1000;

        resultDisplay.textContent = `Reaction Time: ${reactionTime.toFixed(3)} seconds`;

        // Change color on success
        box.style.backgroundColor = '#2ecc71';

        setTimeout(() => {
            box.style.display = 'none';
            startBtn.disabled = false;
        }, 800);
    });
});
