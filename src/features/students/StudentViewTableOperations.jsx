import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function StudentViewOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "pending", label: "Pending" },
          { value: "completed", label: "Completed" },
          { value: "overdue", label: "Overdue" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "deadlineDate-desc",
            label: "Sort by deadline (latest first)",
          },
          {
            value: "deadlineDate-asc",
            label: "Sort by deadline (earliest first)",
          },
          { value: "grade-desc", label: "Sort by grade (high first)" },
          { value: "grade-asc", label: "Sort by grade (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default StudentViewOperations;
