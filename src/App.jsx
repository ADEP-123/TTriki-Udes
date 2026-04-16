import Board from "./components/Board";
import StatusBar from "./components/StatusBar";
import ScoreBoard from "./components/ScoreBoard";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const {
    squares,
    isXTurn,
    winner,
    winLine,
    isDraw,
    score,
    handleClick,
    resetGame,
  } = useGameLogic();

  return (
    <div className="app">
      <h1 className="app__title">TRIKI</h1>
      <ScoreBoard score={score} />
      <StatusBar
        winner={winner}
        isDraw={isDraw}
        isXTurn={isXTurn}
        onReset={resetGame}
      />
      <Board squares={squares} winLine={winLine} onSquareClick={handleClick} />
    </div>
  );
}

export default App;
