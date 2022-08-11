import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  Appointments,
  GroupingPanel,
  DayView,
} from "@devexpress/dx-react-scheduler-material-ui";

import CustomAppointment from "./CustomAppointment";

const Tabs = ({ days, locations }) => {
  const [activeIndex, setActiveIndex] = useState("1");
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const selectedDay = days.filter((day) => day.dateIndex === activeIndex);

  const appointments = selectedDay[0][activeIndex].map((speakerInfo) => {
    const filteredSpeakerInfo = {
      id: 0,
      speaker: speakerInfo.speaker,
      key: speakerInfo.key,
      title: speakerInfo.title,
      roomId: speakerInfo.roomId,
      startDate: new Date(
        selectedDay[0].year,
        selectedDay[0].month,
        selectedDay[0].day,
        speakerInfo.startHour,
        speakerInfo.startMinutes
      ),
      endDate: new Date(
        selectedDay[0].year,
        selectedDay[0].month,
        selectedDay[0].day,
        speakerInfo.endHour,
        speakerInfo.endMinutes
      ),
    };
    return filteredSpeakerInfo;
  });

  const schedulerData = {
    data: appointments,
    resources: [
      {
        fieldName: "roomId",
        title: "Location",
        instances: locations,
      },
    ],
    grouping: [
      {
        resourceName: "roomId",
      },
    ],
  };

  const currentDate = `${selectedDay[0].year}-${selectedDay[0].month + 1}-${
    selectedDay[0].day
  }`;

  return (
    <>
      <div className="tabs">
        {days.map((day, index) => {
          return (
            <button
              key={index}
              className={`tab ${checkActive(day.dateIndex, "active")} date`}
              onClick={() => handleClick(day.dateIndex)}
            >
              {day.date}
            </button>
          );
        })}
      </div>
      <div className="panels">
        <Paper>
          <Scheduler data={schedulerData.data} locale="fr-FR" height={760}>
            <ViewState currentDate={currentDate} />
            <GroupingState grouping={schedulerData.grouping} />

            <DayView startDayHour={8.5} endDayHour={15} />
            <Appointments appointmentComponent={CustomAppointment} />
            <Resources
              data={schedulerData.resources}
              mainResourceName="roomId"
            />

            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler>
        </Paper>
      </div>
      <div className="cards">
        {appointments.map((appointment, agendaIndex) => {
          return (
            <div key={agendaIndex}>
              <CustomAppointment data={appointment} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
