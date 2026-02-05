import React, { useState } from "react";
import FilterPanel from "./FilterPanel";
import UsersTable from "./UsersTable";

function Workspace() {
  const [query, setQuery] = useState({
    search: "",
    role: "all",
    sortBy: "name",
    sortOrder: "asc",
    page: 1
  });

  users= [
      { id: 1, name: 'Alice', email: 'abc@gmail.com', age: 25 },
      { id: 2, name: 'Bob', email: 'xyz@gmail.com', age: 32 },
      { id: 3, name: 'Calvin', email: 'cal@gmail.com', age: 26 },
      { id: 4, name: 'Dennis', email: 'dennabc@gmail.com', age: 45 },
      { id: 5, name: 'Emily', email: 'em@gmail.com', age: 34 },
      { id: 6, name: 'Ferb', email: 'fer@gmail.com', age: 29 },
      { id: 7, name: 'Gavin', email: 'gav@gmail.com', age: 35 },
      { id: 8, name: 'Hermione', email: 'hermy@gmail.com', age: 24 }]

  return (
    <>
      <FilterPanel query={query} setQuery={setQuery} />
      <UsersTable query={query} setQuery={setQuery} users={users}/>
    </>
  );
}
