const priorityColors = { High: "bg-red-100 text-red-700", Medium: "bg-yellow-100 text-yellow-700", Low: "bg-green-100 text-green-700" };
const statusColors = { "To Do": "bg-gray-200", "In Progress": "bg-blue-200", Completed: "bg-green-200" };

export default function TaskCard({ task, onDelete, onStatusChange, onEdit }) {
  return (
    <div className={`rounded-xl p-4 shadow ${statusColors[task.status]}`}>
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {["To Do", "In Progress", "Completed"].map((s) => (
          <button
            key={s}
            onClick={() => onStatusChange(task.id, s)}
            className={`text-xs px-2 py-1 rounded ${task.status === s ? "bg-blue-600 text-white" : "bg-white border"}`}
          >
            {s}
          </button>
        ))}
        <button onClick={() => onEdit(task)} className="text-xs px-2 py-1 rounded bg-yellow-400 text-white ml-auto">Edit</button>
        <button onClick={() => onDelete(task.id)} className="text-xs px-2 py-1 rounded bg-red-500 text-white">Delete</button>
      </div>
    </div>
  );
}