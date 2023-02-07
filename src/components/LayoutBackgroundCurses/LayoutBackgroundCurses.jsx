import styles from "./LayoutBackgroundCurses.module.scss";

export default function LayoutBackgroundCurses({ children }) {
  return <div className={styles["background"]}>{children}</div>;
}
