const buttonToggle = document.querySelector('.button-invert-theme');
buttonToggle.addEventListener('click', invertTheme);

const buttonIncreaseContrast = document.querySelector('.button-increase-contrast');
buttonIncreaseContrast.addEventListener('click', increaseContrast);

function invertTheme(){
  const html_body = document.querySelector('body');
  html_body.classList.toggle('css-invert-theme');
}

function increaseContrast(){
    const html_body = document.querySelector('body');
    html_body.classList.toggle('css-increase-contrast');
}
