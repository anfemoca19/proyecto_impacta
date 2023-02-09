import styles from "../AcountUser/accountUser.module.scss";
import usuarios_icon from "../../imagenes/icono-usuarios-nuevos-registrados.png";
import clsx from "clsx";

export default function AccountUser({ dataNumber }) {
  return (
    <div
      className={clsx(
        "container-fluid text-center",
        styles["container-account"]
      )}
    >
      <div
        className={clsx(
          "container-fluid text-center",
          styles["style-container-nubmer-icon"]
        )}
      >
        <span className={clsx(styles["style-number-user-register"])}>
          {dataNumber}
        </span>
        <img
          src={usuarios_icon}
          alt="icon-person"
          className={clsx(styles["style-icon-person"])}
        />
      </div>
      <div className={clsx("col", styles["continaer-text-user"])}>
        <span>Usuarios nuevos registrados</span>
      </div>
    </div>
  );
}
