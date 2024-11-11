"use client";

import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Header from "../components/Header.js";
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import Api from '../Api.js';

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;

const ProfilePage = () => {
  const [user, setUser] = useState();
  // const [bio, setBio] = useState("This is a sample bio");
  const [skillsToLearn, setSkillsToLearn] = useState("");
  const [skillsToTeach, setSkillsToTeach] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {

    if (localStorage.getItem("Auth-Token")) {
      fetchUser();
    }
  }, []);


  const fetchUser = () => {
    Api.Profile.get().then((res) => {
      setUser(res.data);
    })
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <Header />
      <div className="container mt-5">
        <h2 className="mb-4 display-4">Profile</h2>
        <Tabs defaultActiveKey="personal" id="profile-tabs" className="mb-3">

          {/* Personal Info Tab */}
          <Tab eventKey="personal" title="Personal Info">
            <div className="p-3">
              <p><strong>First Name:</strong> {user.first_name}</p>
              <p><strong>Last Name:</strong> {user.last_name}</p>
              <p><strong>Bio:</strong> {user.bio}</p>

            </div>
          </Tab>

          {/* Skills Settings Tab */}
          <Tab eventKey="skills" title="Skills Settings">
            <div className="p-3">
              <Form>
                <Form.Group controlId="skillsToTeach">
                  <Form.Label>Skills to Teach</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter skills you can teach"
                    value={skillsToTeach}
                    onChange={(e) => setSkillsToTeach(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="skillsToLearn" className="mt-3">
                  <Form.Label>Skills to Learn</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter skills you want to learn"
                    value={skillsToLearn}
                    onChange={(e) => setSkillsToLearn(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" className="mt-3">Save Skills</Button>
              </Form>
            </div>
          </Tab>

          {/* Contact Info Tab */}
          <Tab eventKey="contact" title="Email">
            <div className="p-3">
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </Tab>

          {/* Change Password Tab */}
          <Tab eventKey="password" title="Change Password">
            <div className="p-3">
              <Form>
                <Form.Group controlId="currentPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" placeholder="Current Password" required />
                </Form.Group>
                <Form.Group controlId="newPassword" className="mt-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" required />
                </Form.Group>
                <Form.Group controlId="confirmNewPassword" className="mt-3">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm New Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Change Password</Button>
              </Form>
            </div>
          </Tab>

        </Tabs>
      </div>
    </main>
  );
};

export default ProfilePage;