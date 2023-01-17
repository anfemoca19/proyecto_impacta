import { useState } from "react";
import CalendarLibrary from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div
      className="container-fluid calendar mb-5 mt-4 p-3"
      // className={clsx("container-fluidmb-5 mt-4 p-3", styles["calendar"])}
    >
      <CalendarLibrary
        onChange={setDate}
        value={date}
        nextAriaLabel="Ir al próximo mes"
        next2Label=""
        next2AriaLabel="Ir al próximo año"
        prevAriaLabel="Ir al mes anterior"
        prev2Label=""
        prev2AriaLabel="Ir al año anterior"
      />
    </div>
  );
}
