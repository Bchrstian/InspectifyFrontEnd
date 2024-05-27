import Button from "../../ui/Button";

import Modal from "../../ui/Modal";

import CreateCourseForm from "./CreateCourseForm";

function EditCourse() {
  return (
    <Modal>
      <Modal.Open opens="assignment-form">
        <Button>Edit Course</Button>
      </Modal.Open>
      <Modal.Window name="assignment-form">
        <CreateCourseForm />
      </Modal.Window>
    </Modal>
  );
}

export default EditCourse;
