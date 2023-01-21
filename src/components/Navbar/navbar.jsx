import clsx from "clsx";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// CONSTANTS
import { USER_PERMISSIONS } from "../../constants/user_const";

import styles from "../Navbar/navbar.module.scss";

export default function Navbar({ className }) {
  const myRef = useRef(null);
  const location = useLocation();

  let changeText = () => {
    debugger;
    myRef.current.style.display = "flex";
  };

  return (
    <ul className={clsx("ps-0", styles["menu-mobile"])}>
      <li
        className={clsx(" mb-2", styles["nav-item"], {
          active: location.pathname === "/dashboard",
        })}
      >
        <Link
          className={clsx("fs-6 mb-0 h1", styles["nav-link"])}
          to="/dashboard"
          onClick={() => {
            changeText();
          }}
        >
          <span className={clsx(styles["nav-icon"])}></span>
          <span ref={myRef} className={clsx(styles["text-menu"])}>
            Inicio
          </span>
        </Link>
      </li>
      <li
        className={clsx("mb-2", styles["nav-item"], {
          active: location.pathname === "/configuration",
        })}
      >
        <Link
          className={clsx(
            "fs-6 mb-0 h1",
            styles["nav-link"],
            styles["link-style"]
          )}
          to="/configuration"
        >
          <span className={clsx(styles["nav-icon"], styles["icon-config"])} />
          <span ref={myRef} className={clsx(styles["text-menu"])}>
            Configuración
          </span>
        </Link>
      </li>

      <li
        className={clsx("mb-2", styles["nav-item"], {
          active: location.pathname === "/users",
        })}
      >
        <Link
          className={clsx("fs-6 ", styles["nav-link"], styles["link-style"])}
          to="/users"
        >
          <span className={clsx(styles["nav-icon"], styles["icon-user"])} />
          <span ref={myRef} className={clsx(styles["text-menu"])}>
            Usuarios
          </span>
        </Link>
      </li>

      {USER_PERMISSIONS.isAdmin && (
        <li
          className={clsx("mb-2", styles["nav-item"], {
            active: location.pathname === "/categories",
          })}
        >
          <Link
            className={clsx("fs-6 ", styles["nav-link"], styles["link-style"])}
            to="#"
          >
            <span
              className={clsx(styles["nav-icon"], styles["icon-categories"])}
            />
            <span ref={myRef} className={clsx(styles["text-menu"])}>
              Categories
            </span>
          </Link>
        </li>
      )}

      <li
        className={clsx("mb-2", styles["nav-item"], {
          active: location.pathname === "/courses",
        })}
      >
        <Link
          className={clsx(
            "fs-6 mb-0 h1",
            styles["nav-link"],
            styles["link-style"]
          )}
          to="/courses"
        >
          <span className={clsx(styles["nav-icon"], styles["icon-course"])} />
          <span className={clsx(styles["text-menu"])}>Cursos</span>
        </Link>
      </li>
    </ul>
  );
}
