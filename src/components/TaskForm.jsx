import { useState, useEffect } from "react";

export default function TaskForm({ onAdd, onUpdate, editingTask }) {
  const [form, setForm] = useState({ title: "", description: "", priority: "Medium", dueDate: "" });

  useEffect(() => {
    if (editingTask) setForm(editingTask);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.dueDate) return alert("Title and Due Date are required!");
    editingTask ? onUpdate(form) : onAdd(form);
    setForm({ title: "", description: "", priority: "Medium", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
      <input
        className="border rounded p-2 col-span-2"
        placeholder="Task Title *"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        className="border rounded p-2 col-span-2"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <select
        className="border rounded p-2"
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="date"
        className="border rounded p-2"
        value={form.dueDate}
        onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
      />
      <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}