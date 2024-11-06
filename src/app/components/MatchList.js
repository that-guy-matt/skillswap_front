"use client";

import { useState, useEffect } from "react";
import Api from '../Api';

const MatchList = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [skills, setSkills] = useState();

  // fetch data when component loads
  useEffect(() => {
    fetchSkills();
    fetchUsers();
  }, []);

  const fetchSkills = () => {
    Api.Skills.get()
      .then((response) => {
        setSkills(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setError(err.message);
      });
  }

  const fetchUsers = () => {
    Api.Users.get()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setError(err.message);
      });
  }

  if (!users || !skills) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>Skills</th>
          <th>Learning</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) =>
          <tr key={user.id}>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.user_skills.map((userSkill) => skills.find((skill) => skill.id === userSkill.skill_id)?.name).join(', ')}</td>
            <td>{user.searching_skills.map((searchingSkill) => skills.find((skill) => skill.id === searchingSkill.skill_id)?.name).join(', ')}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MatchList;