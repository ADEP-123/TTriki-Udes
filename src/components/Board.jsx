import Square from "./Square";

function Board({ squares, winLine, onSquareClick }) {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          isWinning={winLine.includes(i)}
          onClick={() => onSquareClick(i)}
        />
      ))}
    </div>
  );
}

export default Board;
