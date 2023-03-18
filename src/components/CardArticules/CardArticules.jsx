import styles from "./CardArticules.module.scss";
import clsx from "clsx";
import img_curse_nutrition from "../../imagenes/nutricion_conciente.jpeg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";

export default function CardArticules(props) {
  console.log(props.articuloData.link);
  console.log();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.container}>
          <header className={clsx(styles["container-header-card"])}>
            <span className={clsx(styles["style-date-card"])}>
              20 de enero 2019
            </span>
            <div className={clsx(styles["container-like-coments"])}>
              <div className={clsx(styles["styles-lik-coments"])}>
                <AiOutlineHeart color={"#7929e2"} />
                <span>1200</span>
              </div>
              <div className={clsx(styles["styles-lik-coments"])}>
                <BsChatLeftText color={"#7929e2"} />
                <span>1200</span>
              </div>
            </div>
          </header>
          <img
            // src={props.articuloData.imagen}
            src={img_curse_nutrition}
            className={clsx("", styles["styles-img-curse"])}
            alt="Imagen del articulo"
          />
          <footer className={clsx("card-body", styles["style-footer-card"])}>
            <h5 className={clsx(styles.title, styles["textEllipsis"])}>
              {props.articuloData.nombre}
            </h5>
            <p className={styles["card-text"]}>{props.articuloData.parrafo}</p>
            {/* <footer className={styles.footer}> */}
            {/* <link href={props.articuloData.link}>Ver articulo</link> */}
            <a
              className={clsx(styles["style-link-articule"])}
              rel="stylesheet"
              href={props.articuloData.link}
            >
              Ver articulo
            </a>
            {/* </footer> */}
          </footer>
        </div>
      </div>
    </div>
  );
}
