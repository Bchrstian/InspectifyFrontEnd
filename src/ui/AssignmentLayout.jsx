import React from "react";
import Row from "../ui/Row";
import Col from "../ui/Col";
import Heading from "../ui/Heading";
import FileUpload from "../ui/FileUpload";
import Button from "../ui/Button";
import TextArea from "../ui/Textarea";

function AssignmentLayout() {
  return (
    <div>
      <Heading as="h1">Create New Assignment</Heading>
      <Row>
        <Col size={6}>
          <label htmlFor="assignmentTitle">Assignment Title:</label>
          <input
            type="text"
            id="assignmentTitle"
            placeholder="Enter the title of the assignment"
          />
        </Col>
        <Col size={6}>
          <label htmlFor="uploadFile">Upload File:</label>
          <FileUpload id="uploadFile" />
        </Col>
      </Row>
      <Row>
        <Col size={6}>
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" id="dueDate" />
          <input type="time" id="dueTime" />
        </Col>
      </Row>
      <Row>
        <Col size={12}>
          <label htmlFor="assignmentDescription">Description:</label>
          <TextArea
            id="assignmentDescription"
            rows={4}
            placeholder="Enter the description of the assignment"
          />
        </Col>
      </Row>
      <Row>
        <Col size={12}>
          <Button variant="primary">Create Assignment</Button>
        </Col>
      </Row>
    </div>
  );
}

export default AssignmentLayout;
