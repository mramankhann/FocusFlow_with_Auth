import { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "../Components/TodoCards";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

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
    <div className="p-4 max-w-lg mx-auto">
   <Header/>
      <h2 className="text-xl font-bold mb-4">Your Todos</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2"
        />
        <button className="bg-blue-600 text-white p-2 rounded">Add Todo</button>
      </form>

      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoCard key={todo._id} todo={todo} fetchTodos={fetchTodos} />
        ))}


      </div>
    </div>
  );
}

export default Todos;
