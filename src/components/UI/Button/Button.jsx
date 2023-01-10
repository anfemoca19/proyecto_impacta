import "./Button.scss";
import clsx from "clsx";

export default function Button({ children, typeButton, className, ...props }) {
  return (
    <button
      type="button"
      className={clsx("btn btn-style", className, {
        "btn-primary": typeButton === "primary",
        "btn-secondary": typeButton === "secondary",
        "btn-cuartary": typeButton === "secondary",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
