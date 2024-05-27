import axios from "axios";

const API_URL = "http://localhost:8081/api/instructors"; // Replace with your actual backend URL

const instructorService = {
  // Save an instructor
  saveInstructor: async (instructor) => {
    try {
      const response = await axios.post(
        `${API_URL}/saveInstructor`,
        instructor,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error saving the instructor!", error);
      throw error;
    }
  },

  // Update an instructor
  updateInstructor: async (instructorId, updatedInstructor) => {
    try {
      const response = await axios.put(
        `${API_URL}/updateInstructor/${instructorId}`,
        updatedInstructor,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error updating the instructor!", error);
      throw error;
    }
  },

  // Delete an instructor
  deleteInstructor: async (instructorId) => {
    try {
      const response = await axios.delete(
        `${API_URL}/deleteInstructor/${instructorId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error deleting the instructor!", error);
      throw error;
    }
  },

  // Find instructor by ID
  findInstructorById: async (instructorId) => {
    try {
      const response = await axios.get(
        `${API_URL}/findInstructorById/${instructorId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error finding the instructor!", error);
      throw error;
    }
  },

  // Find all instructors
  findAllInstructors: async () => {
    try {
      const response = await axios.get(`${API_URL}/findAllInstructors`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("There was an error finding all instructors!", error);
      throw error;
    }
  },
};

export default instructorService;
