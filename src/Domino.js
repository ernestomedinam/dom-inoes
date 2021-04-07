export class Domino {
  constructor(id, left, right) {
    this.id = id;
    this.points = [left, right];
    this.flipped = false;
    return this;
  }
  flip() {
    this.flipped = !this.flipped;
  }
  static start() {
    let startingSet = this.buildSets();
    let startingDominoes = [];
    let count = 59;
    for (let set of startingSet) {
      let newDomino = new this(count, set[0], set[1]);
      startingDominoes.push(newDomino);
      count++;
    }
    return startingDominoes;
  }
  static buildSets() {
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
    return startingSet;
  }
}

// export function Domino(left, right) {
//   this.points = [left, right];
//   this.flipped = false;
//   return this;
// }

// // methods; instance/object methods
// Domino.prototype.flip = function() {
//   this.flipped = !this.flipped;
// };

// // static method equivalent; classmethod in python.
// Domino.start = function() {
//   let startingSet = this.buildSets();
//   let startingDominoes = [];
//   for (let set of startingSet) {
//     let newDomino = new this(set[0], set[1]);
//     startingDominoes.push(newDomino);
//   }
//   return startingDominoes;
// };

// Domino.buildSets = function() {
//     const rawSets = [0, 1, 2, 3, 4, 5, 6].map(number => {
//         let lot = [];
//         for (let index = number; index < 7; index++) {
//             lot.push([number, index]);
//         }
//         return lot;
//     });
//     console.log(rawSets);
//     let startingSet = [];
//     for (let lot of rawSets) {
//         console.log(lot);
//         startingSet.push(...lot);
//     }
//     return startingSet;
// };
