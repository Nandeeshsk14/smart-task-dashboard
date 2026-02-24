export default function FilterBar({ filterStatus, setFilterStatus, filterPriority, setFilterPriority, sortByDate, setSortByDate }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6 bg-white p-3 rounded-xl shadow">
      <select className="border rounded p-2" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option>All</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select className="border rounded p-2" value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
        <option>All</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={sortByDate} onChange={(e) => setSortByDate(e.target.checked)} />
        Sort by Due Date
      </label>
    </div>
  );
}