export let state = {
  _dominoes: [],
  _dominoesListener: function(newStack) {
    console.log("new state.dominoes: ", newStack);
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
    const rawSets = [0, 1, 2, 3, 4, 5, 6].map(number => {
      let lot = [];
      for (let index = number; index < 7; index++) {
        lot.push([number, index]);
      }
      return lot;
    });
    let startingSet = [];
    for (let lot of rawSets) {
      startingSet.push(...lot);
    }
    this.dominoes = startingSet;
    return true;
  }
};
