import React, { useEffect, useState } from "react";
import UsersTable from "../components/UsersTable";
import UserService from "../services/user.service";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getUsers();
        setUsers(response);
      } catch (error) {
        setError("Failed to fetch Users");
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="text-white bg-[#181d25]">
      <h1 className="text-2xl text-center mt-2 font-bold">Manage Users</h1>
      <UsersTable
        data={users.map((user) => ({
          name: user.name,
          email: user.email,
          status: user.status,
          subscribe: user.subscribe,
          role: user.role,
        }))}
      />
    </div>
  );
}
