import { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";

import CreateCourseForm from "./CreateCourseForm";

function DeleteCourse() {
  return (
    <Modal>
      <Modal.Open opens="assignment-form">
        <Button>Delete Course</Button>
      </Modal.Open>
      <Modal.Window name="assignment-form">
        <CreateCourseForm />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteCourse;
