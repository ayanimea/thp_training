const buttonToggle = document.querySelector('.toggle');
buttonToggle.addEventListener('click', toggleClass);

const buttonIncreaseContrast = document.querySelector('.increase-contrast');
buttonIncreaseContrast.addEventListener('click', increaseContrast);

function toggleClass(){
  const element = document.querySelector('body');
  element.classList.toggle('toggle-light');
}

function increaseContrast(){
    const body = document.querySelector('body');
    body.classList.toggle('high-contrast')
}
