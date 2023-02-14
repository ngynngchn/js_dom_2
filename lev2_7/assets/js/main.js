/* Aufgabenstellung


Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
Der HTML und CSS Code befindet sich im Kommentar.
Nutze
querySelector()
addEventListener()
let counter = 0;
createElement()
textContent()
appendChild()
classList
 */

let button = document.querySelector("button");

button.addEventListener("click", addNumber);

let counter = 0;

function addNumber() {
	let number = document.createElement("div");
	number.textContent = counter++;
	if (counter % 10 == 1) {
		number.classList.add("weiss");
	} else {
		number.classList.add("rechteck");
	}
	document.querySelector(".umwickeln").appendChild(number);
}
