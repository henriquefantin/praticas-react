import './Game.css';

const GameOver = ({ retry, score }) => {
  return (
    <div className="mt-3">
        <h2>Fim do Jogo</h2>
        <p className="points">Pontuação final: <span>{score}</span></p>
        <button type="button" onClick={retry} className="mt-3" >
            Jogar Novamente
        </button>
    </div>
  )
}

export default GameOver