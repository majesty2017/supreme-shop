import { useState } from "react";
import { Checkbox, Input } from "../";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account!
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              type="email"
              autoComplete="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              isPassword={true}
            />

            <div className={`${styles.noramlFlex} justify-between`}>
              <Checkbox label="Remember me" name="remember-me" />
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 
                border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Login
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full gap-4`}>
              <h4>Don't have an account?</h4>
              <Link to="/sign-up" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
