import { useState } from "react";
import { calculateWinner, isBoardFull } from "../utils/gameHelpers";

export function useGameLogic() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winLine = result?.line || [];
  const isDraw = !winner && isBoardFull(squares);

  function handleClick(index) {
    if (squares[index] || winner) return;

    const next = [...squares];
    next[index] = isXTurn ? "X" : "O";
    setSquares(next);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  }

  return {
    squares,
    isXTurn,
    winner,
    winLine,
    isDraw,
    score,
    handleClick,
    resetGame,
  };
}
