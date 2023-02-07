import clsx from "clsx";
import styles from "../CardSocial/CardSocial.module.scss";
import Star from "../Star/Star";

export default function CardSocial() {
  return (
    <div className={clsx(styles["container-wrap"])}>
      <div className={clsx(styles["container-box"])}>
        <div className={clsx(styles["container-foto"])}>
          <img src="" alt="" />
        </div>
        <div>
          <Star
            className={styles.valorarStars}
            colorBorder={"#afdb00"}
            colorRelleno={"#afdb00"}
            fontSize={"20px"}
          />
        </div>
        <div>
          <span className={clsx(styles["style-name"])}>Naomi Smith</span>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
}
