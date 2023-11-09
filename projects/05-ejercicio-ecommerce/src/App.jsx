// import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import "./index.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import { CardProvider } from "./context/CardContext";
import Carrito from "./components/Carrito";

const App = () => {
  return (
    <CardProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
};

export default App;
