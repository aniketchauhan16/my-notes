//alert("Connected")

// example 1

document
	.getElementById("ChangeTextButton")
	.addEventListener("click", function () {
		let paragraph = document.getElementById("MyParagraph");
		paragraph.textContent = "Changed the Paragraph";
	});

// example 2

document
	.getElementById("highlightFirstCity")
	.addEventListener("click", function () {
		let citieslist = document.getElementById("citieslist");
		citieslist.firstElementChild.classList.add("highlight");
	});

// example 3

document.getElementById("change order").addEventListener("click", function () {
	let coffee = document.getElementById("coffeetype");
	coffee.textContent = "Espresso";
	coffee.style.backgroundColor = "brown";
	coffee.style.padding = "5px ";
});

//example 4
document.getElementById("addnewItem").addEventListener("click", function () {
	let newitem = document.createElement("li");
	newitem.textContent = "Eggs";
	document.getElementById("shoppinglist").appendChild(newitem);
});

//example5
document
	.getElementById("removeLastItem")
	.addEventListener("click", function () {
		let Lelement = document.getElementById("taskList");
		Lelement.lastElementChild.remove();
	});

//example 6
document
	.getElementById("ClickMeButton")
	.addEventListener("dblclick", function () {
		alert("you just doubleclicked!");
	});

//example 7
document.getElementById("tealist").addEventListener("click", function (event) {
	if (event.target && event.target.matches(".teaitem")) {
		alert("You selected :  " + event.target.textContent);
	}
});

//example 8
document
	.getElementById("feedbackForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		let feedback = document.getElementById("feedbackInput").value;
		console.log(feedback);

		document.getElementById(
			"FeedbackDisplay"
		).textContent = `Feedback is ${feedback}`;
	});

//example 9

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});

//example10

document
	.getElementById("toggleHighlight")
	.addEventListener("click", function () {
		let descriptionText = document.getElementById("descriptionText");
		descriptionText.classList.toggle("highlight");
	});
