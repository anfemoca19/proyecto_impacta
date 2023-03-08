import clsx from "clsx";
import styles from "../FooterHome/FooterHome.module.scss";
import logo_blanco from "../../imagenes/logo-en-blanco.png";
import icon_facebook from "../../imagenes/icono-facebook-blanco.png";
import icon_instagram from "../../imagenes/icono-instagram-blanco.png";
import icon_youtube from "../../imagenes/icono-you-tube-blanco.png";
// import icon_twiter from "../../imagenes/icono-twiter-blanco.png";
import { TbPoint } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function FooterHome() {
  return (
    <>
      {/* <LoginLayout> */}
      <div className="container-fluid ">
        <div className={clsx("row", styles["container-mobile"])}>
          <div
            className={clsx(
              "col-4 col-sm-4 col-sm-8 col-md-4 ",
              styles["container-logo"]
            )}
          >
            <div className={clsx()}>
              <img
                src={logo_blanco}
                alt="logo-blanco"
                className={clsx(styles["styles-icon-logo"])}
              />
            </div>
          </div>
          <div
            className={clsx(
              "col-4 col-sm-4 col-sm-8 col-md-4 ",
              styles["container-social-media"]
            )}
          >
            <img
              src={icon_facebook}
              alt="icon-facebook"
              className={clsx(styles["styles-icon-social"])}
            />
            <img
              src={icon_instagram}
              alt="icon-instagram"
              className={clsx(styles["styles-icon-social"])}
            />
            <img
              src={icon_youtube}
              alt="icon-youtube"
              className={clsx(styles["styles-icon-social"])}
            />
          </div>
          <div
            className={clsx(
              "col-4 col-sm-4 col-sm-8 col-md-4",
              styles["container-wrap-links"]
            )}
          >
            <div className={clsx(styles["container-wrappers-links"])}>
              <TbPoint fontSize={"20px"} color={"#fff"} />
              <Link className={clsx(styles["style-upload-link"])}>
                Politica de privacidad
              </Link>
            </div>
            <div className={clsx(styles["container-wrappers-links"])}>
              <TbPoint fontSize={"20px"} color={"#fff"} />
              <Link className={clsx(styles["style-upload-link"])}>
                Terminos y condiciones
              </Link>
            </div>
            <div className={clsx(styles["container-wrappers-links"])}>
              <TbPoint fontSize={"20px"} color={"#fff"} />
              <Link className={clsx(styles["style-upload-link"])}>
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </LoginLayout> */}
      <div className={clsx(styles["container-derechos"])}>
        <span>@Impacta tu vida 2023</span>
      </div>
    </>
  );
}
