// Css
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

const guessesQty = 5;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordCategory = useCallback(() => {
    // Escolher categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Escolher palavra aleatória da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  // Controlador do jogo - iniciar, jogar e terminar
  const startGame = useCallback(() => {
    // Escolher palavra e categoria
    const { word, category } = pickWordCategory();

    let wordLetters = word.split("");
    let wordLettersLower = wordLetters.map(letra => letra.toLowerCase());

    // Definir dados encontrados
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLettersLower);

    // Iniciar o jogo
    setGameStage(stages[1].name);
  }, [pickWordCategory]);

  // Processar as entradas do jogo
  const verifyLetter = (letter) => {
    const letterToLower = letter.toLowerCase();

    // Verificar se a letra já foi utilizada
    if (guessedLetters.includes(letterToLower) || wrongLetters.includes(letterToLower)) {
      return;
    }

    // Verificar se a letra pertence à palavra
    if (letters.includes(letterToLower)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letterToLower
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        letterToLower
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // Tentativas terminadas
  useEffect(() => {
    // Reiniciar o jogo
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Conferir vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // Vitória
    if (guessedLetters.length === uniqueLetters.length) {
      // Adicionar pontuação
      setScore((actualScore) => actualScore += 100);
      
      // Reiniciar o jogo
      clearLetterStates();
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  // Reiniciar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  }

  return (
    <>
      <div className="centralizado">
        {gameStage === stages[0].name && <StartScreen startGame={startGame} />}
        {
          gameStage === stages[1].name &&
          <Game
            verifyLetter={verifyLetter}
            pickedCategory={pickedCategory}
            pickedWord={pickedWord}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        }
        {gameStage === stages[2].name && <GameOver retry={retry} score={score} />}
      </div>
    </>
  )
}

export default App
