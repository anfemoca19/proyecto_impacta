import { useState } from "react";
import CalendarLibrary from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container-fluid calendar mb-5 mt-4 rounded p-3">
      <CalendarLibrary
        onChange={setDate}
        value={date}
        // nextLabel="month>>"
        nextAriaLabel="Ir al próximo mes"
        next2Label=""
        next2AriaLabel="Ir al próximo año"
        // prevLabel="< <mes"
        prevAriaLabel="Ir al mes anterior"
        prev2Label=""
        prev2AriaLabel="Ir al año anterior"
      />
    </div>
  );
}
