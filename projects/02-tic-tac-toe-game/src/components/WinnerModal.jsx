import { Square } from "./Square";

Square;
export function WinnerModal({ winner, resetGame }) {
  // Si no hay un ganador o es empate.
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ganó:";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Jugar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
