import { useSelector } from "react-redux";
import { Login } from "../components"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginScreen