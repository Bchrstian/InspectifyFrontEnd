import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    console.log("Logging out...");

    // Clear the token from cookies
    Cookies.remove("token");
    console.log("Token removed from cookies");

    // Redirect to the login page
    navigate("/login");
    console.log("Navigated to login page");
  };

  return { logout };
}
