class Pet {
  constructor(_nomeAnimale, _nomePadrone, _specieAnimale, _razzaAnimale) {
    this.nomeAnimale = _nomeAnimale;
    this.nomePadrone = _nomePadrone;
    this.specieAnimale = _specieAnimale;
    this.razzaAnimale = _razzaAnimale;
  }
}
const nomeAnimaleInput = document.getElementById("nomeAnimale");
const nomePadroneInput = document.getElementById("nomePadrone");
const specieAnimaleInput = document.getElementById("specieAnimale");
const razzaAnimaleInput = document.getElementById("razzaAnimale");

// riferimento form
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nuovoAnimale1 = new Pet(
    nomeAnimaleInput.value,
    nomePadroneInput.value,
    specieAnimaleInput.value,
    razzaAnimaleInput.value
  );
  const lista = document.getElementById("listaul");
  const nuovoli = document.createElement("li");
  lista.appendChild(nuovoli);
  console.log("QUESTO è IL MIO ANIMALE", nuovoAnimale1);

  const liste = document.querySelectorAll("li");

  for (i = 0; i < liste.length; i++) {
    liste[i].innerText =
      nuovoAnimale1.nomeAnimale +
      " " +
      nuovoAnimale1.nomePadrone +
      " " +
      nuovoAnimale1.specieAnimale +
      " " +
      nuovoAnimale1.razzaAnimale;
  }
  form.reset();
});
