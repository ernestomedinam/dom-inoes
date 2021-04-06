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
};
