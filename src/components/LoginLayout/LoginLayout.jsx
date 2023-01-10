import fondo from "./../../imagenes/fondo-login.png";
import styles from "./LoginLayout.module.scss";

export default function LoginLayout({ children }) {
  return <div className={styles["backgroun-img"]}>{children}</div>;
}
