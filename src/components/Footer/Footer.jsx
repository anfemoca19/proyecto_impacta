import clsx from "clsx";
import styles from "../Footer/Footer.module.scss";

import CarrucelCard from "../Carrucel/Carrucel";
import { cursesData } from "../../constants/user_const";

export default function FooterComponenet() {
  return (
    <>
      <div className={clsx("p-5")}>
        <div className={clsx("mb-5")}>
          <span className={clsx(styles["style-title"])}>
            Cursos relacionados
          </span>
        </div>
        <div className={clsx("container-fluid", styles.fixPosition)}>
          <CarrucelCard cursesData={cursesData} limitSlider={4} />
        </div>
      </div>
    </>
  );
}
