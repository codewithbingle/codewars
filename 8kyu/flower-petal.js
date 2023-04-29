// Instructions
//

// Solution
const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}

// alternative

// function howMuchILoveYou(nbPetals) {
//   let phrase = {
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly",
//   };
//   return phrase[nbPetals % 6];
// }
