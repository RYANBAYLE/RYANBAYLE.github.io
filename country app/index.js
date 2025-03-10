const display = document.querySelector(".countries-container");
const inputSearch = document.querySelector("#inputSearch");
const minToMax = document.querySelector("#minToMax");
const maxToMin = document.querySelector("#maxToMin");
const alphaSort = document.querySelector("#alphaSort");
const inputRange = document.querySelector("#inputRange");
const rangeValue = document.querySelector("#rangeValue");

let sortMode = "default"; // "asc", "desc", "alphaAsc", "alphaDesc"
let countryLimit = parseInt(inputRange.value); // Nombre de pays à afficher

async function countryApi() {
  try {
    let response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    let data = await response.json();
    console.log(data);

    function showCountries() {
      let searchValue = inputSearch.value.toLowerCase();

      let filteredCountries = data
        .filter((country) =>
          country.name.common.toLowerCase().includes(searchValue)
        )
        .slice(0, countryLimit); // Limite le nombre de pays affichés

      // Gestion du tri en fonction du bouton cliqué
      if (sortMode === "asc") {
        filteredCountries.sort((a, b) => a.population - b.population);
      } else if (sortMode === "desc") {
        filteredCountries.sort((a, b) => b.population - a.population);
      } else if (sortMode === "alphaAsc") {
        filteredCountries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      } else if (sortMode === "alphaDesc") {
        filteredCountries.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        );
      }

      display.innerHTML = filteredCountries
        .map((country) => {
          let languages = country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A";
          return `<div class="country-list">
                    <h1>${country.name.common}</h1>
                    <p>Capitale: ${
                      country.capital ? country.capital[0] : "N/A"
                    }</p>
                    <p>Langue(s): ${languages}</p>
                    <p>Population: ${country.population.toLocaleString()} habitants</p>
                    <img src="${country.flags.png}" alt="${country.flags.alt}">
                  </div>`;
        })
        .join("");
    }

    inputSearch.addEventListener("input", showCountries);

    // Événements sur les boutons de tri
    minToMax.addEventListener("click", () => {
      sortMode = "asc";
      showCountries();
    });

    maxToMin.addEventListener("click", () => {
      sortMode = "desc";
      showCountries();
    });

    alphaSort.addEventListener("click", () => {
      sortMode = sortMode === "alphaAsc" ? "alphaDesc" : "alphaAsc";
      showCountries();
    });

    // Mise à jour du nombre de pays affichés avec le range slider
    inputRange.addEventListener("input", () => {
      countryLimit = parseInt(inputRange.value);
      rangeValue.textContent = countryLimit; // Met à jour l'affichage du nombre de pays
      showCountries();
    });

    showCountries(); // Affiche les pays au chargement
  } catch (error) {
    console.error("Erreur :", error);
  }
}

countryApi();
