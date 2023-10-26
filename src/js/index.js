const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const start = document.querySelector('.start')

const startGame = () => {
    pipe.classList.add('pipe-animation')
    start.style.display = 'none'
}

document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === 'Enter') {
        startGame()
    }
})

//score element
const scoreElement = document.querySelector(".score-number");
let score = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const marioScore = () => {
    const pipePosition = pipe.offsetLeft;

    if (pipePosition > 120 && pipePosition < 300) {
        score += 1;
        scoreElement.innerHTML = score;
    }
    else {
        score += 0;
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'clouds-animation 20s infinite linear';
        clouds.style.left = `${cloudsPosition}px`;

        gameOver.style.visibility = 'visible';

        
        clearInterval(loop);
    }
}, 10);

const restart = () => {
    gameOver.style.visibility = 'hidden';

    pipe.style.animation = 'pipe-animation 2s infinite linear';
    pipe.style.left = ``;

    mario.src = './src/images/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    clouds.style.left = ``;

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './src/images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clouds.style.animation = 'clouds-animation 20s infinite linear';
            clouds.style.left = `${cloudsPosition}px`;

            gameOver.style.visibility = 'visible';


            clearInterval(loop);
        }
    }, 10);
    
    score = 0;
    scoreElement.innerHTML = score;
}



document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);


document.addEventListener("keydown", marioScore);

restartButton.addEventListener('click', restart)


