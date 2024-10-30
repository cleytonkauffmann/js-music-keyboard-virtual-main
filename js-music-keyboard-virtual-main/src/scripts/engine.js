const startButton = document.getElementById("start-button");
const welcomeScreen = document.getElementById("welcome-screen");
const pianoContainer = document.getElementById("piano-container");

// Criar o objeto de áudio para a música de boas-vindas
const introMusic = new Audio('src/tunes/crep.mp3');
introMusic.loop = true;
introMusic.play(); // Tocar música ao carregar a tela

// Adiciona evento para o botão de iniciar
startButton.addEventListener("click", () => {
  welcomeScreen.style.display = "none"; // Oculta a tela de boas-vindas
  pianoContainer.style.display = "block"; // Mostra o piano
  introMusic.pause(); // Para a música de introdução
});

// Código do piano...
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio();

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);
