const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "b", "c", "h"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add the event listener
btn.addEventListener("click", function () {
  //   need to loop throught the 6 elements that make up the hex value not including the pound sign.
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomNumber()];
  }
  // logic for showing the random hex value on the body background
  // also showing the hex value on to the color class element
  document.body.style.backgroundColor = hexValue;
  color.textContent = hexValue;
});
// function for genorating random hex values
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
