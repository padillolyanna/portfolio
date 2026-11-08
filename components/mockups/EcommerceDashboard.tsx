export default function EcommerceDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[11px] text-gray-800">E-Commerce</span>
        <span className="text-[9px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Live</span>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        <div className="bg-purple-50 rounded-md p-1.5">
          <div className="text-[7px] text-gray-500">Today's Sales</div>
          <div className="font-bold text-purple-600 text-[11px]">₱18,450</div>
          <div className="text-[6px] text-purple-400">156 orders</div>
        </div>
        <div className="bg-blue-50 rounded-md p-1.5">
          <div className="text-[7px] text-gray-500">Conversion</div>
          <div className="font-bold text-blue-600 text-[11px]">3.8%</div>
          <div className="text-[6px] text-blue-400">+0.5% vs yesterday</div>
        </div>
      </div>

      {/* Product List (storefront) */}
      <div className="mb-2">
        <div className="text-[8px] text-gray-500 mb-1">Top Products</div>
        <div className="grid grid-cols-3 gap-1">
          {[
            { name: "Shirt", price: "₱599", sold: 42, color: "bg-pink-100" },
            { name: "Cap", price: "₱349", sold: 38, color: "bg-blue-100" },
            { name: "Bag", price: "₱899", sold: 25, color: "bg-green-100" },
          ].map((p, i) => (
            <div key={i} className={`${p.color} rounded-md p-1.5`}>
              <div className="text-[7px] font-medium text-gray-700">{p.name}</div>
              <div className="text-[7px] text-gray-500">{p.price}</div>
              <div className="text-[6px] text-gray-400">{p.sold} sold</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Recent Orders</div>
        {[
          { id: "#1081", item: "Shirt x2", status: "Paid", amt: "₱1,198" },
          { id: "#1080", item: "Cap x1", status: "Shipped", amt: "₱349" },
          { id: "#1079", item: "Bag x1", status: "Pending", amt: "₱899" },
        ].map((order, i) => (
          <div key={i} className="flex items-center gap-1 py-0.5 border-b border-gray-50 last:border-0">
            <span className="text-[7px] text-gray-400 w-7">{order.id}</span>
            <span className="text-[7px] text-gray-600 flex-1 truncate">{order.item}</span>
            <span className={`text-[6px] px-1 py-0.5 rounded-full ${
              order.status === "Paid"
                ? "bg-green-100 text-green-700"
                : order.status === "Shipped"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}>
              {order.status}
            </span>
            <span className="text-[7px] font-medium text-gray-700 w-10 text-right">{order.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
