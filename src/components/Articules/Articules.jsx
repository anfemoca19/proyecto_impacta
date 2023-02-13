import clsx from "clsx";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "../Articules/Articules.module.scss";
import CardArticules from "../CardArticules/CardArticules";
export default function Articules() {
  return (
    <div className={clsx(styles["container-violet"])}>
      <h3 className={styles.title}>Articulos de interes</h3>
      <div className={styles.cardVioletContainer}>
        <CardArticules />
      </div>
      <div className={styles["container-btn"]}>
        <button
          className={clsx(styles["btn-prev"])}
          onClick={() => {
            // handlePrevius();
          }}
        >
          <AiOutlineLeft color="#afdb00" style={{ fontSize: "50px" }} />
        </button>
        <button
          className={clsx(styles["btn-next"])}
          onClick={() => {
            // handleNext();
          }}
        >
          <AiOutlineRight color="#afdb00" style={{ fontSize: "50px" }} />
        </button>
      </div>
    </div>
  );
}
