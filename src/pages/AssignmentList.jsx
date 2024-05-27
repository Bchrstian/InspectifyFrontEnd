import Heading from "../ui/Heading";
import Row from "../ui/Row";

import StudentViewOperations from "../features/students/StudentViewTableOperations";
import StudentViewTable from "../features/students/StudentViewTable";

function AssignmentList() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All assignments</Heading>
        <StudentViewOperations />
      </Row>

      <StudentViewTable />
    </>
  );
}

export default AssignmentList;
