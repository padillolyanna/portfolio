export default function FinanceDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-[11px] text-gray-800">Finance Overview</span>
        <span className="text-[9px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Nov 2026</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        <div className="bg-green-50 rounded-md p-1.5">
          <div className="text-[8px] text-gray-500">Revenue</div>
          <div className="font-bold text-green-600 text-[10px]">₱2.4M</div>
          <div className="text-[7px] text-green-500">+12%</div>
        </div>
        <div className="bg-red-50 rounded-md p-1.5">
          <div className="text-[8px] text-gray-500">Expenses</div>
          <div className="font-bold text-red-500 text-[10px]">₱980K</div>
          <div className="text-[7px] text-red-400">-5%</div>
        </div>
        <div className="bg-blue-50 rounded-md p-1.5">
          <div className="text-[8px] text-gray-500">Profit</div>
          <div className="font-bold text-blue-600 text-[10px]">₱1.4M</div>
          <div className="text-[7px] text-blue-500">+18%</div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="mb-2">
        <div className="text-[8px] text-gray-500 mb-1">Monthly Revenue</div>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div
                className="w-full rounded-t-sm bg-blue-400"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-0.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="flex-1 text-center text-[7px] text-gray-400">{d}</div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Recent Transactions</div>
        {[
          { name: "Sales – Batch A", amt: "+₱45,000", type: "income" },
          { name: "Office Supplies", amt: "-₱3,200", type: "expense" },
          { name: "Client Payment", amt: "+₱28,500", type: "income" },
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center py-0.5 border-b border-gray-50">
            <span className="text-[8px] text-gray-600 truncate max-w-[100px]">{tx.name}</span>
            <span className={`text-[8px] font-medium ${tx.type === "income" ? "text-green-600" : "text-red-500"}`}>
              {tx.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
