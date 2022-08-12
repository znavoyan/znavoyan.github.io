import React, { useEffect, useRef } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

const CustomAppointment = ({ style, ...restProps }) => {
  const { t } = useTranslation("common");
  const locations = t("agenda.locations", { returnObjects: true });

  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      const parent = ref.current.parentElement;
      parent.parentElement.style.width = "99%";
    }
  }, [restProps]);

  function getCurrentRoom(roomId) {
    return locations.filter((location) => location.id === roomId)[0];
  }

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
                {/* {format(restProps.data.startDate, "HH:mm")} */}
              </span>
              <br></br>
              <span>
                {/* {format(restProps.data.endDate, "HH:mm")} */}
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
                {/* {format(restProps.data.startDate, "HH:mm")} */}
              </span>
              <br></br>
              <span>
                {/* {format(restProps.data.endDate, "HH:mm")} */}
              </span>
            </div>
          <div class="break-text">{restProps.data.title}</div>
        </div>
      )}
    </Appointments.AppointmentContent>
  );
};

export default CustomAppointment;
