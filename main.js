window.onload = function() {
	var buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "clear", "total"];
	var padding = 120;
	var x = 0;
	var y = 1;
	var sum = 0;

	for (var i = 0; i < buttons.length; i++) {
		x += 1;

		var currentButton = document.createElement("h1");
		var input = document.createElement("h1");
		input.id = "input";
		input.style = "position: absolute; top: 50px; left: 100px; font-family: Arial";

		currentButton.id = buttons[i];
		currentButton.innerText = buttons[i];
		currentButton.style = "cursor: pointer; text-align: center; font-family: Arial; font-color: #2e2e2e; background-color: #d2d2d2; border-radius: 10px; width: 100px; height: 50px; position: absolute";

		if (x == 4) {
			x = 1;
			y += 1;
			currentButton.style.left = (padding * x).toString();
			currentButton.style.top = (padding * y).toString();
		}
		else {
			currentButton.style.left = (padding * x).toString();
			currentButton.style.top = (padding * y).toString();
		}

		document.body.appendChild(currentButton);
		document.body.appendChild(input);
	}

	for (var i2 = 0; i2 < buttons.length; i2++) (function(i2) {
		var currentButton = document.getElementById(buttons[i2]);
		currentButton.onclick = function() {
			if (currentButton.innerText !== "total" && currentButton.innerText !== "clear") {
				if (document.getElementById("input").innerText !== ""){
					document.getElementById("input").innerText += "+" + currentButton.innerText;
				}
				else {
					document.getElementById("input").innerText += currentButton.innerText;
				}
				sum += Number(currentButton.innerText);
			}
			else if (currentButton.innerText == "total") {
				document.getElementById("input").innerText = "Total = " + sum.toString();
			}
			else if (currentButton.innerText == "clear") {
				document.getElementById("input").innerText = "";
				sum = 0;
			}
		}
	}) (i2);
}
