const buttonToggle = document.querySelector('.toggle');
buttonToggle.addEventListener('click', toggleClass);

function toggleClass(){
  const element = document.querySelector('body');
  element.classList.toggle('new-class');
}
