import { Link } from "react-router-dom";
import "./Menu.scss";
import clsx from "clsx";
export default function Menu() {
  return (
    <nav className="">
      <ul className="nav  mb-5 mt-3">
        <li className="nav-item ">
          <Link className={clsx("style-nav", {})} to="/configuration">
            Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link className={clsx("style-nav", {})} to="/personalization">
            Personalización
          </Link>
        </li>
        <li className="nav-item">
          <Link className={clsx("style-nav", {})} to="#">
            Estilos login
          </Link>
        </li>
        <li className="nav-item">
          <Link className={clsx("style-nav", {})}>Estilos Administracón</Link>
        </li>
        <li className="nav-item">
          <Link className={clsx("style-nav", {})}>Estilos Academica</Link>
        </li>
      </ul>
    </nav>
  );
}
