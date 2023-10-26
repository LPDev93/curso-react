import "./App.css";
import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index";
import { Board } from "./components/Board";

function App() {
  /* 
    Creamos el tablero de 9 pos. como un estado que se actualizará
    cada turno.
  */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });
  // Creamos otro estado para saber el turno.
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X; // ?? true or undefined
  });
  // Creamos un estado para determinar el ganador, según patrones
  const [winner, setWinner] = useState(null); // null no hay ganador y false empate
  // Creamos la función para resetear el juego resetGame
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };
  // Creamos la función de actualización del tablero (updateBoard).
  const updateBoard = (index) => {
    // Validar sí el índice está vacio
    if (board[index] || winner) return;
    // Creamos un nuevo tablero que será renderizado en cada turno.
    const newBoard = [...board];
    // Actualizamos cada índice del tablero, luego de cada turno.
    newBoard[index] = turn; // x u o
    // Actualizamos el estado del tablero por el nuevo tablero.
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    saveGameToStorage({ board: newBoard, turn: newTurn });
    // Revisa si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      // Revisa si hay un empate
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };
  return (
    <>
      {/* Creamos un elemento main */}
      <main className="board">
        <h1>Proyecto N°02: Tic Tac Toe</h1>
        {/* Resetear el juego*/}
        <button onClick={resetGame}>Resetear juego</button>
        {/* Creamos el tablero semánticamente */}
        <section className="game">
          <Board board={board} updateBoard={updateBoard} />
        </section>
        <h2 className="sub-title">Es el turno de:</h2>
        {/* Sección para mostrar el turno actual */}
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    </>
  );
}

export default App;
