/* 
  Creamos el cuadrado del tablero el cuál pasará
  un estado cuando se interactué con cada cuadrado. 
*/
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  // Sí el usuario hace click, llama al handleClick usando la función updateBoard().
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    /*
        Para que no se ejecute toda la función es mejor ejecutarla
        haciendo click en cada cuadrado, y de ahí renderizarlo.
      */
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
