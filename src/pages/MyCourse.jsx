import CreateCourse from "../features/Courses/CreateCourse";
import DeleteCourse from "../features/Courses/DeleteCourse";
import EditCourse from "../features/Courses/EditCourse";

// import Assignmenttableoperations from "../features/assignments/assignmenttableoperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function MyCourse() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1"> Manage Your Course </Heading>
        {/* <Assignmenttableoperations /> */}
      </Row>

      <Row>
        <CreateCourse></CreateCourse>
        <EditCourse></EditCourse>
        <DeleteCourse></DeleteCourse>
      </Row>
    </>
  );
}

export default MyCourse;
