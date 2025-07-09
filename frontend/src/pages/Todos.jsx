import { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "../Components/TodoCards";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Total from "../Components/Tasks/Total";
import Completed from "../Components/Tasks/Completed";
import Remaining from "../Components/Tasks/Remaining";


function Todos() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  const fetchTodos = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTodos(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/todos", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setForm({ title: "", description: "" });
    fetchTodos();
  };

    const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
 



  useEffect(() => {
    if(!isLoggedIn){
        navigate("/login")
    }
    fetchTodos();
  }, []);

  return (
   <div className="main">
    <Header/>
    <div className="tasks flex justify-evenly mt-10">
    <Total />
    <Completed/>
    <Remaining/>
    </div>     <div className="container gap-5 flex m-auto  mt-10 h-screen tasks-container shadow">
      <div className="task-left shadow rounded border-1 border-gray-200 bg-white p-8 w-200">
        <h1 className="text-xl font-bold">Today's Tasks</h1>
<h6 className="text-sm text-gray-400">Managed your daily routine and stay focused</h6>
<div className="task lists mt-7 flex gap-3 flex-col">
   {todos.map((todo) => (
    <TodoCard key={todo._id} todo={todo} fetchTodos={fetchTodos} />
  ))}
</div>
      </div>
      <div className="task-right bg-white flex  text-start p-10 flex-col rounded border-1 border-gray-200 shadow w-120">
<h1 className="text-xl font-bold">Add New Task</h1>
<h6 className="text-sm text-gray-400">Create a new task for daily routine</h6>
<div className="task-form mt-6 ">
  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
    <div className="title flex flex-col gap-1">
      <label htmlFor="title">Task Title</label>
      <input 
      type="text" 
      name="title" 
      id="title"
      className="shadow rounded p-3 outline-none border-1 border-gray-200"
      placeholder="Enter Task Title"
      value={form.title}
      onChange={(e)=>setForm({...form,title:e.target.value})}
      />
    </div>
    <div className="des flex flex-col gap-1">
      <label htmlFor="des">Task Description</label>
      <textarea 
      name="des" 
      id="des"
      className="shadow rounded p-3 outline-none border-1 border-gray-200"
      placeholder="Add task description..."
        value={form.description}
      onChange={(e)=>setForm({...form,description:e.target.value})}
      >
      </textarea>
    </div>
    <button type="submit" className="bg-black text-white rounded-lg font-bold cursor-pointer py-2">Add Task</button>
  </form>
</div>
      </div>
    </div>
   </div>
  );
}

export default Todos;
