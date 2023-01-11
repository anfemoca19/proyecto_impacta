import styles from "../Categories/categories.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Categorias({ className }) {
  console.log(className);
  return (
    <>
      <span className={clsx(styles["title-style"])}>Categorias</span>
      <div className={clsx("container-fluid mb-4 mt-5", styles[className])}>
        <div className={clsx("row mt-2")}>
          <div className={clsx("col text-center")}>
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
          <div className="col text-cente">
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
          <div className="col text-center">
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
        <div className={clsx("row mt-3")}>
          <div className={clsx("col text-center")}>
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
          <div className="col text-center">
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
          <div className="col text-center">
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
    </>
  );
}
