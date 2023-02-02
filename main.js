import { changeMusicInfo, selectCategory, copyToClipboard } from './utils.js';

const categoryButton = document.querySelectorAll('.category__button');
const musicInfoInput = document.querySelectorAll('.music-info__input');
const rightText = document.querySelectorAll('.right__text');

categoryButton.forEach((button) => {
  button.addEventListener('click', selectCategory);
});

musicInfoInput.forEach((input) => {
  input.addEventListener('keydown', changeMusicInfo);
});

rightText.forEach((el) => {
  el.addEventListener('click', (e) => {
    const currentText = e.currentTarget;

    copyToClipboard(currentText.innerText);

    currentText.childNodes[1].innerText = 'Copied!';
    setTimeout(() => {
      currentText.childNodes[1].innerText = 'Copy';
      currentText.childNodes[1].classList.remove('hovered');
    }, 1000);
  });
});
