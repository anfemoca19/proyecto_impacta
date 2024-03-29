import styles from "../Ranking/Ranking.module.scss";
import clsx from "clsx";
import Start from "../Star/Star";

export default function RankinComponent({ children, ...props }) {
  return (
    <>
      <div
        className={clsx("container-fluit mt-5 p-4", styles["container-box"])}
      >
        <div className={clsx(styles["container-styles-number"])}>
          <span>Valoraciones</span>
          <span className={clsx(styles["styles-number-ranking"])}>
            {props.courseDetails}
          </span>
        </div>
        <div className={clsx(styles["container-styles-number"])}>
          <Start
            colorBorder={"#afdb00"}
            colorRelleno={"#afdb00"}
            fontSize={"40px"}
            score={3}
          />
          <span>Rating de curso</span>
        </div>
      </div>
    </>
  );
}
