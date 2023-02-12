import React, { useState } from "react";
import clsx from "clsx";
import styles from "./MenuTabs.module.scss";
export default function MenuTab() {
  const [activeTab, setActiveTab] = useState("temario");

  const handlerTab = ({ tab }) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.wrapper}>
      <div className={clsx("container")}>
        <h2>Example tab 2 (using standard nav-tabs)</h2>
      </div>

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
      </ul>
      <div className={styles.tabContainer}>
        <div
          className={clsx(styles.tab, activeTab === "temario" && styles.active)}
        >
          <p>Standard tab panel created on bootstrap using nav-tabs</p>
        </div>
        <div
          className={clsx(
            styles.tab,
            activeTab === "beneficios" && styles.active
          )}
        >
          <p>
            Notice the gap between the content and tab after applying a
            background color
          </p>
        </div>
        <div
          className={clsx(
            styles.tab,
            activeTab === "descripcion" && styles.active
          )}
        >
          <p>descripcion</p>
        </div>
        <div
          className={clsx(
            styles.tab,
            activeTab === "requerimientos" && styles.active
          )}
        >
          <p>add clearfix to tab-content (see the css)</p>
        </div>
      </div>
    </div>
  );
}
