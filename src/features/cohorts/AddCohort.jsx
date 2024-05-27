import { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";
import CreateCohortForm from "./CreateCohortForm";

function AddCohort() {
  return (
    <Modal>
      <Modal.Open opens="assignment-form">
        <Button>Create Cohort</Button>
      </Modal.Open>
      <Modal.Window name="assignment-form">
        <CreateCohortForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCohort;
