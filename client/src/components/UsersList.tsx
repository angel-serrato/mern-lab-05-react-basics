function UsersList() {
  const users: any[] = [];

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                All Users
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Manage and organize your user database
              </p>
            </div>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium w-fit">
              {users.length} users
            </span>
          </div>
        </div>

        {users.length > 0 ? (
          <div>
            <div className="md:hidden space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Name
                      </p>
                      <p className="text-base font-semibold text-gray-900 mt-1">
                        {user.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-sm text-gray-600 mt-1 truncate">
                        {user.email}
                      </p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                        Edit
                      </button>
                      <button className="flex-1 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Email
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
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
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end items-center gap-3">
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition">
                              Edit
                            </button>
                            <button className="text-sm font-medium text-red-600 hover:text-red-700 hover:underline transition">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-4xl sm:text-5xl mb-4">👥</div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              No users found
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Start by creating your first user
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersList;
