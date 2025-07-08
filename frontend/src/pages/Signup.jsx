import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { User,Mail,Lock,Facebook,Linkedin } from 'lucide-react';

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/signup", form);
    localStorage.setItem("token", res.data.token);
    alert("signup Successfull")
    navigate("/login");
  };

  return (
   <div className="main w-screen h-screen flex p-0 overflow-hidden">
    <div className="left w-142 h-screen flex flex-col justify-center text-center">
      <h1 className="text-5xl text-white font-bold">Welcome back</h1>
      <p className="text-white ">To keep connect with us please <br /> login with your personal info</p>
      <Link to="/login" className="login text-center rounded-4xl">SIGN IN</Link>
    </div>
    <div className="right bg-white w-200 flex flex-col justify-center text-center">
      <div className="content flex flex-col gap-7">
        <h1 className="text-5xl font-bold ">Create Account</h1>
        <div className="social-log flex gap-15 ">
         <Facebook className=" icon border rounded-2xl w-10 h-10 "/>
         
         <Linkedin className=" icon border rounded-2xl w-10 h-10"/>
         <Linkedin className=" icon border rounded-2xl w-10 h-10"/>
        
         
        </div>
        <h4 className="text-gray-400">or use your email for registration </h4>
      </div>
      <div className="form p-10 w-100 h-screen text-center ">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="username relative">
            <label htmlFor="username" className="absolute top-2 left-7"><User /></label>
            <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="Name"
            className="bg-gray-200 rounded w-90 "
            value={form.username}
            onChange={(e)=>{setForm({...form,username:e.target.value})}}
            required
            />
            
          </div>
          <div className="email relative">
            <label htmlFor="email"  className="absolute top-2 left-7"> <Mail/></label>
            <input 
            type="text" 
            name="email" 
            id="email"
            placeholder="Email"
            className="bg-gray-200 rounded w-90"
             value={form.email}
            onChange={(e)=>{setForm({...form,email:e.target.value})}}
            required
            />
          </div>
          <div className="password relative">
            <label htmlFor="password"  className="absolute top-2 left-7"> <Lock/></label>
            <input 
            type="text" 
            name="password" 
            id="password"
            placeholder="Password"
            className="bg-gray-200 rounded w-90"
             value={form.password}
            onChange={(e)=>{setForm({...form,password:e.target.value})}}
            required
            />
          </div>
<button type="submit" className=" text-xl w-50  text-white cursor-pointer rounded-4xl p-10">SIGN UP</button>
        </form>
      </div>
    </div>


   </div>
  );
}

export default Signup;
