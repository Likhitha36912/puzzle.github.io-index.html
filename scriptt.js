// Array of words to guess
const words = [
	"apple",
	"banana",
	"cherry",
	"orange",
	"peach",
	"pear"
];

// Array of hints for each word
const hints = [
	"A fruit that's red or green",
	"A long, yellow fruit",
	"A small, red fruit",
	"A citrus fruit",
	"A fruit with a fuzzy skin",
	"A fruit that's green on the outside and white on the inside"
];

// Randomly select a word and its hint
const randomIndex = Math.floor(Math.random() * words.length);
const word = words[randomIndex];
const hint = hints[randomIndex];

// Array of letters in the word
const letters = word.split("");

// Initialize array to hold guessed letters
const guessedLetters = new Array(letters.length);
guessedLetters.fill("_");

// Display the word and hint
const wordElement = document.getElementById("word");
const hintElement = document.getElementById("hint");
wordElement.textContent = guessedLetters.join(" ");
hintElement.textContent = hint;

// Function to check if a guess is correct
function checkGuess() {
	const guessElement = document.getElementById("guess");
	const guess = guessElement.value.toLowerCase();
	guessElement.value = "";

	if (guess.length !== 1) {
		alert("Please enter a single letter.");
		return;
	}

	let found = false;

	for (let i = 0; i < letters.length; i++) {
		if (letters[i] === guess) {
			guessedLetters[i] = guess;
			found = true;
		}
	}

	wordElement.textContent = guessedLetters.join(" ");

	if (!found) {
		alert("Sorry, that letter is not in the word.This is the deadshot round.");
            window.location.href = "file:///C:/Users/hp/OneDrive/Desktop/Documents/clue1.html";
		return;
	}

	if (guessedLetters.indexOf("_") === -1) {
		const resultElement = document.getElementById("result");
alert("Congratulations! You have solved the riddle and revealed the location of the next clue!");
				// replace the url with the actual location of the next clue
				window.location.href = "file:///C:/Users/hp/OneDrive/Desktop/Documents/clue7.html";
	}
}