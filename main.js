import { getMusicInfo, selectCategory, copyToClipboard, selectWezMember, deleteDancer } from './utils.js';

const categoryButton = document.querySelectorAll('.category__button');
const musicInfoInput = document.querySelectorAll('.music-info__input');
const rightText = document.querySelectorAll('.right__text');

categoryButton.forEach((button) => {
  button.addEventListener('click', selectCategory);
});

musicInfoInput.forEach((input) => {
  input.addEventListener('keyup', getMusicInfo);
});

rightText.forEach((el) => {
  el.addEventListener('click', copyToClipboard);
  });
});
