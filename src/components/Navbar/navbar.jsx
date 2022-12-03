import { Link } from "react-router-dom";
import Icon_inicio from "../../imagenes/icono-menu-1-fondo-blanco.png";
import Icon_config from "../../imagenes/icono-menu-2-fondo-blanco.png";
import Icon_user from "../../imagenes/icono-menu-3-fondo-blanco.png";
import Icon_cursos from "../../imagenes/icono-menu-5-fondo-blanco.png";
import "../Navbar/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar">
        <Link class="navbar-brand" to="/dashboard">
          <img className="icon-style" src={Icon_inicio} alt="icon-inicio" />
          Inicio
        </Link>
      </nav>

      <nav class="navbar ">
        <Link class="navbar-brand mb-0 h1 link-style" to="/configuration">
          <img className="icon-style" src={Icon_config} alt="icon-config" />
          Configuración
        </Link>
      </nav>

      <nav class="navbar ">
        <Link class="navbar-brand link-style" to="/users">
          <img className="icon-style" src={Icon_user} alt="icon-user" />
          Usuarios
        </Link>
      </nav>

      <nav class="navbar ">
        <Link class="navbar-brand mb-0 h1 link-style">
          <img className="icon-style" src={Icon_cursos} alt="icon-play" />
          Cursos
        </Link>
      </nav>
    </>
  );
}
