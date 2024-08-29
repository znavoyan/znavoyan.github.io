import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";

import CustomTooltip from "./CustomTooltip";

const CustomAppointment = ({ style, ...restProps }) => {
  const [visibility, setVisibility] = useState(false);
  const { t } = useTranslation("common");
  const speakersList = t("speakers.speakersList", { returnObjects: true });
  const locations = t("agenda.locations", { returnObjects: true });

  const ref = useRef(null);

  const currentSpeaker = speakersList.find(
    (speaker) => `${speaker.name} ${speaker.surname}` === restProps.data.speaker
  );

  let collaborators = [];

  if (restProps.data.collaborators) {
    collaborators = restProps.data.collaborators.map((collaborator) =>
      speakersList.find(
        (speaker) => collaborator === `${speaker.name} ${speaker.surname}`
      )
    );
  }

  const popupCloseHandler = (event) => {
    setVisibility(false);
  };

  const openTooltip = (event) => {
    setVisibility(true);

    const nearestCustomAppointment = event.target.closest(
      ".custom-appointment"
    );
    nearestCustomAppointment.parentElement.classList.add("active-popup");

    const elementRect =
      nearestCustomAppointment.parentElement.getBoundingClientRect();

    // Get the viewport width
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // Calculate the right threshold for the element to be considered on the right
    const rightThreshold = viewportWidth - elementRect.width;

    // Check if the element's right position is beyond the threshold
    const isOnRight = elementRect.right >= rightThreshold;

    if (isOnRight) {
      nearestCustomAppointment.parentElement.querySelector(
        ".popup"
      ).style.left = `-${380 - elementRect.width}px`;
    }
  };

  useEffect(() => {
    if (ref && ref.current) {
      const parent = ref.current.parentElement;
      parent.parentElement.classList.add("toggleWidth");
      document
        .querySelectorAll(".break-info")
        .forEach(
          (element) =>
            (element.closest(".custom-appointment").parentElement.style.width =
              "100%")
        );
    }
  }, [restProps]);

  function getCurrentRoom(roomId) {
    return locations.filter((location) => location.id === roomId)[0];
  }
  if (!restProps) {
    return false;
  }

  const timeHeight =
    ((restProps.data.endDate - restProps.data.startDate) / 1000 / 60) * 3.3333;

  return (
    <div className="custom-appointment" id="box">
      <CustomTooltip onClose={popupCloseHandler} show={visibility}>
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
              <p className="title">{restProps.data.title}</p>
              <div className="space-10-height"></div>
              <p className="abstract">{restProps.data.abstract}</p>
            </a>
            <div className="space-10-height"></div>
          </div>
        )}
        {collaborators.length && (
          <div className="flex column">
            <div className="collaborators">
              {collaborators.map((collaborator) => {
                return (
                  <a
                    href={collaborator.linkedUrl}
                    className="flex align-start column link-no-decoration speaker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="flex">
                      <img
                        src={collaborator.imgUrl}
                        alt=""
                        className="rounded"
                      />
                      <div>
                        <p className="img-title">
                          <span>{collaborator.name}</span>{" "}
                          {collaborator.surname}
                        </p>
                        <p className="img-paragraph">
                          {collaborator.position} <br></br>
                          {collaborator.company}
                        </p>
                      </div>
                      <div className="space-10-height"></div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="space-10-height"></div>
            <p className="title">{restProps.data.title}</p>
            <div className="space-10-height"></div>
            <p className="abstract">{restProps.data.abstract}</p>
            <div className="space-10-height"></div>
          </div>
        )}
      </CustomTooltip>
      <Appointments.AppointmentContent {...restProps}>
        {(restProps.data.speaker || restProps.data.collaborators) && (
          <div
            className="agenda-container"
            onClick={openTooltip}
            style={{ height: `${timeHeight}px` }}
          >
            <div className="time">
              <div className="time-preview">
                <span>{format(restProps.data.startDate, "HH:mm")}</span>
                <br></br>
                <span>{format(restProps.data.endDate, "HH:mm")}</span>
              </div>
              <div className="course-info">
                <div className="progress-container">
                  <span className="speaker-text">
                    {restProps.data.speaker
                      ? restProps.data.speaker
                      : restProps.data.collaborators.join(", ")}
                  </span>
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
          <div
            className="break-info"
            ref={ref}
            style={{ width: "100%", height: `${timeHeight}px` }}
          >
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
