export let state = {
  stackedInternal: [],
  stackedListener: function(newStack) {},
  set stacked(newStack) {
    this.stackedListener(newStack);
    this.stackedInternal = newStack;
  },
  get stacked() {
    return this.stackedInternal;
  },
  registerListener: function(listener) {
    this.stackedListener = listener;
  },
  start: function() {
    const startingLots = [0, 1, 2, 3, 4, 5, 6].map(number => {
      let lot = [];
      for (let index = number; index < 7; index++) {
        lot.push([number, index]);
      }
      return lot;
    });
    let startingLot = [];
    for (let lot of startingLots) {
      startingLot.push(...lot);
    }
    this.stacked = startingLot;
    return true;
  }
};
