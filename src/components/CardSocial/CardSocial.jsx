import clsx from "clsx";
import styles from "../CardSocial/CardSocial.module.scss";
import Star from "../Star/Star";

export default function CardSocial({ comentSocial }) {
  return (
    <div className={clsx(styles["container-wrap"])}>
      <div className={clsx(styles["container-box"])}>
        <div className={clsx(styles["container-foto"])}>
          <img src="" alt="" />
        </div>
        <div>
          <Star
            className={styles.valorarStars}
            colorBorder={"#afdb00"}
            colorRelleno={"#afdb00"}
            fontSize={"20px"}
          />
        </div>
        <div>
          <span className={clsx(styles["style-name"])}>
            {comentSocial.nombre}
          </span>
        </div>
        <div>
          <p>{comentSocial.comentario}</p>
        </div>
      </div>
    </div>
  );
}
