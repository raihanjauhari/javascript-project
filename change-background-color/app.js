const button = document.querySelector("button");
const body = document.querySelector("body");
const color = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "purple",
  "pink",
];

button.addEventListener("click", changeB);

function changeB() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}
