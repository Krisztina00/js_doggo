"use strict";

function tartalomQA(adat) {
  // Újra létrehozom a home-elemet.
  const home = document.getElementById("home");
  let elem = document.createElement("div");
  elem.setAttribute("id", "home");

  // Tartalom feltöltése.
  let h1 = document.createElement("h1");
  let h1Szoveg = document.createTextNode(adat.cim);
  h1.appendChild(h1Szoveg);
  elem.appendChild(h1);
  let img = document.createElement("img");
  img.src = `${adat.kep}`;

  elem.appendChild(img);
  // A két home elem cseréje.
  tartalom.replaceChild(elem, home);
}
