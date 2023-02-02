import musicData from './store.js';

const applyNewData = (updatedData) => {
  const { artistInput, artistInputBracket, musicInput, category } = updatedData;
  const titleText = document.querySelector('.title__text');
  const contentText = document.querySelector('.content__text');

  titleText.innerHTML = `${
    category === 'public' ? '[KPOP IN PUBLIC]' : ''
  } ${artistInput} (${artistInputBracket}) '${musicInput}' | DANCE COVER ${
    category === 'practice' ? 'PRACTICE | 거울모드 MIRROR MODE' : ''
  }
  <button class="copy-button">Copy</button>`;

  contentText.innerHTML = `Dancers :
사쿠라 진영 JinYoung
채원 민희 MinHee @_ni.o.ni_
윤진 가현 GaHyun @leegaahyun
카즈하 유경 YuKyeong @yukyeongee_
은채 아정 AJeong @aa_mo_jeong


🎞Camera & Edit :
@we_z_official


🙅 욕설 및 불쾌한 댓글은 통보없이 삭제될 수 있습니다.
Instagram : https://www.instagram.com/we_z_official/


#LESSERAFIM #ANTIFRAGILE #WEZ #르세라핌 #위즈 #ONETAKE
<button class="copy-button">Copy</button>`;

  document.querySelectorAll('.right__text').forEach((button) => {
    button.addEventListener('mouseover', (e) => {
      e.currentTarget.childNodes[1].classList.add('hovered');
    });
  });
};

const changeMusicInfo = (e) => {
  const currentInputId = e.getAttribute('id');
  musicData[currentInputId] = e.value;
  applyNewData(musicData);
};

const selectCategory = (e) => {
  musicData.category = e.target.value;
  applyNewData(musicData);
};

const copyToClipboard = (text) => {
  text = text.slice(0, -5);

  navigator.clipboard.writeText(text);
};

export { changeMusicInfo, selectCategory, copyToClipboard };
