import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.scss";
import clsx from "clsx";
export default function Menu() {
  const location = useLocation();
  return (
    <div className={clsx(styles["container-submenu"])}>
      <nav className="">
        <ul className={clsx("nav mb-3 mt-3")}>
          <li
            className={clsx(styles["nav-item"], {
              [styles.active]: location.pathname === "/configuration",
            })}
          >
            <Link className={clsx(styles["style-nav"], {})} to="/configuration">
              Perfil
            </Link>
          </li>
          <li
            className={clsx(styles["nav-item"], {
              [styles.active]: location.pathname === "/personalization",
            })}
          >
            <Link
              className={clsx(styles["style-nav"], {})}
              to="/personalization"
            >
              Personalización
            </Link>
          </li>
          <li
            className={clsx(styles["nav-item"], {
              [styles.active]: location.pathname === "/styleLogin",
            })}
          >
            <Link className={clsx(styles["style-nav"], {})} to="/styleLogin">
              Estilos login
            </Link>
          </li>
          <li
            className={clsx(styles["nav-item"], {
              [styles.active]: location.pathname === "/styleAdmin",
            })}
          >
            <Link className={clsx(styles["style-nav"], {})} to="/styleAdmin">
              Estilos Administracón
            </Link>
          </li>
          <li
            className={clsx(styles["nav-item"], {
              [styles.active]: location.pathname === "/styleAcademia",
            })}
          >
            <Link className={clsx(styles["style-nav"], {})} to="/styleAcademia">
              Estilos Academia
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
