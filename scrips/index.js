const surpriseButton = document.querySelector('.js-surprise-button');

const confettiSound = new Audio('sounds/confetti.mp3');

surpriseButton.addEventListener('click', () => {

  confettiSound.play();

  confetti({
    particleCount: 2000,
    spread: 500,
    origin: {
      x: 0.5,
      y: 0.6
    }
  });

  setTimeout(() => {
    window.location.href = 'gallery.html';
  }, 3000);

});

