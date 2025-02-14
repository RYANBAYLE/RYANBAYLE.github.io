const counterDisplay = document.getElementById("counterDisplay");
let counter = 0;

function updateCounterDisplay() {
  counterDisplay.style.color =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  counterDisplay.innerHTML = `<h1 id="counterDisplay">${counter} </h1>`;

  startIntervals(); // Vérifier si on doit changer la fréquence des intervalles
}

function bubbleMaker() {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 100 + 100 + "px";

  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.background =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  const plusMinus = Math.random() > 0 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    updateCounterDisplay();
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

function soapMaker() {
  const soap = document.createElement("span");
  soap.classList.add("soap");
  document.body.appendChild(soap);

  const size = Math.random() * 100 + 100 + "px";
  console.log(soap);
  soap.style.height = size;
  soap.style.width = size;
  soap.style.top = Math.random() * 100 + "%";
  soap.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0 ? 1 : -1;
  soap.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  soap.addEventListener("click", () => {
    counter += 5;
    updateCounterDisplay();
    soap.remove();
  });

  setTimeout(() => {
    soap.remove();
  }, 8000);
}
function teaMaker() {
  const tea = document.createElement("span");
  tea.classList.add("bubbleTea");
  document.body.appendChild(tea);

  const size = Math.random() * 100 + 100 + "px";
  tea.style.height = size;
  tea.style.width = size;
  tea.style.top = Math.random() * 100 + "%";
  tea.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0 ? 1 : -1;
  tea.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  tea.addEventListener("click", () => {
    counter += 2;
    updateCounterDisplay();
    tea.remove();
  });

  setTimeout(() => {
    tea.remove();
  }, 8000);
}
function fishMaker() {
  const fish = document.createElement("span");
  fish.classList.add("fish");
  document.body.appendChild(fish);

  const size = Math.random() * 100 + 100 + "px";
  fish.style.height = size;
  fish.style.width = size;
  fish.style.top = Math.random() * 100 + "%";
  fish.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0 ? 1 : -1;
  fish.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  fish.addEventListener("click", () => {
    counter -= 2;
    updateCounterDisplay();
    fish.remove();
  });

  setTimeout(() => {
    fish.remove();
  }, 8000);
}

let bubbleInterval, soapInterval, teaInterval, fishInterval;
function startIntervals() {
  if (counter <= 10) {
    clearIntervals(); // Arrête les anciens intervalles
    bubbleInterval = setInterval(bubbleMaker, 100);
    soapInterval = setInterval(soapMaker, 1000);
    teaInterval = setInterval(teaMaker, 500);
  } else if (counter > 10 && counter <= 20) {
    document.getElementById("lvl").textContent = "lvl 2";
    clearIntervals();
    bubbleInterval = setInterval(bubbleMaker, 200);
    soapInterval = setInterval(soapMaker, 2000);
    teaInterval = setInterval(teaMaker, 1000);
    fishInterval = setInterval(fishMaker, 750);
  } else if (counter > 20 && counter <= 30) {
    document.getElementById("lvl").textContent = "lvl 3";
    clearIntervals();
    bubbleInterval = setInterval(bubbleMaker, 200);
    soapInterval = setInterval(soapMaker, 2000);
    teaInterval = setInterval(teaMaker, 1000);
    fishInterval = setInterval(fishMaker, 300);
  } else if (counter > 30 && counter <= 40) {
    document.getElementById("lvl").textContent = "lvl 4";
    clearIntervals();
    bubbleInterval = setInterval(bubbleMaker, 200);
    soapInterval = setInterval(soapMaker, 2000);
    teaInterval = setInterval(teaMaker, 1000);
    fishInterval = setInterval(fishMaker, 150);
  } else if (counter > 40 && counter <= 50) {
    document.getElementById("lvl").textContent = "lvl 5";
    clearIntervals();
    bubbleInterval = setInterval(bubbleMaker, 200);
    soapInterval = setInterval(soapMaker, 3000);
    teaInterval = setInterval(teaMaker, 2000);
    fishInterval = setInterval(fishMaker, 75);
  } else if (counter > 50 && counter <= 59) {
    document.getElementById("lvl").textContent = "lvl 6";
    clearIntervals();
    bubbleInterval = setInterval(bubbleMaker, 200);
    soapInterval = setInterval(soapMaker, 4000);
    teaInterval = setInterval(teaMaker, 750);
    fishInterval = setInterval(fishMaker, 50);
  } else {
    document.getElementById("lvl").textContent = "WINNER";
    document.getElementById("lvl").style.width = "100px";

    document.getElementById("finish").style.opacity = "1";
    clearIntervals();
  }
}

function clearIntervals() {
  clearInterval(bubbleInterval);
  clearInterval(soapInterval);
  clearInterval(teaInterval);
  clearInterval(fishInterval);
}
document.getElementById("start").addEventListener("click", () => {
  startIntervals();
  document.getElementById("start").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("lvl").style.opacity = "1";
});
