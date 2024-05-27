// src/features/authentication/useSignup.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useSignup() {
  const mutation = useMutation(async ({ username, email, password, role }) => {
    const response = await axios.post(
      "http://localhost:8081/api/users/saveUser",
      {
        username,
        email,
        password,
        role,
      }
    );
    console.log(response);
    return response.data;
  });

  return {
    signup: mutation.mutateAsync,
    isLoading: mutation.isLoading,
  };
}
