import styles from "./header.module.scss";
import icon_hamburguer from "../../imagenes/icono-hamburguesa-gris.png";
import Icon_search from "../../imagenes/icono-buscador.png";
import Logo from "../../imagenes/logo-en-color.png";
import Foto_perfil from "../../imagenes/foto-perfil.jpg";

import Input from "../UI/Input/input";
import clsx from "clsx";
import { USER_PERMISSIONS } from "../../constants/user_const";

export default function Header() {
  return (
    <div className={clsx("container-fluid mt-3")}>
      <div className={clsx("row", styles["container-web"])}>
        <div className={clsx("col-2 p-2", styles["container-logo"])}>
          <img className={clsx(styles.logo)} src={Logo} alt="logo" />
        </div>
        <div
          className={clsx(
            "col-8 p-4 d-flex align-items-center",
            styles["container-"]
          )}
        >
          {!USER_PERMISSIONS.isAdmin && (
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
          )}
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
          className={clsx("col-2 p-2 ", styles["container-pricipal-search"])}
        >
          <div className={clsx(styles["container-search"])}>
            <img
              className={clsx(styles["icon-search"])}
              src={Icon_search}
              alt="icon-sarch"
            />
            <Input
              className={clsx("border-0 ", styles["input-search"])}
              type="text"
              placeholder="Buscar"
            ></Input>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className={clsx(styles["contianer-mobile"])}>
        <div className={clsx("col-4 p-2", styles["container-logo"])}>
          <img className={clsx(styles.logo)} src={Logo} alt="logo" />
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
              className={clsx("border-0 ", styles["input-search"])}
              type="text"
              placeholder="Buscar"
            ></Input>
          </div>
        </div>
        <div
          className={clsx("col-4 p-2 ", styles["container-menu-hamburguesa"])}
        >
          <img
            src={icon_hamburguer}
            alt="icon-hamburguer"
            className={clsx(styles["icon-hamburger"])}
          />
        </div>
      </div>

      {/* tablet */}
      <div className={clsx(styles["contianer-tablet"])}>
        <div className={clsx("col-4 p-2", styles["container-logo"])}>
          <img className={clsx(styles.logo)} src={Logo} alt="logo" />
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
              className={clsx("border-0 ", styles["input-search"])}
              type="text"
              placeholder="Buscar"
            ></Input>
          </div>
        </div>
        <div
          className={clsx("col-4 p-2 ", styles["container-menu-hamburguesa"])}
        >
          <img
            src={icon_hamburguer}
            alt="icon-hamburguer"
            className={clsx(styles["icon-hamburger"])}
          />
        </div>
      </div>
    </div>
  );
}
