export default function BookingDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 font-sans text-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[11px] text-gray-800">Bookings</span>
        <span className="text-[9px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Nov 2026</span>
      </div>

      {/* Mini Calendar */}
      <div className="mb-2">
        <div className="text-[8px] text-gray-500 mb-1">Calendar View</div>
        <div className="bg-gray-50 rounded-md p-1.5">
          <div className="grid grid-cols-7 gap-0.5 mb-0.5">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={i} className="text-center text-[6px] text-gray-400 font-medium">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-0.5">
            {[...Array(30)].map((_, i) => {
              const day = i + 1;
              const hasBooking = [3, 7, 10, 14, 18, 21, 24].includes(day);
              const isToday = day === 8;
              return (
                <div
                  key={i}
                  className={`text-center text-[7px] rounded py-0.5 ${
                    isToday
                      ? "bg-blue-500 text-white font-bold"
                      : hasBooking
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <div className="text-[8px] text-gray-500 mb-1">Upcoming Appointments</div>
        {[
          { time: "9:00 AM", name: "Juan dela Cruz", service: "Consultation", status: "Confirmed" },
          { time: "11:30 AM", name: "Maria Santos", service: "Follow-up", status: "Pending" },
          { time: "2:00 PM", name: "Alex Reyes", service: "Initial Visit", status: "Confirmed" },
        ].map((appt, i) => (
          <div key={i} className="flex items-center gap-1.5 py-0.5 border-b border-gray-50 last:border-0">
            <span className="text-[7px] text-blue-600 font-medium w-10 flex-shrink-0">{appt.time}</span>
            <div className="flex-1 min-w-0">
              <div className="text-[7px] font-medium text-gray-700 truncate">{appt.name}</div>
              <div className="text-[6px] text-gray-400">{appt.service}</div>
            </div>
            <span className={`text-[6px] px-1 py-0.5 rounded-full flex-shrink-0 ${
              appt.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
            }`}>
              {appt.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
