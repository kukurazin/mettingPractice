const annButton = document.getElementsByClassName("annButton");
const monButton = document.getElementsByClassName("monButton");

let annButtonChecker = 1;
let monButtonChecker = 0;

if (annButtonChecker > 0) {
  annButton.style.backgroundColor = "rgb(255, 255, 255)";
  monButton.style.backgroundColor = "rgb(189, 245, 255)";
}

if (monButtonChecker > 0) {
  annButton.style.backgroundColor = "rgb(189, 245, 255)";
  monButton.style.backgroundColor = "rgb(255, 255, 255)";
}

monButton.addEventListener("mouseenter", function () {
  if (annButtonChecker > 0) {
    monButton.style.backgroundColor = "rgb(152, 198, 206)";
  }
});

monButton.addEventListener("click", function () {
  if (annButtonChecker > 0) {
    annButtonChecker = 0;
    monButtonChecker = 1;

    monButton.style.backgroundColor = "rgb(189, 245, 255)";
  }
});

annButton.addEventListener("mouseenter", function () {
  if (monButtonChecker > 0) {
    annButton.style.backgroundColor = "rgb(152, 198, 206)";
  }
});

annButton.addEventListener("click", function () {
  if (monButtonChecker > 0) {
    annButtonChecker = 1;
    monButtonChecker = 0;

    annButton.style.backgroundColor = "rgb(189, 245, 255)";
  }
});
