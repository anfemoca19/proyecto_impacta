import clsx from "clsx";
import ChartPie from "../ChartPie/ChartPie";
import styles from "./PerfilUserComponent.module.scss";

export default function CardUserData({ imagenPerfil, userData }) {
  return (
    <div className={clsx("col")}>
      <div className={clsx("card", styles["box-container"])}>
        <div className={clsx(styles["styles-mobile-card"])}>
          <div className={clsx("col-md-4", styles.imgProfile)}>
            <img
              src={imagenPerfil}
              alt="foto-perfil"
              className={clsx(styles["img-perfil-style"])}
            />
          </div>
          <div className={clsx("right col-md-4 mb-3", styles.cardInfo)}>
            <div className={styles.infoWrap}>
              <span className={clsx(styles["style-span"])}>
                {userData.cargo}
              </span>
              <span className={clsx(styles["style-span"])}>
                {userData.nombre}
              </span>
              <span className={clsx(styles["style-span"], styles.textEllipsis)}>
                {userData.correo}
              </span>
              <span className={clsx(styles["style-span"])}>
                {userData.telefono}
              </span>
              <span className={clsx(styles["style-span"])}>
                {`${userData.edad} ${"Años"}`}
              </span>
            </div>
            <div></div>
          </div>
          <div
            className={clsx(
              "right col-md-4 text-center",
              styles["style-tiempo-acomulado"],
              styles["container-card-web"]
            )}
          >
            <div className={styles.wrapTime}>
              <ChartPie
                percentage="70"
                color="#7929e2"
                size="70px"
                remainingColor="#abc821"
              />
              <span className={clsx(styles.textTime)}>Tiempo acumoluado</span>
            </div>
          </div>
          <div
            className={clsx(
              "right col-md-4 text-center",
              styles["style-tiempo-acomulado"],
              styles["container-card-mobile"]
            )}
          >
            <div className={styles.wrapTime}>
              <div className="col-2">
                <span>Progreso</span>
              </div>
              <div className="col-2">
                <span>70%</span>
                <span></span>
              </div>
              <div className="col-2">
                <span>17</span>
                <span>Cursos</span>
              </div>
              <div className="col-8">
                <span>Timepo acomulado</span>
                <span>33:02:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
