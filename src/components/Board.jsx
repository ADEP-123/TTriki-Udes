import Square from "./Square";

function Board({ squares, winLine, onSquareClick, isGameOver, currentPlayer }) {
  return (
    <div className={`board ${isGameOver ? "board--disabled" : ""}`}>
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          isWinning={winLine.includes(i)}
          onClick={() => !isGameOver && onSquareClick(i)}
          currentPlayer={currentPlayer}
          isGameOver={isGameOver}
        />
      ))}
    </div>
  );
}

export default Board;
