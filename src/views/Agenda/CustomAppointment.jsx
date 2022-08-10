import React, { useEffect, useRef, useState } from "react";
import { differenceInMinutes, format } from "date-fns";
import { useTranslation } from "react-i18next";

import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const CustomAppointment = ({ style, ...restProps }) => {
  const { t } = useTranslation("common");
  const locations = t("agenda.locations", { returnObjects: true });

  const ref = useRef(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref && ref.current) {
      setHeight(ref.current.offsetHeight);
      setWidth(ref.current.offsetWidth);
      const parent = ref.current.parentElement;
      parent.parentElement.style.width = "99%";
      // parent.parentElement.style.height = '80px';
    }
  }, []);

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

  return (
    <Appointments.AppointmentContent {...restProps}>
      {restProps.data.speaker && (
        <div className="agenda-container">
          <div className="time">
            <div className="time-preview">
              <span>
                {format(restProps.data.startDate, "HH:mm")}
              </span>
              <br></br>
              <span>
                {format(restProps.data.endDate, "HH:mm")}
              </span>
            </div>
            <div className="course-info">
              <div className="progress-container">
                <span className="speaker-text">{restProps.data.speaker}</span>
                <br></br>
                <span className="progress-text">{restProps.data.title}</span>
              </div>
            </div>
          </div>
          <span className="room">
            {getCurrentRoom(restProps.data.roomId).text}
          </span>
        </div>
      )}
      {restProps.data.key && (
        <div className="break-info" ref={ref}>
          <div className="time-preview">
              <span>
                {format(restProps.data.startDate, "HH:mm")}
              </span>
              <br></br>
              <span>
                {format(restProps.data.endDate, "HH:mm")}
              </span>
            </div>
          <div class="break-text">{restProps.data.title}</div>
        </div>
      )}
    </Appointments.AppointmentContent>
  );
};

export default CustomAppointment;
