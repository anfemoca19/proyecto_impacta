import clsx from "clsx";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../components/HeaderHome/HeaderHome.module.scss";
import Logo from "../../imagenes/logo-en-color.png";
import icon_hamburguer from "../../imagenes/icono-hamburguesa-gris.png";
import { useEffect } from "react";
export default function HeaderHome() {
  const location = useLocation();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  // const [styleContainerNav] = useState(" menu-mobile");

  let menuHamburguer = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <>
      <header className={clsx(styles["container-mobile"])}>
        <div className={clsx("col-2 p-2", styles["container-logo"])}>
          <img className={clsx(styles.logo)} src={Logo} alt="logo" />
        </div>
        <div className={clsx("col-2 p-2", styles["container-nav"])}>
          <nav className={clsx(styles["nav-container"])}>
            <ul className={clsx(styles["ul-container"])}>
              <li
                className={clsx("mb-2", styles["nav-item"], {
                  [styles.active]: location.pathname === "/nosotros",
                })}
              >
                <Link to={"/nosotros"} className={clsx(styles["nav-link"])}>
                  {" "}
                  Nosotros
                </Link>
              </li>
              <li
                className={clsx("mb-2", styles["nav-item"], {
                  [styles.active]: location.pathname === "/cursos",
                })}
              >
                <Link to={"/cursos"} className={clsx(styles["nav-link"])}>
                  Cursos
                </Link>
              </li>
              <li
                className={clsx("mb-2", styles["nav-item"], {
                  [styles.active]: location.pathname === "/planes",
                })}
              >
                <Link to={"/planes"} className={clsx(styles["nav-link"])}>
                  Planes
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={clsx("col-2 p-2", styles["container-btns"])}>
          <Link>Login</Link>
          <Link>Empresas</Link>
        </div>
        <div
          className={clsx("col-4 p-2 ", styles["container-menu-hamburguesa"])}
        >
          <button
            className={clsx(styles["style-button-hamburguer"])}
            onClick={(e) => {
              menuHamburguer();
            }}
          >
            <img
              src={icon_hamburguer}
              alt="icon-hamburguer"
              className={clsx(styles["icon-hamburger"])}
            />
          </button>
        </div>
      </header>
      {!isActiveMenu && (
        <div
          className={clsx("mt-4", styles["container-menu-nav"])}
          id="container-menu-nav"
        >
          <div className={clsx("p-2", styles["container-nav-mobile"])}>
            <nav className={clsx(styles["nav-container"])}>
              <ul className={clsx(styles["ul-container"])}>
                <li
                  className={clsx("mb-2", styles["nav-item"], {
                    [styles.active]: location.pathname === "/nosotros",
                  })}
                >
                  <Link to={"/nosotros"} className={clsx(styles["nav-link"])}>
                    {" "}
                    Nosotros
                  </Link>
                </li>
                <li
                  className={clsx("mb-2", styles["nav-item"], {
                    [styles.active]: location.pathname === "/cursos",
                  })}
                >
                  <Link to={"/cursos"} className={clsx(styles["nav-link"])}>
                    Cursos
                  </Link>
                </li>
                <li
                  className={clsx("mb-2", styles["nav-item"], {
                    [styles.active]: location.pathname === "/planes",
                  })}
                >
                  <Link to={"/planes"} className={clsx(styles["nav-link"])}>
                    Planes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={clsx("p-2", styles["container-btns-mobile"])}>
            <Link to={"/login"} className={clsx(styles["styles-btn-login"])}>
              Login
            </Link>
            <Link to={"/login"} className={clsx(styles["styles-btn-empresa"])}>
              Empresas
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
