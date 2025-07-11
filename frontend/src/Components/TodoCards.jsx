import axios from "axios";
import { X } from 'lucide-react';

function TodoCard({ todo, fetchTodos }) {
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    await axios.delete(`https://focusflow-suyy.onrender.com/api/todos/${todo._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTodos();
  };

  const handleToggle = async () => {
    await axios.put(
      `https://focusflow-suyy.onrender.com/api/todos/${todo._id}`,
      { completed: !todo.completed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTodos();
  };

  return (
   <div className="main w-full ">
    <div className="list-container w-full flex flex-col relative shadow border-1 border-gray-200 pb-10 py-2 px-8 w-150 rounded">
     <X className="absolute right-4 top-4 cursor-pointer" onClick={handleDelete} />
      <input onClick={handleToggle} type="checkbox" name="completed" id="complted" className="absolute left-2 top-6 overline-none" />
      <h1 className="text-xl font-bold my-2 max-md:text-lg">{todo.title}</h1>
      <h6 className="text-sm text-gray-400 max-md:text-xs">{todo.description}</h6>
    </div>
   </div>
  );
}

export default TodoCard;
