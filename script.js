const P1 = document.querySelector(".player_1");
const rougeMachine = document.getElementById("rougeMachine");
const bleuMachine = document.getElementById("bleuMachine");
const vertMachine = document.getElementById("vertMachine");
const rouge = document.getElementById("rouge");
const bleu = document.getElementById("bleu");
const vert = document.getElementById("vert");
const finish = document.getElementById("finish"); // Sélection de l'écran de fin
const resetButton = document.getElementById("rejouer");
const scoreCounter = document.getElementById("scoreCounter");
const result = document.getElementById("résultat");

const machineColors = [rougeMachine, bleuMachine, vertMachine];
let score = 0; // Initialisation du score

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

    // Afficher la couleur générée par la machine
    selectedMachineColor.style.opacity = "1";

    // Réinitialiser l'opacité des couleurs utilisateur
    rouge.style.opacity = "1";
    bleu.style.opacity = "1";
    vert.style.opacity = "1";

    // Masquer les couleurs non sélectionnées
    if (element.id === "rouge") {
      bleu.style.opacity = "0";
      vert.style.opacity = "0";
    } else if (element.id === "bleu") {
      rouge.style.opacity = "0";
      vert.style.opacity = "0";
    } else if (element.id === "vert") {
      rouge.style.opacity = "0";
      bleu.style.opacity = "0";
    }

    // Logique des résultats
    if (
      (element.id === "rouge" && selectedMachineColor === vertMachine) ||
      (element.id === "bleu" && selectedMachineColor === rougeMachine) ||
      (element.id === "vert" && selectedMachineColor === bleuMachine)
    ) {
      score++;
      result.textContent = "YOU WIN!";
    } else if (
      (element.id === "rouge" && selectedMachineColor === bleuMachine) ||
      (element.id === "bleu" && selectedMachineColor === vertMachine) ||
      (element.id === "vert" && selectedMachineColor === rougeMachine)
    ) {
      score--;
      result.textContent = "YOU LOSE!";
    } else if (
      (element.id === "rouge" && selectedMachineColor === rougeMachine) ||
      (element.id === "bleu" && selectedMachineColor === bleuMachine) ||
      (element.id === "vert" && selectedMachineColor === vertMachine)
    ) {
      result.textContent = "NULL";
    }

    // Mettre à jour le score
    scoreCounter.textContent = "Score : " + score;

    // Vérifier les conditions de fin de jeu
    if (score === 5 || score === -5) {
      finish.style.visibility = "visible";
      finish.style.opacity = "1";
      P1.style.pointerEvents = "none"; // Désactiver les clics
    }
  } else {
    // Réinitialiser tout si on clique en dehors des couleurs
    machineColors.forEach((color) => (color.style.opacity = "0"));
    rouge.style.opacity = "1";
    bleu.style.opacity = "1";
    vert.style.opacity = "1";
    result.textContent = "";
  }
});

// Réinitialisation du jeu
resetButton.addEventListener("click", () => {
  score = 0; // Réinitialiser le score
  scoreCounter.textContent = "Score : " + score;
  result.textContent = ""; // Effacer le résultat
  machineColors.forEach((color) => (color.style.opacity = "0")); // Réinitialiser les couleurs machine
  rouge.style.opacity = "1";
  bleu.style.opacity = "1";
  vert.style.opacity = "1";
  finish.style.visibility = "hidden"; // Masquer l'écran de fin
  finish.style.opacity = "0";
  P1.style.pointerEvents = "auto"; // Réactiver les clics
});
