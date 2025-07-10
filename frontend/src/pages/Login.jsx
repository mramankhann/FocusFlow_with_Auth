import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Facebook, Linkedin,Instagram } from 'lucide-react';

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // reset error

    try {
      const res = await axios.post("https://focusflow-suyy.onrender.com/api/auth/login", form);
      localStorage.setItem('token', res.data.token);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid email or password");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="log-main w-screen h-screen flex p-0 overflow-auto">
        <div className="right bg-white w-200 h-full flex flex-col justify-center text-center">
          <div className="content flex flex-col gap-7">
            <h1 className="text-5xl font-bold relative">Welcome to FocusFlow</h1>
            <div className="social-log flex gap-15">
              <Facebook className="icon border rounded-2xl w-10 h-10" />
              <Linkedin className="icon border rounded-2xl w-10 h-10" />
              <Instagram className="icon border rounded-2xl w-10 h-10" />
            </div>
            <h4 className="text-gray-400">or use your email for Login</h4>
          </div>

          <div className="form p-10 w-100 h-screen text-center">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="text-red-600 font-semibold">{errorMessage}</div>
              )}

              <div className="email relative">
                <label htmlFor="email" className="absolute top-2 left-7"><Mail /></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="bg-gray-200 rounded w-90"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="password relative">
                <label htmlFor="password" className="absolute top-2 left-7"><Lock /></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-200 rounded w-90"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="text-xl w-50 text-white bg-black cursor-pointer rounded-4xl p-10"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>

        <div className="left w-142  flex flex-col h-full justify-center text-center">
          <h1 className="text-5xl text-white font-bold">Hello 🖐</h1>
          <p className="text-white">
            Welcome to myTodos Journey <br /> Enter Your Details and create an account
          </p>
          <Link to="/signup" className="login text-center rounded-4xl">SIGN UP</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
