import clsx from "clsx";
import styles from "../LayoutCurses/LayoutCurses.module.scss";

export default function LayoutCureses({ children, sideBar }) {
  return (
    <div className={clsx("row p-4")}>
      <div
        className={clsx(
          "col-12 col-sm-4  col-sm-12 col-md-8  p-4",
          styles["container-responsive-children"]
        )}
      >
        {children}
      </div>
      <div className={clsx("col-4 p-4", styles["style-sidebar"])}>
        {sideBar}
      </div>
    </div>
  );
}
