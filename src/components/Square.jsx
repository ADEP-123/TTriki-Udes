import { useState } from "react";

function Square({ value, onClick, isWinning, currentPlayer, isGameOver }) {
  const [hovered, setHovered] = useState(false);

  const displayValue = value || (hovered && !isGameOver ? currentPlayer : null);
  const isPreview = !value && hovered && !isGameOver;

  return (
    <button
      className={`square ${isWinning ? "square--winning" : ""} ${value ? "square--filled" : ""} ${isPreview ? "square--preview" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={!!value || isGameOver}
    >
      <span
        className={`square__symbol square__symbol--${displayValue?.toLowerCase()}`}
      >
        {displayValue}
      </span>
    </button>
  );
}

export default Square;
