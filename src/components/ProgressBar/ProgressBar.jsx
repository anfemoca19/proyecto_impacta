import clsx from "clsx";
import styles from "../ProgressBar/ProgressBar.module.scss";

export default function ProgressBar({ percent }) {
  return (
    <div className={clsx(styles["progress-bar"])}>
      <div
        className={clsx(styles["progress-bar-inner"])}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
