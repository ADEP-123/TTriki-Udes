function StatusBar({ winner, isDraw, isXTurn, onReset }) {
  let message = "";
  if (winner) message = `Ganó el jugador ${winner}`;
  else if (isDraw) message = "¡Empate!";
  else message = `Turno del jugador: ${isXTurn ? "X" : "O"}`;

  return (
    <div className="status-bar">
      <p className="status-bar__message">{message}</p>
      {(winner || isDraw) && (
        <button className="btn-reset" onClick={onReset}>
          Nueva partida
        </button>
      )}
    </div>
  );
}

export default StatusBar;
