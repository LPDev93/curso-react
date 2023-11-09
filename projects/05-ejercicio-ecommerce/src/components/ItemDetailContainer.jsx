import { useEffect, useState } from "react";
import { pedirDatosPorId } from "../helpers/pedirDatos";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const id = useParams().id; 

  useEffect(() => {
    pedirDatosPorId(Number(id)).then((response) => setProducto(response));
  }, [id]);

  return (
    <>
      {
        producto && <ItemDetail item={producto} />
      }
    </>
  );
};

  