import React, { useState } from "react";
import { format } from "date-fns";
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
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";

import CustomAppointment from "./CustomAppointment";

const Tabs = ({ days, locations }) => {
  const [activeIndex, setActiveIndex] = useState("1");
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const selectedDay = days.filter((day) => day.dateIndex === activeIndex);

  // const appointments = selectedDay[0][activeIndex].map((speakerInfo) => {
  //   const filteredSpeakerInfo = {
  //     id: 0,
  //     speaker: speakerInfo.speaker,
  //     key: speakerInfo.key,
  //     title: speakerInfo.title,
  //     roomId: speakerInfo.roomId,
  //     startDate: new Date(
  //       selectedDay[0].year,
  //       selectedDay[0].month,
  //       selectedDay[0].day,
  //       speakerInfo.startHour,
  //       speakerInfo.startMinutes
  //     ),
  //     endDate: new Date(
  //       selectedDay[0].year,
  //       selectedDay[0].month,
  //       selectedDay[0].day,
  //       speakerInfo.endHour,
  //       speakerInfo.endMinutes
  //       ),
  //   };
  //   return filteredSpeakerInfo;
  // });

  const appointments = [
    {
      title: "Website Re-Design Plan",
      startDate: new Date(2018, 5, 25, 9, 30),
      endDate: new Date(2018, 5, 25, 11, 30),
      id: 0,
      location: "Room 1"
    },
    {
      title: "Book Flights to San Fran for Sales Trip",
      startDate: new Date(2018, 5, 25, 12, 0),
      endDate: new Date(2018, 5, 25, 13, 0),
      id: 1,
      location: "Room 1"
    },
    {
      title: "Install New Router in Dev Room",
      startDate: new Date(2018, 5, 25, 14, 30),
      endDate: new Date(2018, 5, 25, 15, 30),
      id: 2,
      location: "Room 2"
    }];

  const schedulerData = {
    data: appointments,
    resources: [
      {
        fieldName: "location",
        title: "Location",
        instances: locations,
      },
    ],
    grouping: [
      {
        resourceName: "location",
      },
    ],
  };

 

  // const currentDate = `${selectedDay[0].year}-${selectedDay[0].month + 1}-${
  //   selectedDay[0].day
  // }`;

  return (
    <>
      {/* <div className="tabs">
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
      </div> */}
      <div className="panels">
      <Paper>
        <Scheduler data={appointments}>
          <ViewState currentDate="2018-06-28" />
          <WeekView startDayHour={9} endDayHour={19} />
          <Appointments />
        </Scheduler>
      </Paper>
      </div>
      {/* <div className="cards">
        {appointments.map((appointment, agendaIndex) => {
          return (
            <div key={agendaIndex}>
              <CustomAppointment data={appointment} />
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Tabs;
