var buttons = document.querySelectorAll("button.drum");
var length = buttons.length;

for (var i = 0; i < length; i ++)
  buttons[i].addEventListener("click", function () {
      let RandomNumber1 = Math.floor(Math.random() * 250);
      let RandomNumber2 = Math.floor(Math.random() * 250);
      let RandomNumber3 = Math.floor(Math.random() * 250);
      this.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var letter = this.innerHTML;
      keyboardSounds(letter);
      buttonAnimation(letter);
    });
document.addEventListener("keydown", function(event)
 {
   keyboardSounds(event.key);
   buttonAnimation(event.key);
 })


function keyboardSounds(character)
{
  let RandomNumber1 = Math.floor(Math.random() * 250);
  let RandomNumber2 = Math.floor(Math.random() * 250);
  let RandomNumber3 = Math.floor(Math.random() * 250);
  switch (character) {
    case "w":
      var buttonW = document.querySelectorAll(".drum")[0];
      buttonW.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
    var buttonA = document.querySelectorAll(".drum")[1];
    buttonA.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var buttonS = document.querySelectorAll(".drum")[2];
      buttonS.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var buttonD = document.querySelectorAll(".drum")[3];
      buttonD.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var buttonJ = document.querySelectorAll(".drum")[4];
      buttonJ.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var buttonK = document.querySelectorAll(".drum")[5];
      buttonK.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var buttonL = document.querySelectorAll(".drum")[6];
      buttonL.style.color = "rgb(" + RandomNumber1 + ", " + RandomNumber2 + ", " + RandomNumber3 + ")";
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default: console.log("Something is wrong");
  }
}

function buttonAnimation(buttonKey)
{
  var activeButton = document.querySelector("." + buttonKey);
  activeButton.classList.add("pressed")
  setTimeout(function() {
  activeButton.classList.remove("pressed")
}, 100);
}
