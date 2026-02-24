export default function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const pending = tasks.filter((t) => t.status !== "Completed").length;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[{ label: "Total", value: total, color: "bg-blue-500" },
        { label: "Completed", value: completed, color: "bg-green-500" },
        { label: "Pending", value: pending, color: "bg-yellow-500" }]
        .map(({ label, value, color }) => (
          <div key={label} className={`${color} text-white rounded-xl p-4 text-center shadow`}>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm mt-1">{label}</p>
          </div>
        ))}
    </div>
  );
}