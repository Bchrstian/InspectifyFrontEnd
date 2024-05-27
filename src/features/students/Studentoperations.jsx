import TableOperations from "../../ui/TableOperations";
import StudentFilter from "../../ui/StudentFilter";
import SortBy from "../../ui/SortBy";

function Studentoperations() {
  return (
    <TableOperations>
      <StudentFilter />
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort by name (Z-A)",
          },
          {
            value: "ID",
            label: "Sort By Id ",
          },
          {
            value: "cohort",
            label: "Sort by cohort (A-Z)",
          },
          {
            value: "cohort",
            label: "Sort by cohort (Z-A)",
          },
          {
            value: "grade",
            label: "Sort by grade (High First)",
          },
        ]}
      />
    </TableOperations>
  );
}
export default Studentoperations;
