import { useState } from "react";

export default function UserTable({ query, setQuery, users }) {

  let filteredUsers = users;

  // FILTER
  if(query && query.search.length > 0){
   filteredUsers = [...filteredUsers].filter(user =>
    user.name.toLowerCase().includes(query.search.toLowerCase()) ||
    user.email.toLowerCase().includes(query.search.toLowerCase())
  );
  }

  if(query && query.role && query.role !== "all"){
    filteredUsers = [...filteredUsers].filter(user => user.role === query.role);
  }

  if(query && query.status && query.status !== "all"){
    filteredUsers = [...filteredUsers].filter(user => user.status === query.status);
  }

  // SORT
  if(query && query.sortBy){
    filteredUsers = [...filteredUsers].sort((a, b) => {
      if (a[query.sortBy] < b[query.sortBy]) return query.sortOrder === "asc" ? -1 : 1;
      if (a[query.sortBy] > b[query.sortBy]) return query.sortOrder === "asc" ? 1 : -1;
      return 0;
    });
}
  

//   // PAGINATE
//   if(query && query.page){
//   const startIndex = (currentPage - 1) * pageSize;
//   const paginatedUsers = sortedUsers.slice(
//     startIndex,
//     startIndex + pageSize
//   );
// }

//   const totalPages = Math.ceil(sortedUsers.length / pageSize);

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => setQuery({ ...query, sortBy: 'id' })}>ID</th>
            <th onClick={() => setQuery({ ...query, sortBy: 'name' })}>Name</th>
            <th onClick={() => setQuery({ ...query, sortBy: 'email' })}>E-mail</th>
            <th>Role</th>
            <th>Status</th>
            <th onClick={() => setQuery({ ...query, sortBy: 'age' })}>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
              <td>{user.status === "A" ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
}
