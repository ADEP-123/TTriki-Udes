function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? "square--winning" : ""} ${value ? "square--filled" : ""}`}
      onClick={onClick}
    >
      <span
        className={`square__symbol square__symbol--${value?.toLowerCase()}`}
      >
        {value}
      </span>
    </button>
  );
}

export default Square;
