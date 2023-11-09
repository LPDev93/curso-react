import PropTypes from "prop-types";
import { Item } from "./Item";
import { toCapital } from "../helpers/toCapital";

export const ItemList = ({ productos, titulo }) => {
  return (
    <main className="container">
      <h2 className="main-title">{toCapital(titulo)}</h2>
      {productos && (
        <div className="productos">
          {productos.map((producto) => (
            <Item producto={producto} key={producto.id} />
          ))}
        </div>
      )}
    </main>
  );
};

ItemList.propTypes = {
  productos: PropTypes.array,
  titulo: PropTypes.string,
};
