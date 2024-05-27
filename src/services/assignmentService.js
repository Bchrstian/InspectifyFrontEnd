import api from "../api/axios";

export const getAllAssignments = async () => {
  const response = await api.get("/assignments/findAll");
  return response.data;
};

export const getAssignmentById = async (assignmentId) => {
  const response = await api.get(`/assignments/findById/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (assignment) => {
  const response = await api.post("/assignments/save", assignment);
  return response.data;
};

export const updateAssignment = async (assignmentId, updatedAssignment) => {
  const response = await api.put(
    `/assignments/update/${assignmentId}`,
    updatedAssignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await api.delete(`/assignments/delete/${assignmentId}`);
  return response.data;
};
