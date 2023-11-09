import { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;
  useEffect(() => {
    pedirDatos().then((response) => {
      if (categoria) {
        setProductos(response.filter((ele) => ele.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProductos(response);
        setTitulo("Productos");
      }
    });
  }, [categoria]);

  return (
    <>
      <ItemList productos={productos} titulo={titulo} />
    </>
  );
};
