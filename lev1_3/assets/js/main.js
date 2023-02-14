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
console.log("💡 ~ buttons", buttons);

const myList = document.querySelector("#myList");
console.log("💡 ~ myList", myList);

const output = document.querySelector("output");

buttons.forEach((button) => {
	button.addEventListener("click", showElement);
});

console.log(output);
console.log(myList.firstElementChild.innerHTML);

function showElement(event) {
	let action = event.target.innerHTML.split(" ").splice(1).join(".");
	console.log(action);
	switch (action) {
		case "firstElementChild":
			output.innerHTML = myList.firstElementChild.innerHTML;
			break;
		case "lastElementChild":
			output.innerHTML = myList.lastElementChild.innerHTML;
			break;
		case "firstElementChild.nextElementSibling":
			output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML;
			break;
		case "lastElementChild.previousElementSibling":
			output.innerHTML =
				myList.lastElementChild.previousElementSibling.innerHTML;
			break;

		default:
			break;
	}
}
