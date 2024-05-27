// api.js
import axios from "axios";

const baseURL = "http://localhost:8081/api";

export async function signup({ fullName, email, password }) {
  try {
    const response = await axios.post(`${baseURL}/users/saveUser`, {
      fullName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${baseURL}/auth/currentUser`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function logout() {
  try {
    const response = await axios.post(`${baseURL}/auth/logout`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateCurrentUser({ userId, fullName, password }) {
  try {
    const response = await axios.put(`${baseURL}/users/updateUser/${userId}`, {
      fullName,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
