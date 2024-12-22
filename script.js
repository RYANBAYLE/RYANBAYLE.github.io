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
const machineColors = [rougeMachine, bleuMachine, vertMachine];
const countdownElement = document.getElementById("countdown");
let score = 0;

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
    if (score === 3 || score === -3) {
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
  finish.style.visibility = "hidden"; // Masquer l'écran de fin
  finish.style.opacity = "0";
  P1.style.pointerEvents = "auto"; // Réactiver les clics
  countdownElement.style.opacity = "0";
});
