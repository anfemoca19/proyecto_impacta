import { Navigate, useNavigate } from "react-router-dom";
import Star from "../Star/Star";
import styles from "./CardArticules.module.scss";
import clsx from "clsx";
import img_curse_nutrition from "../../imagenes/nutricion_conciente.jpeg";

import Button from "../UI/Button/Button";

export default function CardArticules({}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/courses/coursesTemplate/" + `${1}` + "/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.container}>
          <header className={styles.header}>
            <span>20 de enero 2019</span>
          </header>
          <img
            src={img_curse_nutrition}
            className={clsx("card-img-top", styles["styles-img-curse"])}
            alt="..."
          />
          <footer className="card-body">
            <h5 className={clsx(styles.title, styles["textEllipsis"])}>
              nombre
            </h5>
            <p className={styles["card-text"]}>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
            <footer className={styles.footer}></footer>
          </footer>
        </div>
      </div>
    </div>
  );
}
