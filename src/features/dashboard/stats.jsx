import React from "react";
import {
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import Stat from "./Stat";

function Stats({ numStudents, numAssignments, otherMetric1, otherMetric2 }) {
  const defaultStats = [
    {
      title: "Students",
      color: "blue",
      icon: <HiOutlineUserGroup />,
      value: numStudents,
    },
    {
      title: "Assignments",
      color: "green",
      icon: <HiOutlineDocumentText />,
      value: numAssignments,
    },
    {
      title: "Notifications",
      color: "indigo",
      icon: <HiOutlineCalendar />,
      value: otherMetric1,
    },
    {
      title: "Grades",
      color: "yellow",
      icon: <HiOutlineCheckCircle />,
      value: otherMetric2,
    },
  ];

  return (
    <>
      {defaultStats.map((stat, index) => (
        <Stat
          key={index}
          title={stat.title}
          color={stat.color}
          icon={stat.icon}
          value={stat.value}
        />
      ))}
    </>
  );
}

export default Stats;
