import { useState } from "react";
import Button from "../../ui/Button";
import CreateAssignmentForm from "./CreateAssignmentForm";
import Modal from "../../ui/Modal";
function AddAssignment() {
  return (
    <Modal>
      <Modal.Open opens="assignment-form">
        <Button>Add new Assignment</Button>
      </Modal.Open>
      <Modal.Window name="assignment-form">
        <CreateAssignmentForm />
      </Modal.Window>

      {/* <Modal.Open>
        <Button>Show Assignments</Button>
      </Modal.Open>
      <Modal.Window>
        <CreateAssignmentForm />
      </Modal.Window> */}
    </Modal>
  );
}
// function AddAssignment() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new Assignment
//       </Button>

//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateAssignmentForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddAssignment;
