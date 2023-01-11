import styles from "./header.module.scss";
import Icon_search from "../../imagenes/icono-buscador.png";
import Logo from "../../imagenes/logo-en-color.png";
import Foto_perfil from "../../imagenes/foto-perfil.jpg";
import Input from "../UI/Input/input";
import clsx from "clsx";
import { USER_PERMISSIONS } from "../../constants/user_const";

export default function Header() {
  return (
    <div className={clsx("container-fluid")}>
      <div className={clsx("row")}>
        <div
          className={clsx(
            "col-2 p-2",
            styles["container-logo"]
            // styles["divider-right"]
          )}
        >
          <img className={clsx(styles.logo)} src={Logo} alt="logo" />
        </div>
        <div
          className={clsx(
            "col-6 p-2 d-flex align-items-center"
            // styles["divider-right"]
          )}
        >
          <div className={clsx(styles["container-data-user"])}>
            <div className={clsx(styles["container-foto-perfil"])}>
              <img
                className={clsx(styles["foto-perfil"])}
                src={Foto_perfil}
                alt=""
              />
            </div>
            <span>Nombre Administrador / Nombre empresa</span>
          </div>
          {USER_PERMISSIONS.isAdmin && (
            <div className={clsx(styles["container-data-user"])}>
              <div className={clsx(styles["container-foto-perfil"])}>
                <img
                  className={clsx(styles["foto-perfil"])}
                  src={Foto_perfil}
                  alt=""
                />
              </div>
              <span>Nombre super Administrador</span>
            </div>
          )}
        </div>
        <div
          className={clsx("col-4 p-2 ", styles["container-pricipal-search"])}
        >
          <div className={clsx(styles["container-search"])}>
            <img
              className={clsx(styles["icon-search"])}
              src={Icon_search}
              alt="icon-sarch"
            />
            <Input
              className={clsx("border-0", styles["input-search-header"])}
              type="text"
              placeholder="Buscar"
            ></Input>
          </div>
        </div>
      </div>
    </div>
  );
}
