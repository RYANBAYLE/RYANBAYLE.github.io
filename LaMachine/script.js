const P1 = document.querySelector(".player_1");
const rougeMachine = document.getElementById("rougeMachine");
const bleuMachine = document.getElementById("bleuMachine");
const vertMachine = document.getElementById("vertMachine");
const rouge = document.getElementById("rouge");
const bleu = document.getElementById("bleu");
const vert = document.getElementById("vert");
const win = document.getElementById("win"); // Sélection de l'écran de fin
const loose = document.getElementById("loose"); // Sélection de l'écran de fin
const resetButton = document.getElementById("rejouer");
const scoreCounter = document.getElementById("scoreCounter");
const machineColors = [rougeMachine, bleuMachine, vertMachine];
const countdownElement = document.getElementById("countdown");
let score = 0;

// save classement

function storeMorpion() {
  window.localStorage.morpionsList += palmarèsList.innerHTML;
}
function saveMorpionList() {
  if (window.localStorage.morpionsList) {
    palmarèsList.innerHTML += window.localStorage.morpionsList;
  }
}

P1.addEventListener("click", (e) => {
  // Trouver la div parente avec l'ID (si elle existe)
  const element = e.target.closest("div");

  // Vérification si l'élément cliqué est une couleur valide
  if (element && ["rouge", "bleu", "vert"].includes(element.id)) {
    // Réinitialiser l'opacité des couleurs machine
    machineColors.forEach((color) => (color.style.opacity = "0"));

    // Sélectionner une couleur aléatoire
    const randomIndex = Math.floor(Math.random() * machineColors.length);
    const selectedMachineColor = machineColors[randomIndex];

    let count = 4;

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownElement.textContent = count;
      } else {
        clearInterval(interval); // Stoppe le décompte
        countdownElement.textContent = "Go!";
        startAction(); // Appelle l'action à lancer
      }
    }, 500);

    // Action à lancer après le décompte
    function startAction() {
      // Ajoutez ici le code pour ce qui doit se lancer
      // Afficher la couleur générée par la machine
      selectedMachineColor.style.opacity = "1";
      // Mettre à jour le score
      scoreCounter.textContent = "Score : " + score;
      scoreCounter.style.opacity = "1";
    }

    // Réinitialiser l'opacité des couleurs utilisateur
    rouge.style.opacity = "1";
    bleu.style.opacity = "1";
    vert.style.opacity = "1";

    // Masquer les couleurs non sélectionnées
    if (element.id === "rouge") {
      bleu.style.opacity = "0";
      vert.style.opacity = "0";
      countdownElement.style.opacity = "1";
    } else if (element.id === "bleu") {
      rouge.style.opacity = "0";
      vert.style.opacity = "0";
      countdownElement.style.opacity = "1";
    } else if (element.id === "vert") {
      rouge.style.opacity = "0";
      bleu.style.opacity = "0";
      countdownElement.style.opacity = "1";
    }

    // Logique des résultats
    if (
      (element.id === "rouge" && selectedMachineColor === vertMachine) ||
      (element.id === "bleu" && selectedMachineColor === rougeMachine) ||
      (element.id === "vert" && selectedMachineColor === bleuMachine)
    ) {
      score++;
    } else if (
      (element.id === "rouge" && selectedMachineColor === bleuMachine) ||
      (element.id === "bleu" && selectedMachineColor === vertMachine) ||
      (element.id === "vert" && selectedMachineColor === rougeMachine)
    ) {
      score--;
    } else if (
      (element.id === "rouge" && selectedMachineColor === rougeMachine) ||
      (element.id === "bleu" && selectedMachineColor === bleuMachine) ||
      (element.id === "vert" && selectedMachineColor === vertMachine)
    ) {
      score;
    }

    // Vérifier les conditions de fin de jeu
    if (score === 2) {
      win.style.visibility = "visible";
      win.style.opacity = "1";
      P1.style.pointerEvents = "none"; // Désactiver les clics
      const pseudo = playerName.value.trim();
      if (pseudo) {
        let date = new Date();
        let dateFormat = date.toLocaleDateString("fr-FR");
        palmarèsList.innerHTML += `<li>${pseudo} ---------------------------------- ${dateFormat}</li>`;
        storeMorpion();
      }
    }

    if (score === -1) {
      loose.style.visibility = "visible";
      loose.style.opacity = "1";
      P1.style.pointerEvents = "none"; // Désactiver les clics
    }
  } else {
    // Réinitialiser tout si on clique en dehors des couleurs
    machineColors.forEach((color) => (color.style.opacity = "0"));
    rouge.style.opacity = "1";
    bleu.style.opacity = "1";
    vert.style.opacity = "1";
    countdownElement.style.opacity = "0";
    countdownElement.textContent = "";
    count = 4;
  }
});

