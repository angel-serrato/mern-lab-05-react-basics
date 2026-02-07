import { useEffect, useState } from "react";
import * as userApi from "../api/resource.api.js";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await userApi.getUsers();
        if (isMounted) {
          setUsers(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchUsers();
    return () => {
      isMounted = false;
    };
  }, []);

  const createUser = async (userData) => {
    try {
      setError(null);
      const response = await userApi.createUser(userData);
      setUsers([...users, response.data]);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const updateUser = async (userId, updateData) => {
    try {
      setError(null);
      const response = await userApi.updateUser(userId, updateData);
      setUsers(
        users.map((user) => (user._id === userId ? response.data : user)),
      );
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const deactivateUser = async (userId) => {
    try {
      setError(null);
      await userApi.deactivateUser(userId);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      throw error;
    }
  };
  return { users, loading, error, createUser, updateUser, deactivateUser };
}
