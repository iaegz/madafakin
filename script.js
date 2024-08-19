// Código para estrellas
const stars = '★☆✫✩✯✰✰⋆✭✮✧✬';
const numStars = 100;

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = stars[Math.floor(Math.random() * stars.length)];
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.fontSize = `${Math.random() * 20 + 10}px`;
    document.body.appendChild(star);

    setTimeout(() => {
        document.body.removeChild(star);
    }, 5000);
}

for (let i = 0; i < numStars; i++) {
    createStar();
    setInterval(createStar, 1000);
}

// Código para el juego simple
function startGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Juego Simple: Caza al Mapache</h2>
        <p>Haz clic en el mapache para ganar puntos. ¡Buena suerte!</p>
        <div id="game" style="position: relative; width: 300px; height: 300px; border: 1px solid #fff; margin: auto;">
            <img src="https://images.vexels.com/content/230664/preview/kawaii-racoon-flat-f286ad.png" id="mouse" style="position: absolute; width: 50px; cursor: pointer;">
        </div>
        <p id="score">Puntos: 0</p>
    `;

    const mouse = document.getElementById('mouse');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function moveMouse() {
        const gameDiv = document.getElementById('game');
        const x = Math.random() * (gameDiv.clientWidth - mouse.clientWidth);
        const y = Math.random() * (gameDiv.clientHeight - mouse.clientHeight);
        mouse.style.left = `${x}px`;
        mouse.style.top = `${y}px`;
    }

    mouse.onclick = () => {
        score++;
        scoreDisplay.textContent = `Puntos: ${score}`;
        moveMouse();
    };

    moveMouse();
}