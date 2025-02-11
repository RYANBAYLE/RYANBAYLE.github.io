document.getElementById("generate").addEventListener("click", function () {
  const length = document.getElementById("password-length").value; // Récupérer la valeur
  let chars = "";

  if (document.getElementById("letters").checked)
    chars += "abcdefghijklmnopqrstuvwxyz";
  if (document.getElementById("uppercase").checked)
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (document.getElementById("numbers").checked) chars += "0123456789";
  if (document.getElementById("symbols").checked) chars += "!@#$%^&*()";

  if (chars === "") {
    document.getElementById("password").value = "Sélectionnez une option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length)); // Utilisation de chars
  }

  document.getElementById("password").value = password;
});
