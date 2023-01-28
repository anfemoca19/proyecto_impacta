import fondo from "./../../imagenes/fondo-login.png";
import styles from "./LayoutBackgroundCurses.module.scss";

export default function LayoutBackgroundCurses({ children }) {
  return <div className={styles["background"]}>{children}</div>;
}
