// Rules
const mainImg = document.querySelector(".main-img");
const Yuyien = document.getElementById("Yuyien");
const rules = document.getElementById("rules");
console.log(Yuyien);

Yuyien.addEventListener("click", () => {
  Yuyien.style.visibility = "hidden";
  Yuyien.style.opacity = "0";
  rules.style.visibility = "visible";
  rules.style.opacity = "1";
});
rules.addEventListener("click", () => {
  Yuyien.style.visibility = "visible";
  Yuyien.style.opacity = "1";
  rules.style.visibility = "hidden";
  rules.style.opacity = "0";
});

// nom de maitre Yu
const inputYu = document.getElementById("input-Yu");
const MaitreYuForm = document.querySelector(".Maitre-Yu-one");
const YuName = document.getElementById("Yu-name");
const YuNameEdit = document.getElementById("changer-nom-Yu");

MaitreYuForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudo = inputYu.value.trim();
  if (pseudo) {
    YuName.textContent = "Maître: " + pseudo;
    YuName.style.textAlign = "center";
    inputYu.style.display = "none";
    YuNameEdit.style.display = "inline-block";
  }

  YuNameEdit.addEventListener("click", () => {
    inputYu.style.display = "inline-block";
    YuNameEdit.style.display = "none";
    YuName.textContent = "Maître-Yu";
    inputYu.value = "";
  });
});
// mot de maitre Yu
const inputYuMot = document.getElementById("input-Yu-mot");
const motYuForm = document.querySelector(".Maitre-Yu-mot");
const YuMot = document.getElementById("Yu-mot");
const YuMotEdit = document.getElementById("changer-mot-Yu");

motYuForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudoMotYu = inputYuMot.value.trim();
  if (pseudoMotYu) {
    YuMot.textContent = "Le premier mot: " + pseudoMotYu;
    YuMot.style.textAlign = "center";
    inputYuMot.style.display = "none";
    YuMotEdit.style.display = "inline-block";
  }

  YuMotEdit.addEventListener("click", () => {
    inputYuMot.style.display = "inline-block";
    YuMotEdit.style.display = "none";
    YuMot.textContent = "Le mot du Maître";
    inputYuMot.value = "";
  });
});
// nom de Yien-1
const inputNameLeft = document.getElementById("input-name-left");
const YienOneForm = document.querySelector(".Yien-one");
const YienOneName = document.getElementById("Yien-name-left");
const YienOneNameEdit = document.getElementById("changer-nom-left");

YienOneForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudoYienOne = inputNameLeft.value.trim();
  if (pseudoYienOne) {
    YienOneName.textContent = "Yien: " + pseudoYienOne;
    YienOneName.style.textAlign = "center";
    inputNameLeft.style.display = "none";
    YienOneNameEdit.style.display = "inline-block";
  }

  YienOneNameEdit.addEventListener("click", () => {
    inputNameLeft.style.display = "inline-block";
    YienOneNameEdit.style.display = "none";
    YienOneName.textContent = "Yien-1";
    inputNameLeft.value = "";
  });
});
// mot du Yien-1
const inputMotLeft = document.getElementById("input-mot-left");
const motOneForm = document.querySelector(".mot-one");
const motOneName = document.getElementById("mot-one-left");
const motOneEdit = document.getElementById("changer-mot-left");

motOneForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudoMotOne = inputMotLeft.value.trim();
  if (pseudoMotOne) {
    motOneName.classList.add("mot-hidden");
    motOneName.textContent = "Ton mot: " + pseudoMotOne;
    motOneName.style.textAlign = "center";
    inputMotLeft.style.display = "none";
    motOneEdit.style.display = "inline-block";
  }
  motOneEdit.addEventListener("click", () => {
    motOneName.classList.remove("mot-hidden");
    inputMotLeft.style.display = "inline-block";
    motOneEdit.style.display = "none";
    motOneName.textContent = "Mot-Secret";
    inputMotLeft.value = "";
  });
});
// nom de Yien-2
const inputNameRight = document.getElementById("input-name-right");
const YienTwoForm = document.querySelector(".Yien-two");
const YienTwoName = document.getElementById("Yien-name-right");
const YienTwoNameEdit = document.getElementById("changer-nom-right");

YienTwoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudoYienTwo = inputNameRight.value.trim();
  if (pseudoYienTwo) {
    YienTwoName.textContent = "Yien: " + pseudoYienTwo;
    YienTwoName.style.textAlign = "center";
    inputNameRight.style.display = "none";
    YienTwoNameEdit.style.display = "inline-block";
  }

  YienTwoNameEdit.addEventListener("click", () => {
    inputNameRight.style.display = "inline-block";
    YienTwoNameEdit.style.display = "none";
    YienTwoName.textContent = "Yien-2";
    inputNameRight.value = "";
  });
});
// mot du Yien2
const inputMotRight = document.getElementById("input-mot-right");
const motTwoForm = document.querySelector(".mot-two");
const motTwoName = document.getElementById("mot-two-right");
const motTwoEdit = document.getElementById("changer-mot-right");

motTwoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudoMotTwo = inputMotRight.value.trim();
  if (pseudoMotTwo) {
    motTwoName.classList.add("mot-hidden");
    motTwoName.textContent = "Ton mot: " + pseudoMotTwo;
    motTwoName.style.textAlign = "center";
    inputMotRight.style.display = "none";
    motTwoEdit.style.display = "inline-block";
  }
  motTwoEdit.addEventListener("click", () => {
    motTwoName.classList.remove("mot-hidden");
    inputMotRight.style.display = "inline-block";
    motTwoEdit.style.display = "none";
    motTwoName.textContent = "Mot-Secret";
    inputMotRight.value = "";
  });
});

// add mots
const NouveauMotForm = document.querySelector(".nouveau-mot-form");
const NouveauMotInput = document.getElementById("nouveau-mot-input");
const listSelect = document.getElementById("list-view");

NouveauMotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const LeMot = NouveauMotInput.value.trim();

  if (LeMot) {
    // Vérifier si le mot existe déjà dans les options
    const options = Array.from(listSelect.options);
    const motExiste = options.some((option) => option.textContent === LeMot);
    NouveauMotInput.style.background = "green";

    if (!motExiste) {
      // Ajouter seulement si le mot n'existe pas
      listSelect.innerHTML += `<option value="">${LeMot}</option>`;
      NouveauMotInput.value = "";
    } else {
      NouveauMotInput.style.background = "red";
      NouveauMotInput.value = "";
    }
  }
  if (
    (NouveauMotInput.value === "" &&
      NouveauMotInput.style.background === "green") ||
    (NouveauMotInput.value === "" && NouveauMotInput.style.background === "red")
  ) {
    setTimeout(() => {
      NouveauMotInput.style.background = "white";
    }, 500);
  }
});
