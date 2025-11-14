"use client";
import  Link  from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-3xl font-bold text-center mb-6">
          Student Registration
        </h2>

        <form className="space-y-4">

          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="03xx-xxxxxxx"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Select Room Type</label>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose...</option>
              
              
              <option value="double">Double Sharing</option>
              <option value="fourth">Fourth Sharing</option>
              
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Register
          </button>
          <p className="text-center mt-2 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login here
            </a>
          </p>
        </form>

      </div>
    </div>
  );
}
