import React from "react";
import StudentRow from "./StudentRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import StudentViewOperations from "./StudentViewTableOperations"; // Correct import

function StudentViewTable() {
  // Dummy data for design purposes
  const students = [
    {
      id: 1,
      assignmentName: "Assignment 1",
      course: "Mathematics",
      deadlineDate: "2024-06-30",
      status: "Pending",
      grade: "A",
    },
    {
      id: 2,
      assignmentName: "Assignment 2",
      course: "Science",
      deadlineDate: "2024-07-15",
      status: "Completed",
      grade: "B+",
    },
    // Add more dummy data as needed
  ];
  const isLoading = false;
  const count = students.length;

  if (isLoading) return <Spinner />;

  if (!students.length) return <Empty resourceName="students" />;

  return (
    <Menus>
      <StudentViewOperations /> {/* Include filter and sort operations */}
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Assignment Name</div>
          <div>Course</div>
          <div>Deadline Date</div>
          <div>Status</div>
          <div>Grade</div>
          <div></div>
        </Table.Header>

        <Table.Body>
          {students.map((student) => (
            <StudentRow key={student.id} student={student} />
          ))}
        </Table.Body>

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default StudentViewTable;
