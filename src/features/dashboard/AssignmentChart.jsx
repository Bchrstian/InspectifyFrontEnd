import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;
  width: 100%; /* Ensure ChartBox takes full width */

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const fakeDataLight = [
  { category: "Assignments Marked", value: 5, color: "#4f46e5" },
  { category: "Passed Students", value: 10, color: "#22c55e" },
  { category: "Failed Students", value: 2, color: "#ef4444" },
  { category: "Did Not Submit", value: 3, color: "#f97316" },
];

const fakeDataDark = [
  { category: "Assignments Marked", value: 5, color: "#3730a3" },
  { category: "Passed Students", value: 10, color: "#166534" },
  { category: "Failed Students", value: 2, color: "#b91c1c" },
  { category: "Did Not Submit", value: 3, color: "#9a3412" },
];

function AssignmentChart() {
  const { isDarkMode } = useDarkMode();
  const data = isDarkMode ? fakeDataDark : fakeDataLight;

  return (
    <ChartBox>
      <Heading as="h2">Assignment Status Summary</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="category"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="50%"
            cy="50%"
            paddingAngle={3}
            label
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.category}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default AssignmentChart;
