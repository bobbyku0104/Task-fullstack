import { useState } from "react";

function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (!task) return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager 📝</h1>

      {/* Input */}
      <div className="flex gap-2 max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-3 rounded-lg text-black"
        />

        <button
          onClick={addTask}
          className="bg-green-500 px-4 rounded-lg font-semibold hover:bg-green-600"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <div className="max-w-md mx-auto space-y-3">
        {tasks.length === 0 && (
          <p className="text-center text-gray-400">No tasks yet 😴</p>
        )}

        {tasks.map((t) => (
          <div
            key={t.id}
            className="bg-white text-black p-3 rounded-lg flex justify-between items-center"
          >
            <span>{t.text}</span>

            <button
              onClick={() => deleteTask(t.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
