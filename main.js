const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const score = document.querySelector('.score')

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

  if (pipePosition <= 140 && pipePosition > 0 && marioPosition <= 120) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`

    mario.src = './images/game-over.png'
    mario.style.width = '95px'
    mario.style.marginLeft = '40px'

    clearInterval(loop);
  }
  if (pipePosition == 0) {
    for (let numero = 0; numero < 100; numero++) {
      score.innerHTML = `Score: ${numero}`
    }
  }
}, 10)

document.addEventListener('keydown', jump)