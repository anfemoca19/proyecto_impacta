import clsx from "clsx";
import { useState } from "react";
import styles from "../AcordionModule/AcordionModule.module.scss";

export default function AcordionComponent({ children, title }) {
  const [openAccordion, setOpenAccordion] = useState(false);

  const accordionHander = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <>
      <div className={clsx("accordion")}>
        <div className={clsx("accordion-item")}>
          <h2>
            <button
              className={clsx("accordion-button", styles["styles-btn"])}
              type="button"
              onClick={accordionHander}
            >
              {title}
            </button>
          </h2>
          {openAccordion && (
            <div className={clsx("accordion-collapse collapse show")}>
              <div className={clsx("accordion-body", styles["styles-body"])}>
                here goes body
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
