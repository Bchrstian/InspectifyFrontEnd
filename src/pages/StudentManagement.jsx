import StudentTable from "../features/students/StudentTable";
import Studentoperations from "../features/students/studentoperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function StudentManagement() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Manage Your Student</Heading>
        <Studentoperations />
      </Row>

      <Row>
        <StudentTable />
      </Row>
    </>
  );
}

export default StudentManagement;
