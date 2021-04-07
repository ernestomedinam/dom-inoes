import { handleFlip } from "./listeners";
import { state } from "./state";

export const buildTable = () => {
  let foreground = document.querySelector("#app");
  foreground.classList.add(
    "d-flex",
    "w-100",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );
  foreground.style.height = "100vh";
  let table = document.createElement("div");
  table.classList.add(
    "d-flex",
    "flex-wrap",
    "p-5",
    "justify-content-start",
    "align-items-start"
  );
  table.style.height = "80%";
  table.style.width = "80%";
  table.style.backgroundColor = "white";
  table.style.border = "1rem solid saddlebrown";
  table.id = "table";

  foreground.appendChild(table);
  return table;
};

export const buildDomino = dominoObject => {
  let domino = document.createElement("div");
  domino.style.height = "4rem";
  domino.style.width = "2rem";
  domino.classList.add("d-flex", "flex-column", "m-3");
  domino.style.border = "2px solid black";
  domino.style.position = "relative";
  domino.style.cursor = "pointer";
  domino.addEventListener("click", event => handleFlip(event, dominoObject.id));
  if (!dominoObject.flipped) {
    return domino;
  }
  let upper = document.createElement("div");
  let lower = document.createElement("div");
  upper.classList.add(
    "w-100",
    "h-50",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  lower.classList.add(
    "w-100",
    "h-50",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  domino.appendChild(upper);
  domino.appendChild(lower);
  upper.innerHTML = dominoObject.points[0];
  lower.innerHTML = dominoObject.points[1];
  return domino;
};

export function render() {
  let table = document.querySelector("#table");
  table.innerHTML = "";
  for (let domino of state.dominoes) {
    let HTMLDomino = buildDomino(domino);
    table.appendChild(HTMLDomino);
  }
}
