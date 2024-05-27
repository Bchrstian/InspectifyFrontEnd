import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

const fakeData = [
  { label: "Jan 09", assignmentReview: 480, extrasSales: 20 },
  { label: "Jan 10", assignmentReview: 580, extrasSales: 100 },
  { label: "Jan 11", assignmentReview: 550, extrasSales: 150 },
  { label: "Jan 12", assignmentReview: 600, extrasSales: 50 },
  { label: "Jan 13", assignmentReview: 700, extrasSales: 150 },
  { label: "Jan 14", assignmentReview: 800, extrasSales: 150 },
  { label: "Jan 15", assignmentReview: 700, extrasSales: 200 },
  { label: "Jan 16", assignmentReview: 650, extrasSales: 200 },
  { label: "Jan 17", assignmentReview: 600, extrasSales: 300 },
  { label: "Jan 18", assignmentReview: 550, extrasSales: 100 },
  { label: "Jan 19", assignmentReview: 700, extrasSales: 100 },
  { label: "Jan 20", assignmentReview: 800, extrasSales: 200 },
  { label: "Jan 21", assignmentReview: 700, extrasSales: 100 },
  { label: "Jan 22", assignmentReview: 810, extrasSales: 50 },
  { label: "Jan 23", assignmentReview: 950, extrasSales: 250 },
  { label: "Jan 24", assignmentReview: 970, extrasSales: 100 },
  { label: "Jan 25", assignmentReview: 900, extrasSales: 200 },
  { label: "Jan 26", assignmentReview: 950, extrasSales: 300 },
  { label: "Jan 27", assignmentReview: 850, extrasSales: 200 },
  { label: "Jan 28", assignmentReview: 900, extrasSales: 100 },
  { label: "Jan 29", assignmentReview: 800, extrasSales: 300 },
  { label: "Jan 30", assignmentReview: 950, extrasSales: 200 },
  { label: "Jan 31", assignmentReview: 1100, extrasSales: 300 },
  { label: "Feb 01", assignmentReview: 1200, extrasSales: 400 },
  { label: "Feb 02", assignmentReview: 1250, extrasSales: 300 },
  { label: "Feb 03", assignmentReview: 1400, extrasSales: 450 },
  { label: "Feb 04", assignmentReview: 1500, extrasSales: 500 },
  { label: "Feb 05", assignmentReview: 1400, extrasSales: 600 },
  { label: "Feb 06", assignmentReview: 1450, extrasSales: 400 },
];

const isDarkMode = true;
const colors = isDarkMode
  ? {
      assignmentReview: { stroke: "#4f46e5", fill: "#4f46e5" },
      extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
      text: "#e5e7eb",
      background: "#18212f",
    }
  : {
      assignmentReview: { stroke: "#4f46e5", fill: "#c7d2fe" },
      extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
      text: "#374151",
      background: "#fff",
    };

function SalesChart() {
  return (
    <StyledSalesChart>
      <Heading as="h2">Progress</Heading>
      <AreaChart data={fakeData} height={300} width={700}>
        <XAxis
          dataKey="label"
          tick={{ stroke: colors.text }}
          tickLine={{ stroke: colors.text }}
        />
        <CartesianGrid />
        <Tooltip />
        <Area
          dataKey="assignmentReview"
          type="monotone"
          stroke={colors.assignmentReview.stroke}
          fill={colors.assignmentReview.fill}
        />
        {/* You can add more <Area /> components for other data keys if needed */}
      </AreaChart>
    </StyledSalesChart>
  );
}

export default SalesChart;
