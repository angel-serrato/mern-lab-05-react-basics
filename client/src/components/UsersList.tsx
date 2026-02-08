import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUser.js";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal.js";
import toast from "react-hot-toast";

function UsersList() {
  const { users, loading, error, deactivateUser } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleDeactivate = async (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const handleConfirmDeactivate = async () => {
    if (!selectedUserId) return;

    try {
      setIsDeactivating(true);
      await deactivateUser(selectedUserId);
      toast.success("User deactivated successfully!");
      setIsModalOpen(false);
      setSelectedUserId(null);
    } catch (error) {
      toast.error("Error deactivating user.");
    } finally {
      setIsDeactivating(false);
    }
  };

  const handleCancelDeactivate = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
            <p className="text-gray-600 mt-4">Loading users...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="border border-red-200 bg-red-50 rounded p-6 max-w-md">
            <h3 className="text-red-900 font-semibold mb-2">
              Error Loading Users
            </h3>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

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
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user: any) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded text-white text-xs font-medium ${user.isActive ? "bg-green-600" : "bg-gray-400"}`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Link
                        to={`/users/${user._id}/edit`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeactivate(user._id)}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                      >
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
      <ConfirmModal
        isOpen={isModalOpen}
        title="Confirm Deactivation"
        onConfirm={handleConfirmDeactivate}
        onCancel={handleCancelDeactivate}
        isLoading={isDeactivating}
        message="Are you sure you want to deactivate this user?"
      />
    </div>
  );
}

export default UsersList;
