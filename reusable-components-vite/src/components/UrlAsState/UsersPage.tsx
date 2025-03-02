import React from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: e.target.value });
  };

  return (
    <div>
      <h2>Users List</h2>
      <input
        type="text"
        placeholder="Search users.."
        value={searchQuery}
        onChange={handleSearchChange}
      ></input>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
