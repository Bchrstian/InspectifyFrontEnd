import { Link } from "react-router-dom";

const LoginLink = () => {
  return (
    <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
      Already have an account? Log in
    </Link>
  );
};

export default LoginLink;
