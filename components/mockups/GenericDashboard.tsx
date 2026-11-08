export default function GenericDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden flex">
      {/* Sidebar stub */}
      <div className="w-8 bg-gray-800 rounded-l-md flex flex-col items-center py-2 gap-2 flex-shrink-0">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-4 h-1.5 rounded-sm ${i === 0 ? "bg-blue-400" : "bg-gray-600"}`} />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-2 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-[11px] text-gray-800">Dashboard</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-1 mb-2">
          {[
            { label: "Records", val: "1,248", color: "bg-blue-50 text-blue-600" },
            { label: "Active", val: "342", color: "bg-green-50 text-green-600" },
            { label: "Reports", val: "18", color: "bg-purple-50 text-purple-600" },
          ].map((kpi, i) => (
            <div key={i} className={`${kpi.color.split(" ")[0]} rounded-md p-1.5`}>
              <div className={`font-bold text-[10px] ${kpi.color.split(" ")[1]}`}>{kpi.val}</div>
              <div className="text-[7px] text-gray-500">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Table stub */}
        <div>
          <div className="text-[8px] text-gray-500 mb-1">Recent Records</div>
          <div className="bg-gray-50 rounded-md overflow-hidden">
            <div className="grid grid-cols-3 px-1.5 py-1 border-b border-gray-100">
              <span className="text-[6px] text-gray-400">ID</span>
              <span className="text-[6px] text-gray-400">Name</span>
              <span className="text-[6px] text-gray-400 text-right">Status</span>
            </div>
            {[
              { id: "001", name: "Record Alpha", status: "Active" },
              { id: "002", name: "Record Beta", status: "Pending" },
              { id: "003", name: "Record Gamma", status: "Active" },
              { id: "004", name: "Record Delta", status: "Inactive" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-1.5 py-0.5 border-b border-gray-100 last:border-0">
                <span className="text-[7px] text-gray-400">{row.id}</span>
                <span className="text-[7px] text-gray-600 truncate">{row.name}</span>
                <span className={`text-[6px] text-right ${
                  row.status === "Active"
                    ? "text-green-600"
                    : row.status === "Pending"
                    ? "text-yellow-600"
                    : "text-gray-400"
                }`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
