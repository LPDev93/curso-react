import PropTypes from "prop-types";

const ItemCount = ({ cantidad, handleDec, handleInc, handleAdd }) => {

  return (
    <div>
      <div className="item-count">
        <button onClick={handleDec}>-</button>
        <p> {cantidad} </p>
        <button onClick={handleInc}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

ItemCount.propTypes = {
  cantidad: PropTypes.number,
  handleDec: PropTypes.func,
  handleInc: PropTypes.func,
  handleAdd: PropTypes.func,
};
