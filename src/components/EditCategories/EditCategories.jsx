import clsx from "clsx";
import styles from "../EditCategories/EditCategories.module.scss";
import ico_editar from "../../imagenes/icono-editar.png";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import EditLogo from "../EditLogo/EditLogo";
import { useState } from "react";

export default function EditCategories({
  children,
  typeButton,
  className,
  ...props
}) {
  return (
    <>
      <div
        className={clsx("container-fluid p-4 mb-5", styles["box-container"])}
      >
        <div className={clsx("row")}>
          <div className={clsx("col-md-2", styles["container-icon"])}>
            <img
              src={props.icon}
              className={clsx(styles["icon-styles"])}
              alt="icon-categorias"
            />
            <span>{props.span}</span>
          </div>
          <div className={clsx("col-md-10")}>
            <div className="col-md-9  d-flex  align-items-center ">
              <div className={clsx(styles["container-menu"])}>
                <ul
                  className={clsx("nav  mb-3 mt-3", styles["container-menu"])}
                >
                  <li
                    className={clsx(
                      "nav-item text-center",
                      styles["container-li"]
                    )}
                  >
                    <Link
                      className={clsx(styles["style-nav"])}
                      // onClick={() => {
                      //   console.log("aca");
                      //   setEstadoModalEdit(true);
                      //   // setEestadoModalEdit(!estadoModalEdit);
                      // }}
                    >
                      Editar Nombre / Logo
                      <img
                        className={clsx("me-2", styles["icon-edit-style"])}
                        src={ico_editar}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "nav-item text-center",
                      styles["container-li"]
                    )}
                  >
                    <Link className={clsx(styles["style-nav"])} to="#">
                      Posición de la categoría
                      <img
                        className={clsx("me-2", styles["icon-edit-style"])}
                        src={ico_editar}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "nav-item text-center",
                      styles["container-li"]
                    )}
                  >
                    <Link className={clsx(styles["style-nav"])} to="#">
                      Activa
                      <img
                        className={clsx("me-2", styles["icon-edit-style"])}
                        src={ico_editar}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "nav-item text-center",
                      styles["container-li"]
                    )}
                  >
                    <Link className={clsx(styles["style-nav"])}>
                      Editar
                      <img
                        className={clsx("me-2", styles["icon-edit-style"])}
                        src={ico_editar}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
