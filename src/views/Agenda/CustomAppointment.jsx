import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

import CustomTooltip from "./CustomTooltip";

const CustomAppointment = ({ style, ...restProps }) => {
  // document.addEventListener('click', function handleClickOutsideBox(event) {
  //   const activePopup = document.getElementsByClassName('active-popup');
  
  //   if (!activePopup[0].contains(event.target)) {
  //     console.log('clicked outside');
  //     const overlay = activePopup[0].querySelector('.overlay');
  //     overlay.style.visibility='hidden';
  //   }
  // });
  const [visibility, setVisibility] = useState(false);
  const { t } = useTranslation("common");
  const speakersList = t("speakers.speakersList", { returnObjects: true });
  const locations = t("agenda.locations", { returnObjects: true });

  const ref = useRef(null);

  const currentSpeaker = speakersList.find(
    (speaker) => `${speaker.name} ${speaker.surname}` === restProps.data.speaker
  );

  const popupCloseHandler = (event) => {
    setVisibility(event);
  };

  const openTooltip = (event) => {
    event.target
      .closest(".custom-appointment")
      .parentElement.classList.add("active-popup");
    setVisibility(true);
  };

  useEffect(() => {
    if (ref && ref.current) {
      const parent = ref.current.parentElement;
      parent.parentElement.classList.add("toggleWidth");
    }
  }, [restProps]);

  function getCurrentRoom(roomId) {
    return locations.filter((location) => location.id === roomId)[0];
  }
  if (!restProps) {
    return false;
  }

  return (
    <div className="custom-appointment" id="box">
      <CustomTooltip
        onClose={popupCloseHandler}
        show={visibility}
      >
        {currentSpeaker && (
          <div className="flex column">
            <a
              href={currentSpeaker.linkedUrl}
              className="flex center column link-no-decoration"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex">
                <img src={currentSpeaker.imgUrl} alt="" className="rounded" />
                <div class="flex">
                  <p className="img-title">
                    <span>{currentSpeaker.name}</span> {currentSpeaker.surname}
                  </p>
                </div>
              </div>
              <div className="space-10-height"></div>
              <p className="img-paragraph">
                    {currentSpeaker.position} <br></br>
                    {currentSpeaker.company}
              </p>
              <div className="space-10-height"></div>
              <p className="abstract">{currentSpeaker.abstract}
              </p>
            </a>
            <div className="space-10-height"></div>
          </div>
        )}
      </CustomTooltip>
      <Appointments.AppointmentContent {...restProps}>
        {restProps.data.speaker && (
          <div className="agenda-container" onClick={openTooltip}>
            <div className="time">
              <div className="time-preview">
                <span>{format(restProps.data.startDate, "HH:mm")}</span>
                <br></br>
                <span>{format(restProps.data.endDate, "HH:mm")}</span>
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
              <span>{format(restProps.data.startDate, "HH:mm")}</span>
              <br></br>
              <span>{format(restProps.data.endDate, "HH:mm")}</span>
            </div>
            <div class="break-text">{restProps.data.title}</div>
          </div>
        )}
      </Appointments.AppointmentContent>
    </div>
  );
};

export default CustomAppointment;
