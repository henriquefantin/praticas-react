import './Game.css';

import { useState, useRef } from 'react';

const Game = ({
    verifyLetter,
    pickedCategory,
    pickedWord,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) => {
    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");
        letterInputRef.current.focus();
    };

    return (
        <div className="mt-3">
            <h2>Adivinhe a palavra</h2>
            <p className="points">Pontuação: <span>{score}</span></p>
            <p className="tip">Dica sobre a palavra: <span>{pickedCategory}</span></p>
            <p className="mb-3">Voce tem <span>{guesses}</span> tentativas</p>
            <div className="word-container">
                {
                    letters.map((letter, i) =>
                        guessedLetters.includes(letter) ? (
                            <span key={i} className="letter">{letter}</span>
                        ) : (
                            <span key={i} className="blank-square"></span>
                        )
                    )
                }
            </div>
            <div className="letter-cointainer mb-4">
                <p className="mb-3">Insira uma letra:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        required
                        value={letter}
                        onChange={(e) => setLetter(e.target.value)}
                        ref={letterInputRef}
                    />
                    <button >Enviar letra</button>
                </form>
            </div>
            <div className="worng-letters-container">
                {
                    (wrongLetters.length === 0) ? (
                        <p>Não há letras erradas</p>
                    ) : (
                        <>
                            <p>Letras erradas:</p>
                            {
                                wrongLetters.map((letter, i) =>
                                    (i === wrongLetters.length - 1) ? (
                                        <span key={i}>{letter}</span>
                                    ) : (
                                        <span key={i}>{letter}, </span>
                                    )
                                )
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Game