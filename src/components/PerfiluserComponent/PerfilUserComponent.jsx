import clsx from "clsx";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./PerfilUserComponent.module.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsCalendar } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function CardUserData({ imagenPerfil, userData }) {
  return (
    <div className={clsx("", styles["container-card"])}>
      <div className={clsx("card", styles["box-container"])}>
        <div className={clsx(styles["container-img-user"])}>
          <div className={clsx("col-md-4", styles.imgProfile)}>
            <img
              src={imagenPerfil}
              alt="foto-perfil"
              className={clsx(styles["img-perfil-style"])}
            />
          </div>
          <div className={clsx("right col-md-4 mb-3", styles.cardInfo)}>
            <div className={styles.infoWrap}>
              <span className={clsx(styles["styles-name"])}>
                {userData.nombre}
              </span>
              <span className={clsx("mb-1", styles["style-span"])}>
                {userData.cargo}
              </span>
              <div className={clsx(styles["container-data-users"])}>
                <MdOutlineEmail />
                <span
                  className={clsx(styles["style-span"], styles.textEllipsis)}
                >
                  {userData.correo}
                </span>
              </div>
              <div className={clsx(styles["container-data-users"])}>
                <AiOutlineWhatsApp />
                <span className={clsx(styles["style-span"])}>
                  {userData.telefono}
                </span>
              </div>
              <div className={clsx(styles["container-data-users"])}>
                <BsCalendar />
                <span className={clsx(styles["style-span"])}>
                  {`${userData.edad} ${"Años"} / ${"20 junio 1997"}`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            " col-md-4",
            styles["style-tiempo-acomulado"],
            styles["container-card-mobile"]
          )}
        >
          <div className={styles.wrapTime}>
            <div
              className={clsx(
                "col-2",
                styles["container-element-footer"],
                styles["style-line"]
              )}
            >
              <span className={clsx(styles["styles-span-footer"])}>
                Progreso
              </span>
            </div>
            <div
              className={clsx(
                "col-2",
                styles["container-element-footer"],
                styles["style-line"]
              )}
            >
              <span className={clsx(styles["styles-span-footer"])}>70%</span>
              <ProgressBar percent={70} />
            </div>
            <div
              className={clsx(
                "col-2 me-1",
                styles["container-element-footer"],
                styles["style-line"]
              )}
            >
              <div className={clsx(styles["container-courses"])}>
                <span className={clsx(styles["styles-span-footer"])}>17</span>
                <span className={clsx(styles["styles-span-footer"])}>
                  Cursos
                </span>
              </div>
            </div>
            <div className={clsx("col-3 col-md-4")}>
              <div className={clsx("col")}>
                <span>Tiempo acomulado</span>
              </div>
            </div>
            <div className={clsx("col-2 col-md-4")}>
              <div className={clsx("col")}>
                <span>33:02:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
