"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-3xl font-bold text-center mb-6">
          Student Login
        </h2>

        <form className="space-y-4">

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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Login
          </button>

          <p className="text-center mt-2 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-semibold hover:underline">
              Register here
            </a>
          </p>
          
        </form>

      </div>
    </div>
  );
}
