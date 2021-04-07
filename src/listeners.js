import { state } from "./state";

export function handleFlip(event, id) {
  // buscar en la lista dominoes del state
  // el domino que disparó el evento
  console.log("handling flip");
  let dominoList = state.dominoes.filter(domino => {
    return domino.id == id;
  });
  let domino = dominoList[0];
  // que se haga flip
  domino.flip();
  // cambiamos el valor de la lista dominoes
  // del state
  let newDominoes = state.dominoes.map(dom => {
    if (dom.id == id) {
      return domino;
    }
    return dom;
  });
  state.dominoes = newDominoes;
}
