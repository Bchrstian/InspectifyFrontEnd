import styled from "styled-components";
import Stats from "./stats";
import SalesChart from "./SalesChart";
import AssignmentChart from "./AssignmentChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const numStudents = 50;
  const numAssignments = 15;
  return (
    <StyledDashboardLayout>
      <Stats numStudents={numStudents} numAssignments={numAssignments} />
      <TodayActivity />
      <AssignmentChart />
      <div>Students</div>
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
