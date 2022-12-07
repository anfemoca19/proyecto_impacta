import clsx from "clsx";
import { useState } from "react";
import styles from "./calendar.module.scss";

// Example of using module with sass
// className={clsx(styles.calendar, styles.john, {
//   [styles.purple]: showPurple,
// })}
export default function Calendar() {
  const [showPurple, setShowPurple] = useState(false);

  const onShowPurple = () => {
    setShowPurple(!showPurple);
  };

  return (
    <h1 className={clsx("mb-5", "mt-5", "rounded", styles.calendar)}>
      Aca va el calendario
    </h1>
  );
}
