import { useRef } from "react";
import Label from "../Label/Label";
import "./UploadInput.scss";
import clsx from "clsx";

export default function UploadInput({
  handleDrop,
  className,
  children,
  ...props
}) {
  return (
    <div>
      <input
        type="file"
        name="file-4"
        id="file"
        className={"inputfile inputfile-4"}
        data-multiple-caption="{count} archivos seleccionados"
        multiple
      />

      <label htmlfor="file-4">
        <span
          // className={("iborrainputfile", className)}
          className={clsx("iborrainputfile", className, {})}
          {...props}
        >
          {children}
        </span>
      </label>
    </div>
  );
}
