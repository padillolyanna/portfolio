export default function InventoryDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-[11px] text-gray-800">Inventory</span>
        <span className="text-[9px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">3 Low Stock</span>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        <div className="bg-gray-50 rounded-md p-1.5 text-center">
          <div className="font-bold text-gray-800 text-[11px]">248</div>
          <div className="text-[7px] text-gray-500">Products</div>
        </div>
        <div className="bg-green-50 rounded-md p-1.5 text-center">
          <div className="font-bold text-green-600 text-[11px]">194</div>
          <div className="text-[7px] text-gray-500">In Stock</div>
        </div>
        <div className="bg-red-50 rounded-md p-1.5 text-center">
          <div className="font-bold text-red-500 text-[11px]">12</div>
          <div className="text-[7px] text-gray-500">Out</div>
        </div>
      </div>

      {/* Product Table */}
      <div className="mb-2">
        <div className="text-[8px] text-gray-500 mb-1">Product Stock Levels</div>
        <div className="bg-gray-50 rounded-md overflow-hidden">
          <div className="grid grid-cols-3 gap-0 px-2 py-1 border-b border-gray-100">
            <span className="text-[7px] text-gray-400 font-medium">SKU</span>
            <span className="text-[7px] text-gray-400 font-medium">Item</span>
            <span className="text-[7px] text-gray-400 font-medium text-right">Stock</span>
          </div>
          {[
            { sku: "INV-001", name: "Product A", qty: 142, status: "ok" },
            { sku: "INV-002", name: "Product B", qty: 8, status: "low" },
            { sku: "INV-003", name: "Product C", qty: 0, status: "out" },
            { sku: "INV-004", name: "Product D", qty: 56, status: "ok" },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-3 gap-0 px-2 py-0.5 border-b border-gray-100 last:border-0">
              <span className="text-[7px] text-gray-500">{item.sku}</span>
              <span className="text-[7px] text-gray-700">{item.name}</span>
              <span className={`text-[7px] font-medium text-right ${
                item.status === "ok" ? "text-green-600" : item.status === "low" ? "text-orange-500" : "text-red-500"
              }`}>
                {item.qty === 0 ? "Out" : item.qty}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stock bar indicators */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Category Distribution</div>
        {[
          { name: "Electronics", pct: 70 },
          { name: "Clothing", pct: 45 },
          { name: "Food", pct: 85 },
        ].map((cat, i) => (
          <div key={i} className="flex items-center gap-1.5 mb-1">
            <span className="text-[7px] text-gray-500 w-14 truncate">{cat.name}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-1.5">
              <div
                className="bg-blue-400 h-full rounded-full"
                style={{ width: `${cat.pct}%` }}
              />
            </div>
            <span className="text-[7px] text-gray-500">{cat.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
