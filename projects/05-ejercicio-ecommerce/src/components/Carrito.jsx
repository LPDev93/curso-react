import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CardContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => {
            return (
              <tr key={producto.id}>
                <td>{producto.titulo}</td>
                <td>{producto.precio}</td>
                <td>x {producto.cantidad}</td>
                <td>$ {producto.cantidad * producto.precio}</td>
              </tr>
            );
          })}
          {carrito.length > 0 && (
            <tr>
              <td colSpan={4}>Total a pagar: $ {precioTotal()}</td>
            </tr>
          )}
        </tbody>
      </table>
      {carrito.length > 0 && (
        <button className="enviar" onClick={handleVaciar}>
          Vaciar carrito
        </button>
      )}
    </div>
  );
};

export default Carrito;
