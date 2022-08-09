import React from "react";
import { differenceInMinutes } from "date-fns";
import { useTranslation } from "react-i18next";

import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const CustomAppointment = ({ style, ...restProps }) => {
  const { t } = useTranslation("common");
  const locations = t("agenda.locations", { returnObjects: true });

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function timeConvert(n) {
    const num = n;
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${
      rhours
        ? `${rhours} ${t("agenda.hourText", { returnObjects: true })} ${
            rhours > 1 ? `s` : ""
          }`
        : ""
    } ${
      rminutes
        ? `${rminutes} ${t("agenda.minuteText", {
            returnObjects: true,
          })}`
        : ""
    }`;
  }

  function getCurrentRoom(roomId) {
    return locations.filter((location) => location.id === roomId)[0];
  }

  const mins = differenceInMinutes(
    restProps.data.endDate,
    restProps.data.startDate
  );

  if (!restProps) {
    return false;
  }

  console.log('restProps.data', restProps.data);
  return (
    <Appointments.AppointmentContent {...restProps}>
      <div className="agenda-container">
        <div className="time">
          <div className="time-preview">
            <span className="ampm">{formatAMPM(restProps.data.startDate)}</span>
            <br></br>
            <span className="time-diffs">{timeConvert(mins)}</span>
          </div>
          <div className="course-info">
            <div className="progress-container">
              <span className="speaker-text">{restProps.data.speaker}</span>
              <br></br>
              <span className="progress-text">{restProps.data.title}</span>
            </div>
          </div>
        </div>
        <span className="room">{getCurrentRoom(restProps.data.roomId).text}</span>
      </div>
    </Appointments.AppointmentContent>
  );
};

export default CustomAppointment;
