

export default function UserTable({ query, setQuery, users }) {

  

  return (
    <>
    {!users || users.length === 0 ? (<div>Loading Users</div>) : null}
    {users && (<div className="user-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => setQuery({ ...query, sortBy: 'id' })}>ID</th>
            <th onClick={() => setQuery({ ...query, sortBy: 'name' })}>Name</th>
            <th onClick={() => setQuery({ ...query, sortBy: 'email' })}>E-mail</th>
            <th onClick={() => setQuery({ ...query, sortBy: 'age' })}>Age</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
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
    </div>)}
    </>
  );
}
