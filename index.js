var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

console.log(randomNumber1);

var diceimage = "images/dice" + randomNumber1 + ".png";

var p1 = document.getElementsByTagName("img")[0];

p1.setAttribute("src", diceimage);

var randomNumber2 = Math.random();

randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

console.log(randomNumber2);

var diceimage = "images/dice" + randomNumber2 + ".png";

var p2 = document.getElementsByTagName("img")[1];

p2.setAttribute("src", diceimage);
win = document.getElementsByTagName("h1")[0];

if (randomNumber1 > randomNumber2) {
  win.innerHTML = " 🚩 Play 1 Wins!";
} 
else if (randomNumber1 == randomNumber2) {
  win.innerHTML = "Draw!";
} 
else {
  win.style.textAlign = "center";
  win.innerHTML = " 🚩 Play 2 Wins!";
}
