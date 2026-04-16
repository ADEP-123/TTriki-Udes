import Square from "./Square";

function Board({ squares, winLine, onSquareClick, isGameOver }) {
  return (
    <div className={`board ${isGameOver ? 'board--disabled' : ''}`}>
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          isWinning={winLine.includes(i)}
          onClick={() => !isGameOver && onSquareClick(i)}
        />
      ))}
    </div>
  );
}

export default Board;
