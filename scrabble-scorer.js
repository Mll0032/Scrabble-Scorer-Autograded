// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");


const scoringAlgorithms = [
  {
    name: "Simple Score",
    discription: "Each letter is worth 1 point.",
    scorerFunction: simpleScorer
  },
  {
    name: "Bonus Vowels",
    discription: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: vowelBonusScorer
  },
  {
    name: "Scrabble",
    discription: "The traditional scoring algorithm.",
    scorerFunction: scrabbleScorer
  }
];

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const newPointStructure = transform(oldPointStructure);

function transform(oldPointStructure) {
  let newPointStructure = {};
  for (valuesKey in oldPointStructure) {
    let letters = oldPointStructure[valuesKey];
    for (let i = 0; i < letters.length; i++) {
      newPointStructure[letters[i].toLowerCase()] = parseInt(valuesKey);
    }
  }
  return newPointStructure;
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

 function scrabbleScorer(word) {
  word = word.toLowerCase();
  let score = 0;

  for (let i = 0; i < word.length; i++) {
    score += newPointStructure[word[i]];
  }

  return score;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  userWord = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
  return userWord;
};

function simpleScorer(word) {
  let simpleScore = 0;
  for (let i = 0; i < word.length; i++) {
    simpleScore += 1;
  }
  
  return simpleScore;
}

function vowelBonusScorer(word) {
  let vowels = ["A", "E", "I", "O", "U"];
  let vBonusScore = 0
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      vBonusScore += 3;
    }else {
      vBonusScore += 1;
    }
  }
  return vBonusScore;
}

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?");
  console.log("0 - Simple Score: Each letter is worth 1 point.");
  console.log("1 - Bonus Vowels: Vowels are 3 pts, consonants are 1 pt.");
  console.log("2 - Scrabble: The traditional scoring algorithm.");
  let algorithmIndex = input.question("Enter 0, 1, or 2: ");
  return scoringAlgorithms[algorithmIndex];
}

function runProgram() {
   let word = initialPrompt();
   let selectedScorer = scorerPrompt();
   let score = selectedScorer.scorerFunction(word);
   console.log(`Score for ${word}: ${score}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
