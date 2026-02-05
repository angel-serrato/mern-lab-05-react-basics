import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-300 transition"
          >
            Users App
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/users"
              className="text-gray-300 hover:text-white font-medium transition"
            >
              Users
            </Link>
            <Link
              to="/users/new"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Add User
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
