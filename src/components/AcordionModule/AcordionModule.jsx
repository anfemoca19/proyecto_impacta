import { useState } from "react";

export default function AcordionComponent({ children, title }) {
  const [openAccordion, setOpenAccordion] = useState(false);

  const accordionHander = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <h2>
            <button
              className="accordion-button"
              type="button"
              onClick={accordionHander}
            >
              {title}
              {/* {openAccordion && "arriba"}
              {!openAccordion && "abajo"} */}
            </button>
          </h2>
          {openAccordion && (
            <div className="accordion-collapse collapse show">
              <div className="accordion-body">here goes body</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
