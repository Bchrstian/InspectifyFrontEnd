import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Adjust the host URL if needed
const API_BASE_URL = "http://localhost:8081/api";

export const useSaveStudent = () => {
  const saveStudent = useMutation(async (student) => {
    const response = await axios.post(
      `${API_BASE_URL}/students/saveStudent`,
      student
    );
    return response.data;
  });

  const checkCohortExistence = async (cohortName) => {
    const response = await axios.get(
      `${API_BASE_URL}/cohorts/findByName/${cohortName}`
    );
    return response.data.exists; // Assuming the response has an 'exists' field
  };

  return {
    saveStudent: saveStudent.mutateAsync,
    isLoading: saveStudent.isLoading,
    checkCohortExistence,
  };
};
