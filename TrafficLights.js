let stoplightelement = document.getElementById("stopLight");
let readylightelement = document.getElementById("readyLight");
let golightelement = document.getElementById("goLight");
let stopbuttonelement = document.getElementById("stopButton");
let readybuttonelement = document.getElementById("readyButton");
let gobuttonelement = document.getElementById("goButton");

function changecolortored() {
  stoplightelement.style.backgroundColor = "#cf1124";
  readylightelement.style.backgroundColor = "#4b5069";
  golightelement.style.backgroundColor = "#4b5069";
  stopbuttonelement.style.backgroundColor = "#cf1124";
  readybuttonelement.style.backgroundColor = "#1f1d41";
  gobuttonelement.style.backgroundColor = "#1f1d41";
}

function changecolortoyellow() {
  stoplightelement.style.backgroundColor = "#4b5069";
  readylightelement.style.backgroundColor = "#f7c948";
  golightelement.style.backgroundColor = "#4b5069";
  stopbuttonelement.style.backgroundColor = "#1f1d41";
  readybuttonelement.style.backgroundColor = "#f7c948";
  gobuttonelement.style.backgroundColor = "#1f1d41";
}

function changecolortogreen() {
  stoplightelement.style.backgroundColor = "#4b5069";
  readylightelement.style.backgroundColor = "#4b5069";
  golightelement.style.backgroundColor = "#199473";
  stopbuttonelement.style.backgroundColor = "#1f1d41";
  readybuttonelement.style.backgroundColor = "#1f1d41";
  gobuttonelement.style.backgroundColor = "#199473";
}
