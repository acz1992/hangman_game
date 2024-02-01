import { useState } from "react";
import words from "./wordList.json";

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	});

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	console.log(wordToGuess);
	return (
		<div
			style={{
				maxWidth: "800px",
				display: "flex",
				flexDirection: "column",
				gap: "rem",
				margin: "0 auto",
				alignItems: "center",
			}}
		>
			<div style={{ fontSize: "2rem", textAlign: "center" }}>
				Lose Win
			</div>
		</div>
	);
}

export default App;