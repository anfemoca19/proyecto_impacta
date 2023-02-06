import clsx from "clsx";
import styles from "../CardAportes/CardAportes.module.scss";
import Star from "../Star/Star";
import img_user from "../../imagenes/icono-usuarios-activos.png";

export default function CardAportes() {
  return (
    <div class={clsx("card", styles["container-aporte"])}>
      <div className={clsx(styles["container-name"])}>
        <img
          src={img_user}
          alt=""
          className={clsx(styles["styles-photo-user"])}
        />
        <span className={clsx(styles["styles-title-nombre"])}>
          Nombre del usuario
        </span>
      </div>
      <div class={clsx("card-body", styles["styles-body-card"])}>
        <span>Esto es un texto de prueba y es el comentario</span>
      </div>
      <div className={clsx("ms-3 mb-2")}>
        <Star
          className={styles.valorarStars}
          colorBorder={"#afdb00"}
          colorRelleno={"#afdb00"}
        />
      </div>
    </div>
  );
}
