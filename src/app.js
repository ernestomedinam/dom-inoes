/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { state } from "./state";
import { buildTable } from "./builders";

window.onload = function() {
  //write your code here
  state.start();
  document.body.style.backgroundColor = "darkgreen";
  buildTable();
  let button = document.createElement("button");
  button.innerHTML = "change state";
  button.addEventListener("click", () => console.log(state.stacked));
  document.body.appendChild(button);
  console.log("Hello Rigo from the console!", state.stacked);
  state.registerListener(function(val) {
    console.log("Someone changed the value of state.a to ", val);
  });
};
