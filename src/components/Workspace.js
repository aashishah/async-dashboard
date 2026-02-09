import React, { useState } from "react";
import FilterPanel from "./FilterPanel";
import UsersTable from "./UsersTable";
import TopBar from "./TopBar";
import Pagination from "./Pagination";

export default function Workspace() {
  const [query, setQuery] = useState({
    search: "",
    role: "all",
    status: "all",
    sortBy: "name",
    sortOrder: "asc",
    page: 1,
    totalPages: 1
  });

  const users= [
      { id: 1, name: 'Alice', email: 'abc@gmail.com', age: 25, role: "Developer", status: "A" },
      { id: 2, name: 'Bob', email: 'xyz@gmail.com', age: 32, role: "Designer", status: "I" },
      { id: 3, name: 'Calvin', email: 'cal@gmail.com', age: 26,   role: "Marketing", status: "A" },
      { id: 4, name: 'Dennis', email: 'dennabc@gmail.com', age: 45,   role: "Developer", status: "I" },
      { id: 5, name: 'Emily', email: 'em@gmail.com', age: 34,  role: "Designer", status: "A" },
      { id: 6, name: 'Ferb', email: 'fer@gmail.com', age: 29, role: "Marketing", status: "I" },
      { id: 7, name: 'Gavin', email: 'gav@gmail.com', age: 35, role: "Developer", status: "A" },
      { id: 8, name: 'Hermione', email: 'hermy@gmail.com', age: 24, role: "Designer", status: "I" },]

    const pageSize = 3;

  return (
    <>
    <TopBar query={query} setQuery={setQuery} />
    <div className="dash">
      <FilterPanel query={query} setQuery={setQuery} />
      <UsersTable query={query} setQuery={setQuery} users={users}/>
      </div>
      {/* <Pagination query={query} setQuery={setQuery} totalPages={1} pageSize = {pageSize} /> */}
    </>
  );
}
