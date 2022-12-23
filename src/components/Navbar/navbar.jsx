import { Link } from "react-router-dom";
import "../Navbar/navbar.scss";

export default function Navbar() {
  return (
    <ul className="ps-0">
      <li class="nav-item mb-2">
        <Link class="nav-link fs-6" to="/dashboard">
          <span className="nav-icon"></span>
          <span>Inicio</span>
        </Link>
      </li>

      <li class="nav-item mb-2">
        <Link class="nav-link fs-6 mb-0 h1 link-style" to="/configuration">
          <span className="nav-icon icon-config" />
          <span>Configuración</span>
        </Link>
      </li>

      <li class="nav-item mb-2">
        <Link class="nav-link fs-6 link-style" to="/users">
          <span className="nav-icon icon-user" />
          <span>Usuarios</span>
        </Link>
      </li>

      <li class="nav-item mb-2">
        <Link class="nav-link fs-6 mb-0 h1 link-style" to="/courses">
          <span className="nav-icon icon-course" />
          <span>Cursos</span>
        </Link>
      </li>
    </ul>
  );
}
