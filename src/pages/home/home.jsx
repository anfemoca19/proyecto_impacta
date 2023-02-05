import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../home/home.module.scss";
import imagen_one from "../../imagenes/imagen-1-web-movil.png";
import icono_siguiente from "../../imagenes/icono-siguiente.png";
import Categorias from "../../components/Categories/categories";

export default function Home() {
  return (
    <>
      <div className={clsx("container-fluid mt-2")}>
        <HeaderHome />
        <div className={clsx("mt-4", styles["container-tour"])}>
          <div className={clsx(styles["container-text-imgOne"])}>
            <div className={clsx(styles["container-wrap"])}>
              <div className={clsx("mt-5 p-5", styles["container-box"])}>
                <span>
                  ¡Un viaje por el bienestar integral que eleva la energía vital
                  de tus colaboradores!
                </span>
              </div>
              <div
                className={clsx(
                  "d-flex  align-items-center ps-4 pe-4 mt-5",
                  styles["container-activate"]
                )}
              >
                <Link
                  className={clsx(
                    "container-fluid text-center justify-content-between align-items-center d-flex",
                    styles["style-upload-link"]
                  )}
                  to=""
                >
                  <span>Haz un tour por la plataforma</span>
                  <img
                    src={icono_siguiente}
                    alt="arro-raight"
                    className={clsx(styles["icon-upload"])}
                  />
                </Link>
              </div>
            </div>
            <div className={clsx("mb-5", styles["container-img-one"])}>
              <img
                src={imagen_one}
                alt=""
                className={clsx(styles["style-imagen-one"])}
              />
            </div>
          </div>
        </div>
        <div className={clsx("mb-4 p-4", styles["container-wrappers"])}>
          <div className={clsx(styles["container-categorias"])}>
            {" "}
            <Categorias className={"style-container-home"} />
          </div>
          <div className={clsx(styles["container-styles-description"])}>
            <div>
              <h4 className={clsx("mt-3 mb-4")}>
                Impacta tu vida, es la primera{" "}
                <span className={clsx(styles["styles-text"])}>
                  agencia de bienestar integral
                </span>{" "}
                para empresas.
              </h4>
            </div>
            <div className={clsx("d-flex ")}>
              <div
                className={clsx(
                  "col-4",
                  styles["container-elements-information"],
                  styles["styles-line"]
                )}
              >
                <span className={clsx(styles["styles-green-text"])}>3000</span>
                <span>Empleados</span>
              </div>
              <div
                className={clsx(
                  "col-4",
                  styles["container-elements-information"],
                  styles["styles-line"]
                )}
              >
                <span className={clsx(styles["styles-green-text"])}>2550</span>
                <span>Consultas</span>
              </div>
              <div
                className={clsx(
                  "col-4",
                  styles["container-elements-information"]
                )}
              >
                <span className={clsx(styles["styles-green-text"])}>
                  $214.200
                </span>
                <span>USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
