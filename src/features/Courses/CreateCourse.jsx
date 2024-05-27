import Button from "../../ui/Button";

import Modal from "../../ui/Modal";

import CreateCourseForm from "./CreateCourseForm";

function CreateCourse() {
  return (
    <Modal>
      <Modal.Open opens="assignment-form">
        <Button>Add Course</Button>
      </Modal.Open>
      <Modal.Window name="assignment-form">
        <CreateCourseForm />
      </Modal.Window>
    </Modal>
  );
}

export default CreateCourse;
