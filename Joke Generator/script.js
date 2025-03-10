async function fetchData() {
  try {
    let response = await fetch("https://api.blablagues.net/?rub=blagues");
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    let result = await response.json();
    console.log(result.data);
    const data = result.data.content;
    document.getElementById("header").textContent = data.text_head;
    document.getElementById("content").textContent =
      data.text !== "" ? data.text : data.text_hidden;
  } catch (error) {
    console.error("Erreur :", error);
  }
}
document.querySelector(".app").addEventListener("click", fetchData);
