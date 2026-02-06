import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
            Manage your users efficiently
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A simple and clean interface to organize and manage all your users
            in one place. Create, view, and manage user accounts with ease.
          </p>
          <div className="flex gap-4 pt-8">
            <Link
              to="/users/new"
              className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
            >
              Create User
            </Link>
            <Link
              to="/users"
              className="border border-gray-300 text-gray-900 px-6 py-3 rounded font-medium hover:bg-gray-50 transition"
            >
              View Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
