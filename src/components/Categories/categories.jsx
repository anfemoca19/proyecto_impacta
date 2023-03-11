import styles from "../Categories/categories.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Categorias({ className, isHome }) {
  return (
    <>
      <div className={clsx("container-fluid mt-3", styles[className])}>
        <div className={styles["container-title-categories"]}>
          <span className={clsx("mt-2", styles["title-style"])}>
            Categorias
          </span>
        </div>
        <div className={clsx(" mt-2", styles["container-elemet-icon"])}>
          <div className={clsx("col ")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-nutricion-blanco"],
                  className,
                  {
                    [styles["style-icon-home"]]: isHome,
                  }
                )}
              />
              <span
                className={clsx(
                  "text-muted",
                  styles["text-categories"],
                  isHome && [styles.fontSizeHome]
                )}
              >
                Nutricón
              </span>
            </Link>
          </div>
          <div className={clsx("col")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-estilo-vida-blanco"],
                  className,
                  {
                    [styles["style-icon-home"]]: isHome,
                  }
                )}
              />
              <span
                className={clsx(
                  "text-muted",
                  styles["text-categories"],
                  isHome && [styles.fontSizeHome]
                )}
              >
                Estilo de vida
              </span>
            </Link>
          </div>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-actividad-fisica-blanco"],
                  {
                    [styles["style-icon-home"]]: isHome,
                  }
                )}
              />
              <span
                className={clsx(
                  "text-muted",
                  styles["text-categories"],
                  isHome && [styles.fontSizeHome]
                )}
              >
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
                  styles["icon-yoga-blanco"],
                  {
                    [styles["style-icon-home"]]: isHome,
                  }
                )}
              />
              <span
                className={clsx(
                  "text-muted",
                  styles["text-categories"],
                  isHome && [styles.fontSizeHome]
                )}
              >
                Yoga
              </span>
            </Link>
          </div>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-inteligencia-blanco"],
                  {
                    [styles["style-icon-home"]]: isHome,
                  }
                )}
              />
              <span
                className={clsx(
                  "text-muted",
                  styles["text-categories"],
                  isHome && [styles.fontSizeHome]
                )}
              >
                Inteligencia emocional
              </span>
            </Link>
          </div>
          <div className={clsx("col text-center")}>
            <Link className={clsx(styles["container-wrap"])}>
              <span
                className={clsx(
                  styles["style-icon"],
                  styles["icon-finanzas-blanco"],
                  {
                    [styles["style-icon-home"]]: isHome,
                  }
                )}
              />
              <span
                className={clsx(
                  "text-muted",
                  styles["text-categories"],
                  isHome && [styles.fontSizeHome]
                )}
              >
                Bienestar Financiero
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
