// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
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
  
  return `Score for ${word}: ${simpleScore}`;
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
  return `Score for ${word}': ${vBonusScore}`;
}

let newPointStructure;

//let simpleScorer;

//let vowelBonusScorer;

let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

function runProgram() {
   let word = initialPrompt();
   let score = vowelBonusScorer(word);
   //let score = simpleScorer(word);
   //let score = oldScrabbleScorer(word);
   console.log(score);
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
