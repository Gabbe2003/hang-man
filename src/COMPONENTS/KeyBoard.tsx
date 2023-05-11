import React from "react";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const styles = {
  btn: {
    width: '100%',
    border: '3px solid black',
    background: 'none',
    aspectRatio: '1 / 1',
    fontSize: '2.5rem',
    textTransform: 'uppercase',
    padding: '.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'black',
  },
  active: {
    backgroundColor: 'hsl(200, 100%, 50%)',
    color: 'white',
  },
  inactive: {
    opacity: .3,
  },
  hover: {
    backgroundColor: 'hsl(200, 100%, 75%)',
  },
};

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default function MyComponent() {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`btn ${isActive ? 'active' : 'inactive'}`}
      onClick={handleClick}
      disabled={!isActive}
      style={isActive ? styles.hover : undefined}
    >
      Click me
    </button>
  );
}
