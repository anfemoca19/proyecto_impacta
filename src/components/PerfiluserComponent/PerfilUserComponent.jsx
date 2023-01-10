import clsx from "clsx";
import ChartPie from "../ChartPie/ChartPie";
import styles from "./PerfilUserComponent.module.scss";

export default function CardUserData({ imagenPerfil, userData }) {
  return (
    <div className={clsx("col")}>
      <div className={clsx("card", styles["box-container"])}>
        <div className={clsx("row no-gutters")}>
          <div className={clsx("left col-md-4")}>
            <img
              src={imagenPerfil}
              alt="foto-perfil"
              className={clsx(styles["img-perfil-style"])}
            />
          </div>
          <div className={clsx("right col-md-4 mb-3")}>
            <div>
              <span className={clsx("style-span")}>{userData.cargo}</span>
              <span className={clsx("style-span")}>{userData.nombre}</span>
              <span className={clsx("style-span")}>{userData.correo}</span>
              <span className={clsx("style-span")}>{userData.telefono}</span>
              <span className={clsx("style-span")}>{userData.edad}</span>
            </div>
            <div></div>
          </div>
          <div
            className={clsx(
              "right col-md-4 text-center",
              styles["style-tiempo-acomulado"]
            )}
          >
            <ChartPie
              percentage="70"
              color="#7929e2"
              size="50px"
              remainingColor="#abc821"
            />
            <span className={clsx(styles["style-span"])}>
              Tiempo acumoluado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
