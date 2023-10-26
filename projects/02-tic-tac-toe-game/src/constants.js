// Creamos los turnos.
export const TURNS = {
  X: "❌",
  O: "⚪",
};

// Combinaciones o patrones del estado de "winner"
export const WINNER_COMBOS = [
  // Por fila
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Por columna
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonales
  [0, 4, 8],
  [2, 4, 6],
];
