export default function HRDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-[11px] text-gray-800">HR Management</span>
        <span className="text-[9px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">48 Employees</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        <div className="bg-green-50 rounded-md p-1.5 text-center">
          <div className="font-bold text-green-600 text-[11px]">42</div>
          <div className="text-[7px] text-gray-500">Present</div>
        </div>
        <div className="bg-yellow-50 rounded-md p-1.5 text-center">
          <div className="font-bold text-yellow-600 text-[11px]">4</div>
          <div className="text-[7px] text-gray-500">On Leave</div>
        </div>
        <div className="bg-red-50 rounded-md p-1.5 text-center">
          <div className="font-bold text-red-500 text-[11px]">2</div>
          <div className="text-[7px] text-gray-500">Absent</div>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="mb-2">
        <div className="text-[8px] text-gray-500 mb-1">Team Members</div>
        {[
          { name: "Ana Reyes", dept: "Marketing", status: "Present", color: "bg-blue-400" },
          { name: "Rico Santos", dept: "Engineering", status: "Present", color: "bg-green-400" },
          { name: "Mia Cruz", dept: "Design", status: "On Leave", color: "bg-pink-400" },
          { name: "Jay Dela", dept: "Operations", status: "Present", color: "bg-orange-400" },
        ].map((emp, i) => (
          <div key={i} className="flex items-center gap-2 py-0.5 border-b border-gray-50">
            <div className={`w-4 h-4 ${emp.color} rounded-full flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-medium text-gray-700 truncate">{emp.name}</div>
              <div className="text-[7px] text-gray-400">{emp.dept}</div>
            </div>
            <span className={`text-[6px] px-1 py-0.5 rounded-full flex-shrink-0 ${
              emp.status === "Present" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
            }`}>
              {emp.status}
            </span>
          </div>
        ))}
      </div>

      {/* Leave Requests */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Pending Leave Requests</div>
        <div className="bg-yellow-50 rounded-md px-2 py-1 flex justify-between items-center">
          <span className="text-[8px] text-gray-600">Mia Cruz — Vacation Leave</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <div className="w-3 h-3 bg-red-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
