import Star from "../Star/Star";
import styles from "./CardCurses.module.scss";
import clsx from "clsx";
import img_curse_nutrition from "../../imagenes/nutricion_conciente.jpeg";

import Button from "../UI/Button/Button";

export default function CardCurses({ cursesData }) {
  return (
    <div className="col">
      <div className={styles.card}>
        <div className={styles["container-imag-card"]}>
          {" "}
          <img
            src={img_curse_nutrition}
            className={clsx("card-img-top", styles["styles-img-curse"])}
            alt="..."
          />
        </div>

        <div className="card-body">
          <h5 className={styles.title}>{cursesData.nombre}</h5>
          <p className={styles["card-text"]}>{cursesData.creado}</p>
          <Star score={cursesData.calificacion} />
          <footer className={styles.footer}>
            <Button className={styles.button} typeButton="secondary">
              Ir al curso
            </Button>
            <Button
              className={clsx(styles.button, styles.secondary)}
              typeButton="secondary"
            >
              Activo
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
