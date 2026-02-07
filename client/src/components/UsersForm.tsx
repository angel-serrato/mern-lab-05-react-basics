import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUser.js";
import * as userApi from "../api/resource.api.js";
import toast from "react-hot-toast";

function UsersForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const { createUser, updateUser, error } = useUsers();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchUser = async () => {
        try {
          const response = await userApi.getUserById(id);
          setName(response.data.name);
          setEmail(response.data.email);
        } catch (err: any) {
          toast.error("Error loading user data");
        }
      };
      fetchUser();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setIsLoading(true);
      if (isEditMode && id) {
        await updateUser(id, { name, email });
        toast.success("User updated successfully!");
      } else {
        await createUser({ name, email });
        toast.success("User created successfully!");
      }
      setName("");
      setEmail("");
      navigate("/users");
    } catch (error: any) {
      toast.error(error.message || "Error saving user.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {isEditMode ? "Edit User" : "Create User"}
          </h1>
          <p className="text-gray-600">
            {isEditMode
              ? "Update user information"
              : "Add a new user to your system"}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-black text-white py-2 rounded font-medium hover:bg-gray-800 transition disabled:bg-gray-600"
            >
              {isLoading
                ? isEditMode
                  ? "Updating..."
                  : "Creating..."
                : isEditMode
                  ? "Update User"
                  : "Create User"}
            </button>
            <button
              type="reset"
              className="flex-1 border border-gray-300 text-gray-900 py-2 rounded font-medium hover:bg-gray-50 transition"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UsersForm;
