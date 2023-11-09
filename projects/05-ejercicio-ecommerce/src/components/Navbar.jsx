import { Link } from "react-router-dom";
import { CardWidget } from "./CardWidget";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>TShop</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/medias">
            Medias
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/pantalones">
            Pantalones
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/remeras">
            Remeras
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/buzos">
            Buzos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
        <li>
          <CardWidget />
        </li>
      </ul>
    </nav>
  );
};
