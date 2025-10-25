"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookRoomPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", roomType: "", message: "" });
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-blue-700 mb-6 text-center"
        >
          Book a Room
        </motion.h1>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="CNIC Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Room Type</option>

              <option value="Double Sharing">Double Sharing</option>
              <option value="Triple Sharing">Fourth Sharing</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Price"
              value={form.phone}
              onChange={handleChange}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="Additional Message (optional)"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-green-600 font-semibold text-lg"
          >
            🎉 Your booking request has been submitted successfully!
            <br />
            We will contact you shortly.
          </motion.div>
        )}
      </div>
    </div>
  );
}
