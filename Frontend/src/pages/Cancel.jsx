import { useEffect, useState } from "react";
import axios from "axios";

function Cancel() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/cancel");

      if (Array.isArray(res.data)) {
        setBookings(res.data);
      } else {
        console.error("Unexpected data format:", res.data);
        setMessage("Unexpected server response.");
        setBookings([]);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setMessage("Error loading bookings.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?"))
      return;

    try {
      const res = await axios.delete("http://localhost:5000/api/cancel", {
        data: { id },
      });
      setMessage(res.data.message);
      setBookings((prev) => prev.filter((booking) => booking._id !== id));
    } catch (error) {
      console.error("Error cancelling booking:", error);
      setMessage(error.response?.data?.message || "Failed to cancel booking.");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">All Bookings</h2>

      {message && (
        <div className="mb-4 p-3 bg-blue-100 text-blue-800 rounded">
          {message}
        </div>
      )}

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left text-sm uppercase">
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Stylist</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id || Math.random()}
                  className="border-t text-sm"
                >
                  <td className="py-2 px-4">{booking.customerName}</td>
                  <td className="py-2 px-4">{booking.selectedService}</td>
                  <td className="py-2 px-4">{booking.stylist}</td>
                  <td className="py-2 px-4">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">{booking.time}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Cancel;
