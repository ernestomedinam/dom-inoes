import { render } from "./builders";
import { Domino } from "./Domino";

export let state = {
  _dominoes: [],
  _dominoesListener: function(newStack) {
    console.log("new state.dominoes: ", newStack);
    render();
  },
  set dominoes(newStack) {
    this._dominoes = newStack;
    this._dominoesListener(newStack);
  },
  get dominoes() {
    return this._dominoes;
  },
  registerListener: function(newListener) {
    this._dominoesListener = newListener;
  },
  start: function() {
    this.dominoes = Domino.start();
    return true;
  }
};
