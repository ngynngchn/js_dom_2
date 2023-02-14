/* Aufgabenstellung


Schreibe eine Funktion, die beim Anklicken des Buttons die jeweilige 
Farb-Option aus der Liste entfernt.

Verwende den Code aus dem Kommentar.
Verwende:
onClick
selectedIndex
remove()
 */

const selector = document.querySelector("#farbeAuswahlen");

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
	event.preventDefault();
	let indexToRemove = selector.selectedIndex;
	selector.remove(indexToRemove);
});
