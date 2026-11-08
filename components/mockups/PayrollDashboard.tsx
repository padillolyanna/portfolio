export default function PayrollDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[11px] text-gray-800">Payroll</span>
        <span className="text-[9px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Nov 2026</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        <div className="bg-teal-50 rounded-md p-1.5">
          <div className="text-[7px] text-gray-500">Total Payout</div>
          <div className="font-bold text-teal-600 text-[11px]">₱842,500</div>
          <div className="text-[6px] text-gray-400">48 employees</div>
        </div>
        <div className="bg-orange-50 rounded-md p-1.5">
          <div className="text-[7px] text-gray-500">Deductions</div>
          <div className="font-bold text-orange-600 text-[11px]">₱126,375</div>
          <div className="text-[6px] text-gray-400">SSS, PhilHealth, etc.</div>
        </div>
      </div>

      {/* Payroll Table */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Payslip Summary</div>
        <div className="bg-gray-50 rounded-md overflow-hidden">
          <div className="grid grid-cols-4 px-1.5 py-1 border-b border-gray-100">
            <span className="text-[6px] text-gray-400 col-span-2">Employee</span>
            <span className="text-[6px] text-gray-400 text-right">Gross</span>
            <span className="text-[6px] text-gray-400 text-right">Net</span>
          </div>
          {[
            { name: "Ana Reyes", gross: "₱25,000", net: "₱21,250" },
            { name: "Rico Santos", gross: "₱35,000", net: "₱29,750" },
            { name: "Mia Cruz", gross: "₱18,000", net: "₱15,300" },
            { name: "Jay Dela", gross: "₱22,000", net: "₱18,700" },
          ].map((emp, i) => (
            <div key={i} className="grid grid-cols-4 px-1.5 py-0.5 border-b border-gray-100 last:border-0">
              <span className="text-[7px] text-gray-600 col-span-2 truncate">{emp.name}</span>
              <span className="text-[7px] text-gray-500 text-right">{emp.gross}</span>
              <span className="text-[7px] font-medium text-teal-600 text-right">{emp.net}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="mt-2 flex items-center gap-1.5">
        <div className="flex-1 bg-gray-100 rounded-full h-1.5">
          <div className="bg-teal-400 h-full rounded-full" style={{ width: "75%" }} />
        </div>
        <span className="text-[7px] text-gray-500">75% processed</span>
      </div>
    </div>
  );
}
