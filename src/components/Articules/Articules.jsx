import clsx from "clsx";
import { useState } from "react";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "../Articules/Articules.module.scss";
import CardArticules from "../CardArticules/CardArticules";
export default function Articules({ ...props }) {
  const [currentIndex] = useState(0);
  const containerRef = useRef(null);
  const limitSlider = props.limitSlider;
  const articuloToShow = props.articulesData.slice(
    currentIndex,
    currentIndex + limitSlider
  );
  const scroll = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={clsx(styles["container-violet"])}>
      <span className={styles.title}>Articulos de interes</span>
      <div ref={containerRef} className={styles.cardVioletContainer}>
        {articuloToShow.map((articulo) => {
          return <CardArticules key={articulo.id} articuloData={articulo} />;
        })}
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
