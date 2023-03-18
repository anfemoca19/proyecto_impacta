import clsx from "clsx";
import styles from "../CardSocial/CardSocial.module.scss";
import Star from "../Star/Star";
import perfilPhoto from "../../imagenes/perfil.jpeg";

export default function CardSocial({ comentSocial }) {
  return (
    <div className={clsx(styles["container-wrap"])}>
      <div className={clsx(styles["container-box"])}>
        <div className={clsx(styles["container-foto"])}>
          <img
            src={perfilPhoto}
            alt="foto-social-perfil"
            className={clsx(styles["styles-img-social"])}
          />
        </div>
        <div>
          <Star
            className={styles.valorarStars}
            colorBorder={"#afdb00"}
            colorRelleno={"#afdb00"}
            fontSize={"20px"}
          />
        </div>
        <div className={clsx(styles["container-data-social"])}>
          <span className={clsx(styles["style-name"])}>
            {comentSocial.nombre}
          </span>
          <span className={clsx(styles["style-text-cargos"])}>
            {comentSocial.cargo}
          </span>
        </div>
        <div>
          <p>{comentSocial.comentario}</p>
        </div>
      </div>
    </div>
  );
}
