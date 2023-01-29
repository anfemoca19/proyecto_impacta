import { Navigate, useNavigate } from "react-router-dom";
import Star from "../Star/Star";
import styles from "./CardCurses.module.scss";
import clsx from "clsx";
import img_curse_nutrition from "../../imagenes/nutricion_conciente.jpeg";

import Button from "../UI/Button/Button";

export default function CardCurses({ cursesData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/courses/courceZumba/" + `${cursesData.id}` + "/");
  };

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
          <h5 className={clsx(styles.title, styles["textEllipsis"])}>
            {cursesData.nombre}
          </h5>
          <p className={styles["card-text"]}>{cursesData.creado}</p>
          <Star
            score={cursesData.calificacion}
            colorBorder={"#7929e2"}
            colorRelleno={"#7929e2"}
          />
          <footer className={styles.footer}>
            <Button
              className={styles.button}
              typeButton="secondary"
              name={cursesData.nombre}
              onClick={(e) => {
                handleClick();
              }}
            >
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
