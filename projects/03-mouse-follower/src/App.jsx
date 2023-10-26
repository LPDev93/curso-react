import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const FollowMouse = () => {
  // Creamos un estado para verificar sí está activado el puntero
  const [enabled, setEnabled] = useState(false);

  // Creamos un estado para las posiciones
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Creamos un useEffect que hagan una ejecución de código
  // , cada vez que se renderiza la app
  useEffect(() => {
    console.log("Effect", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPos({ x: clientX, y: clientY });
    };

    // Sí el botón está activado, activar seguimiento
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // Limpiar el efecto
    // Cuando el componente se desmonta
    // Cuando cambian las dependencias
    return () => {
      window.removeEventListener("pointermove", handleMove);
      console.log("cleanup")
    };
  }, [enabled]);

  // Efecto para desaparecer el cursor
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);
    return () => {
      document.body.classList.remove('no-cursor');
    }
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(255, 100, 111, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {" "}
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

function App() {
  // Cuando se genera el componente
  const [mounted, setMounted] = useState(true);

  return (
    <main>
      <h1>Proyecto N°03: Mouse Follower</h1>
      {mounted && <FollowMouse />}
      {/* Butón para desaparecer el componente */}
      <button onClick={() => setMounted(!mounted)}>Prender componente</button>
    </main>
  );
}

export default App;
