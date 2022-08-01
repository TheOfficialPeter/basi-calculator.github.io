window.onload = function() {
	var buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "clear", "sum"];
	var padding = 120;
	var x = 0;
	var y = 1;

	for (var i = 0; i < buttons.length; i++) {
		x += 1;
		var currentButton = document.createElement("h1");
		var input = document.createElement("h1");
		input.style = "position: absolute; top: 50px; left: 100px;";

		currentButton.innerText = buttons[i];
		currentButton.style = "cursor: pointer; text-align: center; font-family: Arial; font-color: #2e2e2e; background-color: #d2d2d2; border-radius: 10px; width: 100px; height: 50px; position: absolute";

		if (x == 4) {
			x = 1;
			y += 1; 
			currentButton.style.left = (padding*x).toString();
			currentButton.style.top = (padding*y).toString();
		}
		else {
			currentButton.style.left = (padding*x).toString();
			currentButton.style.top = (padding*y).toString();
		}

		document.body.appendChild(currentButton);
		document.body.appendChild(input);

		currentButton.onclick = function() {
			console.log(currentButton.innerHTML);
			input.innerText = currentButton.innerText;
		}
	}
}
