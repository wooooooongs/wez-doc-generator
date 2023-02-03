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
  el.addEventListener('click', copyToClipboard);
  });
});
