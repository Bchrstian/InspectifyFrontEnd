import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

export function useLogin() {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post(
        "http://localhost:8081/api/users/login", // Specify the correct base URL and endpoint
        { email, password },
        { headers: { "Content-Type": "application/json" } } // Set Content-Type header
      );
      return response.data;
    },
    onSuccess: (data) => {
      const token = data.token; // Assuming the token is in data.token
      console.log("Token received from API:", token); // Log the token received
      Cookies.set("token", token, { expires: 7 }); // Set token in cookies with a 7-day expiration
      console.log("Token set in cookies:", token); // Log the token when set
      // Redirect to the dashboard after successful login
      window.location.href = "/dashboard";
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error("Invalid credentials");
    },
  });

  return { login, isLoading };
}
