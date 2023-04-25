import { useState } from "react";
import { FileInput, Input } from "..";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate()

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const config = {headers: {"Content-Type": "multipart/form-data"}}
    const form = new FormData()
    form.append('file', avatar)
    form.append('name', name)
    form.append('email', email)
    form.append('password', password)

    axios.post(`${server}/user/create-user`, form, config)
    .then((res)=> {
      toast.success(res.data.message)
      setName("")
      setEmail("")
      setPassword("")
      setAvatar()
      navigate('/')
    }).catch((err) => toast.error(err.response.data.message))
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account!
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              type="text"
              autoComplete="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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

            <FileInput
              alt="avatar"
              visible={true}
              avatar={avatar}
              label="Upload a file"
              name="avatar"
              onChange={handleFileInputChange}
            />

            <div className="">
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 
                border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign up
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full gap-4`}>
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
