// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener("DOMContentLoaded", start);

function start() {
  bindEventListeners(document.getElementsByClassName("board")[0].children);
}

function bindEventListeners(dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener("contextmenu", makeGreen);
    dots[i].addEventListener("click", makeBlue);
    dots[i].addEventListener("dblclick", hide);
  }
}

function makeGreen(evt) {
  evt.preventDefault();
  let classArray = evt.target.classList;
  if (!classArray.contains("blue") && !classArray.contains("invisible")) {
    evt.target.classList.toggle("green");
    updateCounts();
  }
}

// CREATE FUNCTION makeBlue HERE

const makeBlue = (evt) => {
  let classArray = evt.target.classList;
  if (!classArray.contains("green") && !classArray.contains("invisible")) {
    evt.target.classList.toggle("blue");
    updateCounts();
  }
};

// CREATE FUNCTION hide HERE

const hide = (evt) => {
  const classL = evt.target.classList;
  classL.toggle("invisible");
  classL.remove("green", "blue");

  updateCounts();
};

function updateCounts() {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0,
  };

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  for (const colour in totals) {
    let amount = document.getElementsByClassName(colour).length;
    totals[colour] = amount;
  }
  // Once you've done the counting, this function will update the display
  displayTotals(totals);
}

function displayTotals(totals) {
  for (var key in totals) {
    document.getElementById(key + "-total").innerHTML = totals[key];
  }
}
