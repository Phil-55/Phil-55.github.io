const htmlStyle = document.querySelector("html").style
var firstColor = ["green", "red", "purple"]
var allColor = ["#91bbff", "green", "red", "purple"]

document.querySelector("h6").onclick = function () {
	let color
	if (htmlStyle.backgroundColor === "#91bbff" || htmlStyle.backgroundColor === "green" || htmlStyle.backgroundColor === "red" || htmlStyle.backgroundColor === "purple") {
		color = allColor.filter((word) => word != String(htmlStyle.backgroundColor))
	} else {
		color = firstColor
	}
	htmlStyle.backgroundColor = color.at(Math.floor(Math.random() * 3));
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Enter the Shrine of Dog, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Enter the Shrine of Dog, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
