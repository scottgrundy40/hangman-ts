import { KEYS } from "../utils/Keys";
import styles from "../Keyboard.module.css";
import { SignatureKind } from "typescript";

const keys = KEYS;

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            key={key}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
