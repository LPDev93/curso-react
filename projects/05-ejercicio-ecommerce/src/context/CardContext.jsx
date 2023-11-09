import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CardContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CardProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const estaEnCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.cantidad += cantidad;
      setCarrito(nuevoCarrito);
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CardContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.object,
};
