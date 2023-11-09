import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";

export const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const { carrito, agregarAlCarrito } = useContext(CardContext);
  console.log(carrito);
  const handleDec = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  const handleInc = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div className="product-detalle-info">
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoría:</p>
          <p className="precio">${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleDec={handleDec}
            handleInc={handleInc}
            handleAdd={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
};
