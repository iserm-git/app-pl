import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      {" "}
      {/* Este div asegura que el calendario ocupe toda la pantalla */}
      <Calendar
        localizer={localizer}
        events={[]} // Aquí irían tus eventos
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default MyCalendar;
