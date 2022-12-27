import "../CircleColor/Circle.scss";
import clsx from "clsx";

export default function CircleColor({ typeCircle, className, ...props }) {
  return (
    <span
      className={clsx(className, {
        "circle-violet": typeCircle === "primary",
        "circle-green": typeCircle === "secondary",
      })}
      {...props}
    ></span>
  );
}
