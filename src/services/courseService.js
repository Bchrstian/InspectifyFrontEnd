import axios from "axios";

const BASE_URL = "http://localhost:8081/api/courses";

const courseService = {
  saveCourse: async (course) => {
    try {
      const response = await axios.post(`${BASE_URL}/saveCourse`, course);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  updateCourse: async (courseId, updatedCourse) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/updateCourse/${courseId}`,
        updatedCourse
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteCourse: async (courseId) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/deleteCourse/${courseId}`
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  findCourseById: async (courseId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${courseId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  findAllCourses: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/all`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default courseService;
