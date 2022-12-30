import "../Input/input.scss";
import clsx from "clsx";

export default function Input({ children, typeInput, className, ...props }) {
  let selectClass = props.selectClass ? ` ${props.selectClass}` : "";

  return (
    <div className={"d-flex"}>
      <input
        className={clsx(className, {
          "input-primary": typeInput === "primary",
          "input-secondary": typeInput === "secondary",
        })}
        {...props}
      ></input>
    </div>
  );
}
