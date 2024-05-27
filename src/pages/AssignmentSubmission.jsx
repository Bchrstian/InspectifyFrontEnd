import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AssignmentSubmission() {
  const [assignmentData, setAssignmentData] = useState({
    title: "",
    description: "",
    githubUrl: "",
    branch: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentData({ ...assignmentData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
    console.log("Submitting Assignment:", assignmentData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row type="horizontal">
        <Heading as="h1">Assignment Submission</Heading>
      </Row>
      <Row type="vertical">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={assignmentData.title}
          onChange={handleInputChange}
        />
      </Row>
      <Row type="vertical">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={assignmentData.description}
          onChange={handleInputChange}
        />
      </Row>
      <Row type="vertical">
        <label htmlFor="githubUrl">GitHub URL:</label>
        <input
          type="text"
          id="githubUrl"
          name="githubUrl"
          value={assignmentData.githubUrl}
          onChange={handleInputChange}
        />
      </Row>
      <Row type="vertical">
        <label htmlFor="branch">Branch:</label>
        <input
          type="text"
          id="branch"
          name="branch"
          value={assignmentData.branch}
          onChange={handleInputChange}
        />
      </Row>
      <Row type="vertical">
        <button type="submit">Submit Assignment</button>
      </Row>
    </form>
  );
}

export default AssignmentSubmission;
