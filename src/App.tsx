import { useState } from "react";
import words from "../wordList.json";
import { HangmanDrawing } from "../components/HangmanDrawing";
import { HangmanWord } from "../components/HangmanWord";
import { Keyboard } from "../components/Keyboard";

function App() {
  // Choose a random word from the wordList.json and set as state
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // Set the state for guessed letters as a default if an array and typed as an array of strings
  const [guessLetters, setGuessLetters] = useState<string[]>([]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
