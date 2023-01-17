import styles from "../AcountUser/accountUser.module.scss";
import usuarios_icon from "../../imagenes/icono-usuarios-nuevos-registrados.png";
import clsx from "clsx";

export default function AccountUser({ dataNumber }) {
  return (
    <div
      // className="container-fluid container-account rounded text-center"
      className={clsx(
        "container-fluid text-center",
        styles["container-account"]
      )}
    >
      <div
        // className="container-fluid style-container-nubmer-icon"
        className={clsx(
          "container-fluid text-center",
          styles["style-container-nubmer-icon"]
        )}
      >
        <span
          // className="style-number-user-register"
          className={clsx(styles["style-number-user-register"])}
        >
          {dataNumber}
        </span>
        <img
          src={usuarios_icon}
          alt="icon-person"
          // className="style-icon-person"
          className={clsx(styles["style-icon-person"])}
        />
      </div>
      <div
        // className="col"
        className={clsx("col", styles["continaer-text-user"])}
      >
        <span>Usuarios nuevos registrados</span>
      </div>
    </div>
  );
}
