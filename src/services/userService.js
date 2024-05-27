import axios from "axios";

const API_URL = "http://localhost:8081/api/users/saveUser";

const userService = {
  saveUser: async (user) => {
    try {
      const response = await axios.post(`${API_URL}/saveUser`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("There was an error saving the user!", error);
      throw error;
    }
  },
};

export default userService;
