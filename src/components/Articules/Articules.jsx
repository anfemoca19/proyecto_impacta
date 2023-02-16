import clsx from "clsx";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "../Articules/Articules.module.scss";
import CardArticules from "../CardArticules/CardArticules";
export default function Articules() {
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={clsx(styles["container-violet"])}>
      <h3 className={styles.title}>Articulos de interes</h3>
      <div ref={containerRef} className={styles.cardVioletContainer}>
        <CardArticules />
        <CardArticules />
        <CardArticules />
        <CardArticules />
        <CardArticules />
        <CardArticules />
        <CardArticules />
        <CardArticules />
      </div>
      <div className={styles["container-btn"]}>
        <button
          className={clsx(styles["btn-prev"])}
          onClick={() => scroll(-50)}
        >
          <AiOutlineLeft color="#afdb00" style={{ fontSize: "50px" }} />
        </button>
        <button className={clsx(styles["btn-next"])} onClick={() => scroll(50)}>
          <AiOutlineRight color="#afdb00" style={{ fontSize: "50px" }} />
        </button>
      </div>
    </div>
  );
}
