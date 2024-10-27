// Script para desbloquear los capítulos al hacer clic tres veces
let clickCounts = {};

function unlockChapter(element) {
  const id = element.querySelector('img').alt;

  if (!clickCounts[id]) clickCounts[id] = 0;
  clickCounts[id]++;

  if (clickCounts[id] === 3) {
    element.classList.remove('locked');
    element.classList.add('unlocked');
    element.querySelector('.content').classList.remove('locked-content');
  }
}
