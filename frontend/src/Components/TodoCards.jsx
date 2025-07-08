import axios from "axios";

function TodoCard({ todo, fetchTodos }) {
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/todos/${todo._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTodos();
  };

  const handleToggle = async () => {
    await axios.put(
      `http://localhost:5000/api/todos/${todo._id}`,
      { completed: !todo.completed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTodos();
  };

  return (
    <div className="border p-3 flex justify-between items-center rounded shadow">
      <div>
        <h3 className="font-semibold">{todo.title}</h3>
        <p className="text-sm">{todo.description}</p>
        <p className="text-xs text-gray-500">
          Status: {todo.completed ? "✅ Done" : "❌ Pending"}
        </p>
      </div>
      <div className="space-x-2">
        <button onClick={handleToggle} className="text-sm bg-yellow-400 p-1 px-2 rounded">
          Mark as a completed
        </button>
        <button onClick={handleDelete} className="text-sm bg-red-500 text-white p-1 px-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
