import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { User,Mail,Lock,Facebook,Linkedin,Target } from 'lucide-react';


function login() {

    const [form, setForm] = useState({ email: "", password: "" })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("https://focusflow-udpp.onrender.com/api/auth/login", form)
        localStorage.setItem('token', res.data.token)
        alert("Login Successfull")
        navigate("/")
    }


    return (
        <>
            <div className="main w-screen h-screen flex p-0 overflow-hidden">
   
    <div className="right bg-white w-200 flex flex-col justify-center text-center">
      <div className="content flex flex-col gap-7">
        <h1 className="text-5xl font-bold relative">Welcome to  FocusFlow</h1>
        <div className="social-log flex gap-15 ">
         <Facebook className=" icon border rounded-2xl w-10 h-10 "/>
         
         <Linkedin className=" icon border rounded-2xl w-10 h-10"/>
         <Linkedin className=" icon border rounded-2xl w-10 h-10"/>
        
         
        </div>
        <h4 className="text-gray-400">or use your email for Login </h4>
      </div>
      <div className="form p-10 w-100 h-screen text-center ">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
<button type="submit" className=" text-xl w-50  text-white cursor-pointer rounded-4xl p-10">SIGN IN</button>
        </form>
      </div>
    </div>
     <div className="left w-142 h-screen flex flex-col justify-center text-center">
      <h1 className="text-5xl text-white font-bold">Hello 🖐</h1>
      <p className="text-white ">Welcome to myTodos Journey <br /> Enter Your Details and create a account</p>
      <Link to="/signup" className="login text-center rounded-4xl">SIGN UP</Link>
    </div>


   </div>
        </>
    )
}

export default login
