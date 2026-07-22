import React from "react";

function UserData({ users }) {
  return (
    <>
      <div className="table-container">
        <h1>Users Data Table</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
              <th>Role</th>
            </tr>
          </thead>

          {users.map((e, i) => (
            <tbody>
              <tr key={i}>
                <td> {e.id} </td>
                <td> {e.name} </td>
                <td> {e.email} </td>
                <td> {e.age} </td>
                <td> {e.city} </td>
                <td> {e.role} </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default UserData;
