import AddAssignment from "../features/assignments/AddAssignment";
import AddCohort from "../features/cohorts/AddCohort";
// import Assignmenttableoperations from "../features/assignments/assignmenttableoperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function CohortCreation() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1"> Create Cohorts </Heading>
        {/* <Assignmenttableoperations /> */}
      </Row>

      <Row>
        <AddCohort></AddCohort>
      </Row>
    </>
  );
}

export default CohortCreation;
