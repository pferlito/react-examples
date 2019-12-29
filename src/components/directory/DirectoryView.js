import React from 'react';
import Table from "react-bootstrap/Table";


export function filterUsers(users, search) {
  let filteredUsers;
  if (search) {
    filteredUsers = users.filter((user) => {
      let info = user.name.first +
        user.name.last +
        user.login.username +
        user.email;
      return info.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    filteredUsers = users;
  }
  return filteredUsers;
}

/**
 * Display a view of users.
 * @param users
 */
export function DirectoryView({users}) {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Photo</th>
      </tr>
      </thead>
      <tbody>

      {users.map((user) => (
        <tr key={user.login.username}>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.login.username}</td>
          <td>{user.email}</td>
          <td><img src={user.picture.thumbnail} alt={user.login.username}/></td>
        </tr>)
      )}
      </tbody>
    </Table>
  )
}

