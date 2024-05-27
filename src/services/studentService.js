import axios from "axios";

const API_URL = "http://localhost:8081/api/students"; // Replace with your actual backend URL

const studentService = {
  // Save a student
  saveStudent: async (student, cohortId) => {
    try {
      const response = await axios.post(
        `${API_URL}/saveStudent?cohortId=${cohortId}`,
        student,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error saving the student!", error);
      throw error;
    }
  },

  // Update a student
  updateStudent: async (studentId, student, cohortId) => {
    try {
      const response = await axios.put(
        `${API_URL}/updateStudent/${studentId}?cohortId=${cohortId}`,
        student,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error updating the student!", error);
      throw error;
    }
  },

  // Delete a student
  deleteStudent: async (studentId) => {
    try {
      const response = await axios.delete(
        `${API_URL}/deleteStudent/${studentId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error deleting the student!", error);
      throw error;
    }
  },

  // Find student by ID
  findStudentById: async (studentId) => {
    try {
      const response = await axios.get(
        `${API_URL}/findStudentById/${studentId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error finding the student!", error);
      throw error;
    }
  },

  // Find all students
  findAllStudents: async () => {
    try {
      const response = await axios.get(`${API_URL}/findAllStudents`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("There was an error finding all students!", error);
      throw error;
    }
  },
};

export default studentService;
