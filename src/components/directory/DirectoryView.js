import React from 'react';
import Table from "react-bootstrap/Table";

function DirectoryView({users}) {
  console.log(users);
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

      {users.map((user) => {
        return (<tr key={user.login.username}>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.login.username}</td>
          <td>{user.email}</td>
          <td><img src={user.picture.thumbnail} /></td>
        </tr>)
      })}

      </tbody>
    </Table>
  )
}

export default DirectoryView;