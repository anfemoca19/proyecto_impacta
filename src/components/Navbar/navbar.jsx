import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

// CONSTANTS
import { USER_PERMISSIONS } from "../../constants/user_const";

import "../Navbar/navbar.scss";

export default function Navbar() {
  const location = useLocation();
  console.log("location", location);
  return (
    <ul className="ps-0">
      <li
        className={clsx("nav-item mb-2", {
          active: location.pathname === "/dashboard",
        })}
      >
        <Link className="nav-link fs-6" to="/dashboard">
          <span className="nav-icon"></span>
          <span>Inicio</span>
        </Link>
      </li>

      <li
        className={clsx("nav-item mb-2", {
          active: location.pathname === "/configuration",
        })}
      >
        <Link className="nav-link fs-6 mb-0 h1 link-style" to="/configuration">
          <span className="nav-icon icon-config" />
          <span>Configuración</span>
        </Link>
      </li>

      <li
        className={clsx("nav-item mb-2", {
          active: location.pathname === "/users",
        })}
      >
        <Link className="nav-link fs-6 link-style" to="/users">
          <span className="nav-icon icon-user" />
          <span>Usuarios</span>
        </Link>
      </li>

      {USER_PERMISSIONS.isAdmin && (
        <li
          className={clsx("nav-item mb-2", {
            active: location.pathname === "/categories",
          })}
        >
          <Link className="nav-link fs-6 link-style" to="/categories">
            <span className="nav-icon icon-user" />
            <span>Categories</span>
          </Link>
        </li>
      )}

      <li
        className={clsx("nav-item mb-2", {
          active: location.pathname === "/courses",
        })}
      >
        <Link className="nav-link fs-6 mb-0 h1 link-style" to="/courses">
          <span className="nav-icon icon-course" />
          <span>Cursos</span>
        </Link>
      </li>
    </ul>
  );
}
