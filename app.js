const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "#03fcf0",
  "#0314fc",
  "#fc5e03",
  "#a903fc",
  "#03fcd7",
  "#d7fc03",
  "#a103fc",
  "#fc037b",
  "#03dbfc",
];
// add the variables----------------------------------
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
