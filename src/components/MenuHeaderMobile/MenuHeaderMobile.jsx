import clsx from "clsx";
import styles from "../MenuHeaderMobile/MenuHeaderMobile.module.scss";
import icon_hamburguer from "../../imagenes/icono-hamburguesa-gris.png";
import icon_hamburguer_color from "../../imagenes/icono-hamburguesa-color.png";
import Icon_search from "../../imagenes/icono-buscador.png";
import Logo from "../../imagenes/logo-en-color.png";
import Input from "../UI/Input/input";
import { useState } from "react";
import Navbar from "../Navbar/navbar";

export default function MenuMobile() {
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [styleContainerNav] = useState(" menu-mobile");

  let menuHamburguer = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  return (
    <>
      <div
        className={clsx(
          "row",
          styles["container-mobile"],
          styles["container-tablet"]
        )}
      >
        <div className={clsx("col-2 p-2", styles["container-logo"])}>
          <img className={clsx(styles.logo)} src={Logo} alt="logo" />
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
        <div
          className={clsx("col-4 p-2 ", styles["container-menu-hamburguesa"])}
        >
          <button
            className={clsx(styles["style-button-hamburguer"])}
            onClick={(e) => {
              menuHamburguer();
            }}
          >
            <img
              src={isActiveMenu ? icon_hamburguer : icon_hamburguer_color}
              alt="icon-hamburguer"
              className={clsx(styles["icon-hamburger"])}
            />
          </button>
        </div>
      </div>

      {!isActiveMenu && (
        <div
          className={clsx("mt-4", styles["container-menu-nav"])}
          id="container-menu-nav"
        >
          <Navbar className={clsx(styleContainerNav)} />
        </div>
      )}
    </>
  );
}
