import "./Button.scss";
import clsx from "clsx";

export default function Button({ children, typeButton, className, ...props }) {
  return (
    <button
      type="button"
      className={clsx(" btn-style", className, {
        "btn-primary": typeButton === "primary",
        "btn-secondary": typeButton === "secondary",
        "btn-terciary": typeButton === "terciary",
        "btn-cuartary": typeButton === "cuartary",
        "btn-fifth": typeButton === "fifth",
        "btn-modal": typeButton === "modal",
        "btn-next": typeButton === "next",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
