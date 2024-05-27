import AddAssignment from "../features/assignments/AddAssignment";
// import Assignmenttableoperations from "../features/assignments/assignmenttableoperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AssignmentsManagement() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1"> All created Assignments </Heading>
        {/* <Assignmenttableoperations /> */}
      </Row>

      <Row>
        <AddAssignment></AddAssignment>
      </Row>
    </>
  );
}

export default AssignmentsManagement;
