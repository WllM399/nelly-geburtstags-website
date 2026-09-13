const polaroidWall = document.querySelector('.js-polaroid-wall');
const evidenceFiles = document.querySelector('.js-evidence-files');

// Polaroid Bilder

for (let i = 1; i <= 41; i++) {
  const image = document.createElement('img');

  image.src = `images/normal/img (${i}).jpg`;
  image.alt = `Nelly Erinnerung ${i}`;
  polaroidWall.appendChild(image);
}

// Evidence Files

const evidenceData = [
  ['SUBJECT: NELLY', 'STATUS: IM EUROPAPARK', 'FRAGWÜRDIG'],
  ['BEWEISART: FOTOGRAPHIE', 'GEFAHRENSTUFE: NICHT EINZUSCHÄTZEN', 'MERKWÜRDIG'],
  ['CASE: 003', 'STATUS: KOMISCH', 'LUSTIG'],
  ['SUBJECT: FRIDA + NUTELLY', 'GEFAHRENSTUFE: ???', 'IM UNTERRICHT'],
  ['CASE: ***', 'STATUS: WARTEND', 'SITZEND'],
  ['BEWEISART: VISUELL', 'STATUS: KOMISCH GUCKEND', 'ARCHIVIERT'],
  ['SUBJECT: NELLY 🐟', 'LOCATION: KÜCHE', 'KNALLGELB'],
  ['CASE: UNBEKANNT', 'GEFAHRENSTUFE: HOCH', 'IDENTIFIZIERT'],
  ['BEWEISMITTEL: SNAPFILTER', 'STATUS: VERSCHWOMMEN', 'GUCKEND'],
  ['SUBJECT: NELLY', 'STATUS: SUS', 'NACHDENKLICH'],
  ['CASE: 011', 'STATUS: MÄNNLICH', 'OHNE FILTER'],
  ['BEWEISART: VISUAL', 'ÄHNLICHKEIT: HORST AUS BAREN FÜR RARES', 'KÄUFERISCH'],
  ['SUBJECT: UNBEKANNT', 'STATUS: FRAGWÜRDIG', 'MASTER MIND'],
  ['CASE: BOB', 'STATUS: BART', 'KEVIN'],
  ['LOCATION: SCHWARZWALD', 'STATUS: HANDYSÜCHTIG', 'GROßÄUGIG'],
  ['SUBJECT: ///', 'GEFAHRENSTUFE: GLATZE', '///'],
  ['SUBJECT: VERLIEBT ', 'STATUS: BLASEND', '???'],
  ['FINAL CASE', 'WARNSTUFE: SUBWAY SURFER', 'TOP SECRET']
];

for (let i = 1; i <= 18; i++) {
  const file = document.createElement('article');
  const image = document.createElement('img');
  const info = document.createElement('div');
  const button = document.createElement('button');

  file.classList.add('evidence-file');
  image.classList.add('evidence-image');
  info.classList.add('evidence-info');
  button.classList.add('evidence-reveal');

  image.src = `images/komisch/img (${i}).jpg`;
  image.alt = `Nelly Akte ${i}`;

  info.innerHTML = `
    <span>${evidenceData[i - 1][0]}</span>
    <span>${evidenceData[i - 1][1]}</span>
    <span>${evidenceData[i - 1][2]}</span>
  `;

  button.textContent = 'BEWEIS ÖFFNEN';

  file.appendChild(info);
  file.appendChild(image);
  file.appendChild(button);
  evidenceFiles.appendChild(file);

  button.addEventListener('click', () => {
    file.classList.add('revealed');
  });
}


// Lightbox
const imageModal = document.querySelector('.js-image-modal');
const imageModalImage = document.querySelector('.js-image-modal-image');
const imageModalClose = document.querySelector('.js-image-modal-close');

const galleryImages = document.querySelectorAll('.polaroid-wall img, .evidence-image');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    const evidenceFile = image.closest('.evidence-file');

    if (evidenceFile && !evidenceFile.classList.contains('revealed')) {
      return;
    }

    imageModalImage.src = image.src;
    imageModalImage.alt = image.alt;
    imageModal.classList.add('active');
  });
});

imageModalClose.addEventListener('click', () => {
  imageModal.classList.remove('active');
});

imageModal.addEventListener('click', (event) => {
  if (event.target === imageModal) {
    imageModal.classList.remove('active');
  }
});

// Passwort Teil

const gateInput = document.querySelector('.js-gate-input');
const gateButton = document.querySelector('.js-gate-button');
const gateError = document.querySelector('.js-gate-error');
const evidenceSection = document.querySelector('.evidence-section');

gateButton.addEventListener('click', () => {
  if (gateInput.value.toLowerCase() === 'nelly') {
    evidenceSection.classList.add('unlocked');
    gateError.classList.remove('active');

    setTimeout(() => {
      evidenceSection.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  } else {
    gateError.classList.add('active');
    gateInput.value = '';
    gateInput.focus();
  }
});
