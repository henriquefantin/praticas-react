const StartScreen = ({ startGame }) => {
    return (
        <div className="mt-3">
            <h2>Secret Word</h2>
            <p>Clique no botão abaixo para começar!</p>
            <button type="button" onClick={startGame} className="mt-3">
                Começar Jogo
            </button>
        </div>
    )
}

export default StartScreen