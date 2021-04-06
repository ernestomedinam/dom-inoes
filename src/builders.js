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
    "p-5",
    "justify-content-start",
    "align-items-start"
  );
  table.style.height = "80%";
  table.style.width = "80%";
  table.style.backgroundColor = "white";
  table.style.border = "1rem solid saddlebrown";

  foreground.appendChild(table);
  return true;
};