// Réinitialisation du jeu
resetButton.addEventListener("click", () => {
  score = 0; // Réinitialiser le score
  scoreCounter.style.opacity = "0";
  machineColors.forEach((color) => (color.style.opacity = "0")); // Réinitialiser les couleurs machine
  rouge.style.opacity = "1";
  bleu.style.opacity = "1";
  vert.style.opacity = "1";
  win.style.visibility = "hidden"; // Masquer l'écran de fin
  win.style.opacity = "0";
  loose.style.visibility = "hidden"; // Masquer l'écran de fin
  loose.style.opacity = "0";
  P1.style.pointerEvents = "auto"; // Réactiver les clics
  countdownElement.style.opacity = "0";
});

// Changement de couleur sur les lettres du titre
const nom = document.querySelector(".Nom");

nom.innerHTML = nom.innerHTML.replace("T", '<span class="T">T</span>');
nom.innerHTML = nom.innerHTML.replace("M", '<span class="M">M</span>');
nom.innerHTML = nom.innerHTML.replace("G", '<span class="G">G</span>');

// nom du player
const playerCard = document.querySelector(".Player-card");
const nameEdited = document.getElementById("name-edited");
const playerName = document.getElementById("player-name");
const changerNom = document.getElementById("changer-nom");

playerCard.addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudo = playerName.value.trim();
  let date = new Date();
  let dateFormat = date.toLocaleDateString("fr-FR");
  let Morpion = {
    pseudo: pseudo,
    when: dateFormat,
  };
  nameEdited.textContent = "Morpion: " + pseudo;
  nameEdited.style.textAlign = "center";
  playerName.style.display = "none";
  changerNom.style.display = "inline-block";
});

changerNom.addEventListener("click", () => {
  playerName.value = "";

  playerName.style.display = "inline-block";
  changerNom.style.display = "none";
});

// Palmarès des morpions
const palmarèsMorpions = document.querySelector(".palmarès-morpions");
const palmarèsButton = document.getElementById("palmarès");
const palmarèsWindow = document.querySelector(".palmarès-window");
const palmarèsList = document.getElementById("palmarès-list");

palmarèsButton.addEventListener("click", () => {
  if (palmarèsWindow.style.visibility === "hidden") {
    palmarèsWindow.style.visibility = "visible";
    palmarèsWindow.style.opacity = "1";
  } else {
    palmarèsWindow.style.visibility = "hidden";
    palmarèsWindow.style.opacity = "0";
  }
});

saveMorpionList();

// boy or girl

const morpionGirl = document.getElementById("morpion-girl");
const morpionBoy = document.getElementById("morpion-boy");
const imgGirl = document.getElementById("Perso-player-fille");
const imgBoy = document.getElementById("Perso-player");

morpionGirl.addEventListener("click", () => {
  morpionGirl.style.visibility = "hidden";
  morpionGirl.style.opacity = "0";
  morpionBoy.style.visibility = "visible";
  morpionBoy.style.opacity = "1";

  imgGirl.style.visibility = "visible";
  imgGirl.style.opacity = "1";
  imgBoy.style.visibility = "hidden";
  imgBoy.style.opacity = "0";
});
morpionBoy.addEventListener("click", () => {
  morpionGirl.style.visibility = "visible";
  morpionGirl.style.opacity = "1";
  morpionBoy.style.visibility = "hidden";
  morpionBoy.style.opacity = "0";

  imgGirl.style.visibility = "hidden";
  imgGirl.style.opacity = "0";
  imgBoy.style.visibility = "visible";
  imgBoy.style.opacity = "1";
});
