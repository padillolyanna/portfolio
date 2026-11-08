export default function POSDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[11px] text-gray-800">Point of Sale</span>
        <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Open</span>
      </div>

      <div className="flex gap-2 h-[calc(100%-28px)]">
        {/* Product Grid */}
        <div className="flex-1">
          <div className="text-[7px] text-gray-500 mb-1">Products</div>
          <div className="grid grid-cols-2 gap-1">
            {[
              { name: "Latte", price: "₱150", color: "bg-amber-100" },
              { name: "Matcha", price: "₱180", color: "bg-green-100" },
              { name: "Cake", price: "₱120", color: "bg-pink-100" },
              { name: "Sandwich", price: "₱95", color: "bg-yellow-100" },
            ].map((p, i) => (
              <div key={i} className={`${p.color} rounded-md p-1.5 text-center cursor-pointer`}>
                <div className="text-[8px] font-medium text-gray-700">{p.name}</div>
                <div className="text-[7px] text-gray-500">{p.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart / Order */}
        <div className="w-20">
          <div className="text-[7px] text-gray-500 mb-1">Order</div>
          <div className="bg-gray-50 rounded-md p-1.5 h-full flex flex-col">
            {[
              { name: "Latte", qty: 2, sub: "₱300" },
              { name: "Cake", qty: 1, sub: "₱120" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between mb-1">
                <span className="text-[7px] text-gray-600">{item.name} x{item.qty}</span>
                <span className="text-[7px] font-medium">{item.sub}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 mt-auto pt-1">
              <div className="flex justify-between">
                <span className="text-[7px] font-semibold text-gray-700">Total</span>
                <span className="text-[7px] font-bold text-blue-600">₱420</span>
              </div>
              <div className="mt-1 bg-blue-500 text-white text-center rounded py-0.5 text-[7px] font-medium cursor-pointer">
                Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
