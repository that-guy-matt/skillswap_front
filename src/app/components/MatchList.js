"use client";

import { useState, useEffect } from "react";
import Api from '../Api';

const MatchList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch data when component loads
  useEffect(() => {

    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Api.Users.get()
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setError(err.message);
        setLoading(false);
      });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) =>
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MatchList;