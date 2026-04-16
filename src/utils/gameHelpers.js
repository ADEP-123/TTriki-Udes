export const WINNING_COMBINATIONS = [
  [0, 1, 2], // fila superior
  [3, 4, 5], // fila media
  [6, 7, 8], // fila inferior
  [0, 3, 6], // columna izq
  [1, 4, 7], // columna centro
  [2, 5, 8], // columna der
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal inversa
];

export function calculateWinner(squares) {
  for (let [a, b, c] of WINNING_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

export function isBoardFull(squares) {
  return squares.every(s => s !== null);
}
