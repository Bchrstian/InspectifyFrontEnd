import axios from "axios";

const BASE_URL = "http://localhost:8081/api/cohorts";

const cohortService = {
  saveCohort: async (cohort) => {
    try {
      const response = await axios.post(`${BASE_URL}/save`, cohort);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  updateCohort: async (cohortId, updatedCohort) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/update/${cohortId}`,
        updatedCohort
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteCohort: async (cohortId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete/${cohortId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  findCohortById: async (cohortId) => {
    try {
      const response = await axios.get(`${BASE_URL}/findById/${cohortId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  findAllCohorts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/findAll`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  cohortExistsByName: async (cohortName) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/findByName/${encodeURIComponent(cohortName)}`
      );
      return response.data.exists;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default cohortService;
