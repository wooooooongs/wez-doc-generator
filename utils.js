import { musicData, selectedWezMemberList } from './store.js';
import WezMemberList from './constants.js';

const applyNewContentData = (updatedData) => {
  const { artistInput, musicInput, artistInputBracket } = musicData;
  const contentText = document.querySelector('.content__text');

  contentText.innerHTML = `Dancers :
사쿠라 진영 JinYoung
채원 민희 MinHee @_ni.o.ni_
윤진 가현 GaHyun @leegaahyun
카즈하 유경 YuKyeong @yukyeongee_
은채 아정 AJeong @aa_mo_jeong
${
  updatedData &&
  updatedData
    .map((dancer) => {
      const { artistName, wezName, wezEngName, wezIg } = dancer;
      const dancerInfo = `${artistName} ${wezName} ${wezEngName} ${wezIg}\n`;
      return dancerInfo;
    })
    .join('')
}
  
  
  🎞Camera & Edit :
  @we_z_official
  
  
  🙅 욕설 및 불쾌한 댓글은 통보없이 삭제될 수 있습니다.
  Instagram : https://www.instagram.com/we_z_official/
  
  
  #${convertForTag(artistInput)} #${convertForTag(
    musicInput,
  )} #WEZ #${convertForTag(artistInputBracket)} #위즈
  <button class="copy-button">Copy</button>`;
};

const applyNewTitleData = (updatedData) => {
  const { artistInput, artistInputBracket, musicInput, category } = updatedData;
  const titleText = document.querySelector('.title__text');

  titleText.innerHTML = `${
    category === 'public' ? '[KPOP IN PUBLIC]' : ''
  } ${artistInput} (${artistInputBracket}) '${musicInput}' | DANCE COVER ${
    category === 'practice' ? 'PRACTICE | 거울모드 MIRROR MODE' : ''
  }
  <button class="copy-button">Copy</button>`;

  toggleCopyButton();
};

const toggleCopyButton = () => {
  document.querySelectorAll('.right__text').forEach((button) => {
    button.addEventListener('mouseover', (e) => {
      e.currentTarget.childNodes[1].classList.add('hovered');
    });

    button.addEventListener('mouseout', (e) => {
      e.currentTarget.childNodes[1].classList.remove('hovered');
    });
  });
};

const getMusicInfo = (e) => {
  const currentInputId = e.target.getAttribute('id');
  musicData[currentInputId] = e.target.value;

  applyNewTitleData(musicData);
  applyNewContentData();
};

const selectWezMember = (e) => {
  const memberName = e.target.value;

  e.target.parentNode.parentNode.childNodes[5].childNodes[1].value = WezMemberList[memberName]['engName'];
  e.target.parentNode.parentNode.childNodes[7].childNodes[1].value = WezMemberList[memberName]['ig'];

  const memberEngName = e.target.parentNode.parentNode.childNodes[5].childNodes[1].value;
  const memberIg = e.target.parentNode.parentNode.childNodes[7].childNodes[1].value;

  applyNewContentData(selectedWezMemberList);

  const dancerRow = `<tr class="dancer__tr">
  <td class="dancer__cell">
    <input class="dancer__input dancer__input--artist" placeholder="제이홉" type="text" />
  </td>
  <td class="dancer__cell">
    <select class="dancer__input dancer__input--wez">
      <option value="기본">-</option>
      <option value="슬기">슬기</option>
      <option value="재웅">재웅</option>
    </select>
  </td>
  <td class="dancer__cell">
    <input class="dancer__input--name" type="text" value="" readonly />
  </td>
  <td class="dancer__cell">
    <input class="dancer__input--ig" type="text" value="" readonly />
  </td>
  <td class="delete">
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3398 5.1599L5.33893 15.1608"
        stroke="#6B6B6B"
        stroke-width="1.66678"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33893 5.1599L15.3398 15.1608"
        stroke="#6B6B6B"
        stroke-width="1.66678"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </td>
  </tr>`;
  const dancerTable = document.querySelector('.dancer__tbody');
  const wezSelect = document.querySelectorAll('.dancer__input--wez');
  const dancerNum = wezSelect.length;

  if (e.target.value !== '기본' && e.target === wezSelect[dancerNum - 1]) {
    dancerTable.insertAdjacentHTML('beforeend', dancerRow);
  }
};

const deleteDancer = (e) => {
  e.currentTarget.parentNode.remove();
};

const selectCategory = (e) => {
  musicData.category = e.target.value;
  applyNewTitleData(musicData);
};

const convertForTag = (text) => {
  return text.replaceAll(' ', '').toUpperCase();
};

const copyToClipboard = (e) => {
  const targetNode = e.currentTarget.childNodes;
  navigator.clipboard.writeText(targetNode[0].nodeValue);

  targetNode[1].innerText = 'Copied!';
  setTimeout(() => {
    targetNode[1].innerText = 'Copy';
  }, 1000);
};

export { getMusicInfo, selectCategory, copyToClipboard, selectWezMember, deleteDancer };
