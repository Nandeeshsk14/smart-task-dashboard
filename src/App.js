import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Dashboard from "./components/Dashboard";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [sortByDate, setSortByDate] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: "To Do" }]);
  };

  const updateTask = (updated) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const changeStatus = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  let filtered = tasks
    .filter((t) => filterStatus === "All" || t.status === filterStatus)
    .filter((t) => filterPriority === "All" || t.priority === filterPriority);

  if (sortByDate) {
    filtered = [...filtered].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Smart Task Dashboard
      </h1>
      <Dashboard tasks={tasks} />
      <TaskForm onAdd={addTask} onUpdate={updateTask} editingTask={editingTask} />
      <FilterBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        sortByDate={sortByDate}
        setSortByDate={setSortByDate}
      />
      <TaskList
        tasks={filtered}
        onDelete={deleteTask}
        onStatusChange={changeStatus}
        onEdit={setEditingTask}
      />
    </div>
  );
}

export default App;