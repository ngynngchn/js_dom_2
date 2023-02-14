/* Aufgabenstellung


Schreibe eine Funktion, die beim Anklicken der Buttons das first- oder last-ElementChild anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
Den HTML- und CSS-Code findest du im Kommentarbereich.
Nutze
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
innerHTML
querySelectorAll
querySelector
addEventListener
 */

const buttons = document.querySelectorAll("button");

const myList = buttons.forEach((button) => {
	button.addEventListener("click", showElement);
});

function showElement(event) {
	let action = event.target.innerHTML.split(" ").splice(1);
	let myList = document.querySelector("#myList");

	for (let i = 0; i < action.length; i++) {
		myList = myList[action[i]];
	}

	document.querySelector("output").innerHTML = myList.innerHTML;
}
