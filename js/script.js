const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('.pontos');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

let velocidadeMario = 1500;
let pontuacao = 0;

// console.log(score.textContent);

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;

        clearInterval(loop);

    }

    score.innerHTML = `Score: ${pontuacao}`;
    pontuacao = pontuacao + 1;

    // if(marioPosition === 180) {
    //     velocidadeMario = velocidadeMario + 5;

    //     pipe.style.animation = `pipe-animation ${velocidadeMario}ms infinite linear `;
    // }

    console.log(velocidadeMario);

}, 10);

document.addEventListener('keydown', jump);

