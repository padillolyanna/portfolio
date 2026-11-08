export default function CRMDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[11px] text-gray-800">CRM Pipeline</span>
        <span className="text-[9px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">24 Leads</span>
      </div>

      {/* Pipeline Kanban */}
      <div className="flex gap-1.5 mb-2 overflow-hidden">
        {[
          { stage: "Leads", count: 8, color: "bg-gray-100", textColor: "text-gray-600", items: ["BizCorp", "StartupX"] },
          { stage: "Contact", count: 7, color: "bg-blue-50", textColor: "text-blue-600", items: ["TechCo", "RetailPH"] },
          { stage: "Proposal", count: 5, color: "bg-yellow-50", textColor: "text-yellow-600", items: ["SME Group"] },
          { stage: "Won", count: 4, color: "bg-green-50", textColor: "text-green-600", items: ["Acme Inc"] },
        ].map((col, i) => (
          <div key={i} className="flex-1 min-w-0">
            <div className={`${col.color} rounded-t-md px-1.5 py-1 flex items-center justify-between`}>
              <span className={`text-[7px] font-semibold ${col.textColor}`}>{col.stage}</span>
              <span className="text-[7px] text-gray-400">{col.count}</span>
            </div>
            <div className="bg-gray-50 rounded-b-md p-1 space-y-0.5 min-h-[40px]">
              {col.items.map((item, j) => (
                <div key={j} className="bg-white rounded px-1 py-0.5 shadow-sm">
                  <span className="text-[7px] text-gray-600 truncate block">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Recent Activity</div>
        {[
          { name: "BizCorp", action: "Call scheduled", time: "2h ago" },
          { name: "TechCo", action: "Proposal sent", time: "5h ago" },
          { name: "Acme Inc", action: "Deal closed", time: "1d ago" },
        ].map((act, i) => (
          <div key={i} className="flex items-center gap-1.5 py-0.5 border-b border-gray-50 last:border-0">
            <div className="w-3 h-3 bg-indigo-200 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-[7px] font-medium text-gray-700">{act.name}</span>
              <span className="text-[7px] text-gray-400"> — {act.action}</span>
            </div>
            <span className="text-[6px] text-gray-400 flex-shrink-0">{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
