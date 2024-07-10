// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

let oSimpleScorer = {
  name: "Simple Score",
  discription: "Each letter is worth 1 point.",
  scorerFunction: simpleScorer
};

let oVowelBonusScorer= {
  name: "Bonus Vowels",
  discription: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScorer
};

let scrabbleScorer= {
  name: "Scrabble",
  discription: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer
};

const scoringAlgorithms = [oSimpleScorer, oVowelBonusScorer, scrabbleScorer];

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newPointStructure = {
  a:1,
  b:3,
  c:3,
  d:2,
  e:1,
  f:4,
  g:2,
  h:4,
  i:1,
  j:8,
  k:5,
  l:1,
  m:3,
  n:1,
  o:1,
  p:3,
  q:10,
  r:1,
  s:1,
  t:1,
  u:1,
  v:4,
  w:4,
  x:8,
  y:4,
  z:10
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



function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?");
  console.log("0 - Simple Score: Each letter is worth 1 point.");
  console.log("1 - Bonus Vowels: Vowels are 3 pts, consonants are 1 pt.");
  console.log("2 - Scrabble: The traditional scoring algorithm.");
  let algorithmIndex = input.question("Enter 0, 1, or 2: ");
  return scoringAlgorithms[algorithmIndex];
}

function transform() {};

function runProgram() {
   let word = initialPrompt();
   let selectedScorer = scorerPrompt();
   let score = selectedScorer.scorerFunction(word);
   console.log(score);
   //Test scorer functions to see if they work
   //let score = scorerVowelBonus(word);
   //let score = scorerSimple(word);
   //let score = oldScrabbleScorer(word);
   //test newPointStructure object
   //console.log("Scrabble scoring values for");
   //console.log("letter a: ", newPointStructure.a);
   //console.log("letter j: ", newPointStructure.j);
   //console.log("letter z: ", newPointStructure["z"]);
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
