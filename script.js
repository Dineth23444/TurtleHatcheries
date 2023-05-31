const slider = document.querySelector('.image-slider');
let isDragging = true;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('mousedown', startSwipe);
slider.addEventListener('touchstart', startSwipe);
slider.addEventListener('mouseup', endSwipe);
slider.addEventListener('mouseleave', endSwipe);
slider.addEventListener('touchend', endSwipe);
slider.addEventListener('mousemove', swipeMove);
slider.addEventListener('touchmove', swipeMove);

function startSwipe(e) {
  if (e.type === 'touchstart') {
    startPosition = e.touches[0].clientX;
  } else {
    startPosition = e.clientX;
    e.preventDefault();
  }

  isDragging = true;
  slider.classList.add('grabbing');
}

function swipeMove(e) {
  if (!isDragging) return;

  const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  const swipeDistance = currentPosition - startPosition;
  currentTranslate = prevTranslate + swipeDistance;
}

function endSwipe() {
  isDragging = false;
  slider.classList.remove('grabbing');

  prevTranslate = currentTranslate;
}

function updateSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
