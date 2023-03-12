import React, { useState } from "react";
import clsx from "clsx";
import styles from "./MenuTabs.module.scss";
import { BsCheckCircle } from "react-icons/bs";
import AcordionComponent from "../AcordionModule/AcordionModule";

export default function MenuTab({ courseDetails }) {
  const [activeTab, setActiveTab] = useState("temario");
  console.log("rueba", courseDetails);

  const handlerTab = ({ tab }) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabItems}>
        <li
          className={clsx(
            styles.tabItem,
            activeTab === "temario" && styles.activeItem
          )}
          onClick={() => handlerTab({ tab: "temario" })}
        >
          Temario
        </li>
        <li
          className={clsx(
            styles.tabItem,
            activeTab === "beneficios" && styles.activeItem
          )}
          onClick={() => handlerTab({ tab: "beneficios" })}
        >
          Beneficios
        </li>
        <li
          className={clsx(
            styles.tabItem,
            activeTab === "descripcion" && styles.activeItem
          )}
          onClick={() => handlerTab({ tab: "descripcion" })}
        >
          Descripcion
        </li>
        <li
          className={clsx(
            styles.tabItem,
            activeTab === "requerimientos" && styles.activeItem
          )}
          onClick={() => handlerTab({ tab: "requerimientos" })}
        >
          Requerimientos
        </li>
        <li
          className={clsx(
            styles.tabItem,
            activeTab === "descargables" && styles.activeItem
          )}
          onClick={() => handlerTab({ tab: "descargables" })}
        >
          Descargables
        </li>
      </ul>
      <div className={styles.tabContainer}>
        <div
          className={clsx(styles.tab, activeTab === "temario" && styles.active)}
        >
          <AcordionComponent title="Modulo 1"></AcordionComponent>
        </div>
        <div
          className={clsx(
            styles.tab,
            activeTab === "beneficios" && styles.active
          )}
        >
          {
            <div className={clsx("mb-3", styles["container-beneficios-all"])}>
              <div className={clsx(styles["container-beneficios"])}>
                {courseDetails.beneficios.map((beneficios, index) => {
                  return (
                    <div className={styles.beneficio} key={index}>
                      <BsCheckCircle
                        className={styles.icon}
                        color={"#afdb00"}
                      />
                      <span className={styles.text}>
                        {beneficios.beneficio}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          }
        </div>
        <div
          className={clsx(
            styles.tab,
            activeTab === "descripcion" && styles.active
          )}
        >
          <p>{courseDetails.descripcion_creador}</p>
        </div>
        <div
          className={clsx(
            styles.tab,
            activeTab === "requerimientos" && styles.active
          )}
        >
          <p> {courseDetails.requerimientos}</p>
        </div>
      </div>
    </div>
  );
}
