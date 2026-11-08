export default function ProjectDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[11px] text-gray-800">Projects</span>
        <span className="text-[9px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">6 Active</span>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-1 mb-2">
        {[
          { col: "To Do", items: ["Write brief", "Research"], color: "bg-gray-100" },
          { col: "In Progress", items: ["UI Design", "API Setup"], color: "bg-blue-50" },
          { col: "Done", items: ["Wireframes", "DB schema"], color: "bg-green-50" },
        ].map((col, i) => (
          <div key={i} className="flex-1">
            <div className={`${col.color} rounded-t-md px-1 py-0.5`}>
              <span className="text-[7px] font-semibold text-gray-600">{col.col}</span>
            </div>
            <div className="bg-gray-50 rounded-b-md p-0.5 space-y-0.5 min-h-[36px]">
              {col.items.map((task, j) => (
                <div key={j} className="bg-white rounded px-1 py-0.5 shadow-sm">
                  <span className="text-[7px] text-gray-600 truncate block">{task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects List */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Active Projects</div>
        {[
          { name: "Portfolio Website", progress: 80, due: "Nov 15" },
          { name: "Inventory System", progress: 55, due: "Nov 28" },
          { name: "Mobile App v2", progress: 30, due: "Dec 10" },
        ].map((proj, i) => (
          <div key={i} className="mb-1.5">
            <div className="flex justify-between mb-0.5">
              <span className="text-[7px] font-medium text-gray-700">{proj.name}</span>
              <span className="text-[6px] text-gray-400">Due {proj.due}</span>
            </div>
            <div className="bg-gray-100 rounded-full h-1.5">
              <div
                className="bg-violet-400 h-full rounded-full"
                style={{ width: `${proj.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
