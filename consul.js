async function calculateTotalCalories() {
  var w = document.getElementById("Taille")?.value;
  var cf = document.getElementById("cf").checked;
  var AP = document.getElementById("AP")?.value;
  let poid;
  if (cf) {
    poid = w - 100 - (w - 150) / 2.5;
  } else {
    // Formule pour le poids idéal d'un homme
    poid = w - 100 - (w - 150) / 4;
  }

  console.log(w, AP);

  var resultat = poid * AP;
  document.getElementById(
    "res"
  ).innerHTML = `<p>Votre total calories est${resultat}</p>`;
  resultat.textContent = y;
  // "Votre total colorie est" + (calculateIdealWeight(w) * AP).toFixed(2);
}

async function calculateIdealWeight(event) {
  event.preventDefault();
  const height = document.getElementById("height").value;
  const isFemale = document.getElementById("gender").checked;

  if (isNaN(height) || height <= 0) {
    alert("Veuillez entrer une taille valide en cm.");
    return;
  }

  let idealWeight;
  if (isFemale) {
    // Formule pour le poids idéal d'une femme
    idealWeight = height - 100 - (height - 150) / 2.5;
  } else {
    // Formule pour le poids idéal d'un homme
    idealWeight = height - 100 - (height - 150) / 4;
  }

  // Affichage du résultat
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Votre poids idéal est ${idealWeight.toFixed(
    2
  )} kg.`;
}

async function test(event) {
  event.preventDefault();
  var h = document.getElementById("height")?.value;
  var w = document.getElementById("weight")?.value;
  console.log(w, h);

  var resu = w / (h * h);
  document.getElementById("resu").innerHTML = "<p>" + resu + "</p>";
}
