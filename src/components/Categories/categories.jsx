import styles from "../Categories/categories.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Categorias({ className }) {
  console.log("categoria", className);
  return (
    <>
      {/* <div className={clsx("")}> */}
      <div className={clsx("container-fluid mt-3", styles[className])}>
        <div className={""}>
          <span className={clsx("mt-2", styles["title-style"])}>
            Categorias
          </span>
        </div>
        <div className={clsx(" mt-2", styles["container-elemet-icon"])}>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              {/* <div className={clsx(styles["container-icon"])}> */}
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-nutricion-blanco"],
                  // styles["style-icon-home"],
                  className
                )}
              />
              {/* </div> */}

              <span className={clsx("rounded mt-2 text-muted card-subtitle")}>
                Nutricón
              </span>
            </Link>
          </div>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-estilo-vida-blanco"],
                  // styles["style-icon-home"],
                  className
                )}
              />
              <span className={clsx("rounded text-muted mt-2 card-subtitle")}>
                Estilo de vida
              </span>
            </Link>
          </div>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-actividad-fisica-blanco"]
                  // styles["style-icon-home"]
                )}
              />
              <span className={clsx("rounded text-muted mt-2 card-subtitle")}>
                Actividad fisica
              </span>
            </Link>
          </div>
        </div>
        <div className={clsx("mt-2", styles["container-elemet-icon"])}>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-yoga-blanco"]
                  // styles["style-icon-home"]
                )}
              />
              <span className={clsx("rounded text-muted mt-2 card-subtitle")}>
                Yoga
              </span>
            </Link>
          </div>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-inteligencia-blanco"]
                  // styles["style-icon-home"]
                )}
              />
              <span className={clsx("rounded text-muted mt-2 card-subtitle")}>
                Inteligencia emocional
              </span>
            </Link>
          </div>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-finanzas-blanco"]
                  // styles["style-icon-home"]
                )}
              />
              <span className={clsx("rounded text-muted mt-2 card-subtitle")}>
                Finanzas
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
