import React, { useState, useEffect } from "react";
import FilterPanel from "./FilterPanel";
import UsersTable from "./UsersTable";
import TopBar from "./TopBar";
import Pagination from "./Pagination";
import AddUserModal from "./AddUserModal";

export default function Workspace() {
  const [query, setQuery] = useState({
    search: "",
    role: "all",
    status: "all",
    sortBy: "name",
    sortOrder: "asc",
    page: 1
  });

  const [users, setUsers] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers([
        { id: 1, name: 'Alice', email: 'abc@gmail.com', age: 25, role: "Developer", status: "A" },
        { id: 2, name: 'Bob', email: 'xyz@gmail.com', age: 32, role: "Designer", status: "I" },
        { id: 3, name: 'Calvin', email: 'cal@gmail.com', age: 26, role: "Marketing", status: "A" },
        { id: 4, name: 'Dennis', email: 'dennabc@gmail.com', age: 45, role: "Developer", status: "I" },
        { id: 5, name: 'Emily', email: 'em@gmail.com', age: 34, role: "Designer", status: "A" },
        { id: 6, name: 'Ferb', email: 'fer@gmail.com', age: 29, role: "Marketing", status: "I" },
        { id: 7, name: 'Gavin', email: 'gav@gmail.com', age: 35, role: "Developer", status: "A" },
        { id: 8, name: 'Hermione', email: 'hermy@gmail.com', age: 24, role: "Designer", status: "I" }]);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  const pageSize = 5;

  let filteredUsers = users;

  // SERACH
  if (query && query.search.length > 0) {
    filteredUsers = [...filteredUsers].filter(user =>
      user.name.toLowerCase().includes(query.search.toLowerCase()) ||
      user.email.toLowerCase().includes(query.search.toLowerCase())
    );
  }

  if (query && query.role && query.role !== "all") {
    filteredUsers = [...filteredUsers].filter(user => user.role === query.role);
  }

  if (query && query.status && query.status !== "all") {
    filteredUsers = [...filteredUsers].filter(user => user.status === query.status);
  }

  // SORT
  if (query && query.sortBy) {
    filteredUsers = [...filteredUsers].sort((a, b) => {
      if (a[query.sortBy] < b[query.sortBy]) return query.sortOrder === "asc" ? -1 : 1;
      if (a[query.sortBy] > b[query.sortBy]) return query.sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }

  const totalPages = Math.ceil(filteredUsers.length / pageSize);


  // PAGINATE
  if (query && query.page) {
    const startIndex = (query.page - 1) * pageSize;
    filteredUsers = [...filteredUsers].slice(
      startIndex,
      startIndex + pageSize
    );
  }
  return (
    <>
      <TopBar query={query} setQuery={setQuery} />
      <div className="dash">
        <div className="left-panel">
        <FilterPanel query={query} setQuery={setQuery} />
        <AddUserModal setUsers={setUsers} />
        </div>
        <UsersTable query={query} setQuery={setQuery} users={filteredUsers} />
      </div>
      <Pagination query={query} totalPages={totalPages} setQuery={setQuery} />
    </>
  );
}
