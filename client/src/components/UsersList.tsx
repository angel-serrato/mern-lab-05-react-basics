import { Link } from "react-router-dom";

function UsersList() {
  const users: any[] = [];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Users</h1>
          <p className="text-gray-600">Manage and organize your users</p>
        </div>

        {users.length > 0 ? (
          <div className="overflow-hidden border border-gray-200 rounded">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Edit
                      </button>
                      <button className="text-sm font-medium text-red-600 hover:text-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 border border-gray-200 rounded">
            <p className="text-gray-600 mb-4">No users found</p>
            <Link
              to="/users/new"
              className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition"
            >
              Create User
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersList;
