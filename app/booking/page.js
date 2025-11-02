"use client";
import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guest: "",
    type_of_eating: "",
    special_request: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value =
      e.target.name === "guest" ? Number(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("/booking/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Booking successful! The owner has been notified.");
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guest: 1,
          type_of_eating: "",
          special_request: "",
        });
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      setMessage(`Network error: ${err.message}`);
    }
  };

  // Helper to generate time options
  const generateTimeOptions = () => {
    const options = [];
    const now = new Date();
    const selectedDate = form.date ? new Date(form.date) : null;

    for (let h = 7; h <= 23; h++) {
      for (let m = 0; m < 60; m += 15) {
        const timeStr = `${h.toString().padStart(2, "0")}:${m
          .toString()
          .padStart(2, "0")}`;
        let disabled = false;

        if (selectedDate) {
          const optionDateTime = new Date(`${form.date}T${timeStr}`);
          if (optionDateTime < now) disabled = true;
        }

        options.push(
          <option key={timeStr} value={timeStr} disabled={disabled}>
            {timeStr}
          </option>
        );
      }
    }
    return options;
  };

  return (
    <div
      className="bg-primary-700"
      style={{
        // backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div className="bg-white/90 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Book a Table
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            name="phone"
            placeholder="Phone "
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]} // cannot select past dates
              className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="flex-1 p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a time</option>
              {generateTimeOptions()}
            </select>
          </div>

          <input
            type="number"
            name="guest"
            min="1"
            value={form.guest}
            onChange={handleChange}
            required
            placeholder="Number of guests"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            name="type_of_eating"
            value={form.type_of_eating}
            onChange={handleChange}
            required
            className="w-full bg-white p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select type of eating </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Brunch">Brunch</option>
            <option value="Pizzeria">Pizzeria</option>
          </select>

          <textarea
            name="special_request"
            placeholder="Any special request?"
            value={form.special_request}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-gray-700 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
