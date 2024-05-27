import styled from "styled-components";
import { HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

const AssignmentName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

function StudentRow({
  student: {
    id: studentId,
    assignmentName,
    course,
    deadlineDate,
    status,
    grade,
  },
}) {
  const navigate = useNavigate();

  const statusToTagName = {
    pending: "blue",
    completed: "green",
    overdue: "red",
  };

  return (
    <Table.Row>
      <AssignmentName>{assignmentName}</AssignmentName>

      <Stacked>
        <span>{course}</span>
      </Stacked>

      <Stacked>
        <span>{new Date(deadlineDate).toLocaleDateString()}</span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status}</Tag>

      <div>{grade}</div>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={studentId} />
          <Menus.List id={studentId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/assignments/${studentId}`)}
            >
              See details
            </Menus.Button>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete assignment</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="assignment"
            onConfirm={() => console.log(`Delete assignment ${studentId}`)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default StudentRow;
