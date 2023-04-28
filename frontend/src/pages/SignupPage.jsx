import { useSelector } from "react-redux";
import { Signup } from "../components"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignupScreen = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Signup />
    </div>
  );
}

export default SignupScreen