import clsx from "clsx";
import styles from "../LayoutCurses/LayoutCurses.module.scss";

export default function LayoutCureses({ children, sideBar }) {
  return (
    <div className={clsx("row p-5")}>
      <div
        className={clsx("col-8 p-4", styles["container-responsive-children"])}
      >
        {children}
      </div>
      <div className={clsx("col-4 p-4", styles["style-sidebar"])}>
        {sideBar}
      </div>
    </div>
  );
}
