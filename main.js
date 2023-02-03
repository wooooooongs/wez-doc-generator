import { getMusicInfo, selectCategory, copyToClipboard, selectWezMember, deleteDancer } from './utils.js';

const categoryButton = document.querySelectorAll('.category__button');
const musicInfoInput = document.querySelectorAll('.music-info__input');
const rightText = document.querySelectorAll('.right__text');
const wezSelect = document.querySelectorAll('.dancer__input--wez');
const dancerTable = document.querySelector('.dancer__tbody');

const selectObserver = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    const wezSelect = document.querySelectorAll('.dancer__input--wez');
    const deleteButton = document.querySelectorAll('.delete');

    deleteButton.forEach((button, index) => {
      if (index > 0) button.addEventListener('click', deleteDancer);
    });

    wezSelect.forEach((select) => {
      select.addEventListener('change', selectWezMember);
    });
  });
});

selectObserver.observe(dancerTable, { childList: true });

categoryButton.forEach((button) => {
  button.addEventListener('click', selectCategory);
});

musicInfoInput.forEach((input) => {
  input.addEventListener('keyup', getMusicInfo);
});

rightText.forEach((el) => {
  el.addEventListener('click', copyToClipboard);
});

wezSelect.forEach((select) => {
  select.addEventListener('change', selectWezMember);
});
