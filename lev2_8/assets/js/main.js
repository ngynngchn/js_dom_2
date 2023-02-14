/* Aufgabenstellung


Schreibe eine Funktion, die beim Anklicken des Buttons ein neues Listenelement erstellt.
Der HTML und CSS Code befindet sich im Kommentar.
Nutze
querySelector()
addEventListener()
createElement()
createTextNode()
appendChild()

Bonus: Beim Betätigen der ENTER-Taste wird ebenfalls ein Listenelement erstellt.
Suche nach keycode.
 */

let button = document.querySelector("#enter");

button.addEventListener("click", addElement);

function addElement() {
	let userInput = document.querySelector("#userinput").value;
	let newElement = document.createElement("li");

	newElement.appendChild(document.createTextNode(userInput));
	document.querySelector("ul").appendChild(newElement);
}
