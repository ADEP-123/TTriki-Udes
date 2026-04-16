function ScoreBoard({ score, onResetScore }) {
  return (
    <div className="scoreboard">
      <div className="scoreboard__player scoreboard__player--x">
        <span className="scoreboard__label">Jugador X</span>
        <span className="scoreboard__score">{score.X}</span>
      </div>
      <span className="scoreboard__vs">VS</span>
      <div className="scoreboard__player scoreboard__player--o">
        <span className="scoreboard__label">Jugador O</span>
        <span className="scoreboard__score">{score.O}</span>
      </div>
      <button
        className="btn-reset-score"
        onClick={onResetScore}
        title="Reiniciar marcador"
      >
        ↺
      </button>
    </div>
  );
}

export default ScoreBoard;
