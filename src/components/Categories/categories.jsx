import styles from "../Categories/categories.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Categorias({ className }) {
  return (
    <>
      <div className={clsx("mt-5 mb-4", styles["styles-background"])}>
        <div className={clsx("container-fluid mt-3", styles[className])}>
          {/* <div className={"mt-5"}> */}
          <span className={clsx("mt-2", styles["title-style"])}>
            Categorias
          </span>
          {/* </div> */}
          <div className={clsx(" mt-2", styles["container-elemet-icon"])}>
            <div className={clsx("col-2 me-4 text-center")}>
              <Link className="">
                <span
                  className={clsx(
                    "rounded ",
                    styles["style-icon"],
                    styles["icon-nutricion-blanco"],
                    className
                  )}
                />
                <span
                  className={clsx(
                    "rounded text-muted mt-5",
                    styles["card-subtitle"]
                  )}
                >
                  Nutricón
                </span>
              </Link>
            </div>
            <div className={clsx("col-2 me-4 text-center")}>
              <Link className="">
                <span
                  className={clsx(
                    "rounded ",
                    styles["style-icon"],
                    styles["icon-estilo-vida-blanco"],
                    className
                  )}
                />
                <span
                  className={clsx(
                    "rounded text-muted mt-2",
                    styles["card-subtitle"]
                  )}
                >
                  Estilo de vida
                </span>
              </Link>
            </div>
            <div className={clsx("col-2 text-center")}>
              <Link className="">
                <span
                  className={clsx(
                    "rounded ",
                    styles["style-icon"],
                    styles["icon-actividad-fisica-blanco"]
                  )}
                />
                <span
                  className={clsx(
                    "rounded text-muted mt-2",
                    styles["card-subtitle"]
                  )}
                >
                  Actividad fisica
                </span>
              </Link>
            </div>
          </div>
          <div className={clsx("mt-2", styles["container-elemet-icon"])}>
            <div className={clsx("col-2 me-4 text-center")}>
              <Link className="" to="">
                <span
                  className={clsx(
                    "rounded ",
                    styles["style-icon"],
                    styles["icon-yoga-blanco"]
                  )}
                />
                <span
                  className={clsx(
                    "rounded text-muted mt-2",
                    styles["card-subtitle"]
                  )}
                >
                  Yoga
                </span>
              </Link>
            </div>
            <div className={clsx("col-2 me-4 text-center")}>
              <Link className="" to="">
                <span
                  className={clsx(
                    "rounded ",
                    styles["style-icon"],
                    styles["icon-inteligencia-blanco"]
                  )}
                />
                <span
                  className={clsx(
                    "rounded text-muted mt-2",
                    styles["card-subtitle"]
                  )}
                >
                  Inteligencia emocional
                </span>
              </Link>
            </div>
            <div className={clsx("col-2 text-center")}>
              <Link className="" to="">
                <span
                  className={clsx(
                    "rounded ",
                    styles["style-icon"],
                    styles["icon-finanzas-blanco"]
                  )}
                />
                <span
                  className={clsx(
                    "rounded text-muted mt-2",
                    styles["card-subtitle"]
                  )}
                >
                  Finanzas
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
