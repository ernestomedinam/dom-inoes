/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { state } from "./state";
import { buildDomino, buildTable, render } from "./builders";

window.onload = function() {
  //write your code here
  let table = buildTable();
  state.start();
  document.body.style.backgroundColor = "darkgreen";
  // console.log("here", table);
};
