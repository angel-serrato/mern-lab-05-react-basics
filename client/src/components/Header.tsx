import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-gray-900">
            Users
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/users"
              className="text-gray-600 hover:text-gray-900 transition text-sm font-medium"
            >
              View All
            </Link>
            <Link
              to="/users/new"
              className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition"
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
