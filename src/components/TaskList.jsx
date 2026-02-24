import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onDelete, onStatusChange, onEdit }) {
  if (tasks.length === 0) return <p className="text-center text-gray-400 mt-10">No tasks found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} onStatusChange={onStatusChange} onEdit={onEdit} />
      ))}
    </div>
  );
}