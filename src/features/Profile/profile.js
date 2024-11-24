import React, { useState } from "react";

import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/Profile/Navbar.css';
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/Profile/profile.css';

import Navbar from "../MainPage/Navbar";
function App() {
  const [profile, setProfile] = useState({
    name: "Ernazara",
    job: "Engineer",
    location: "New York, USA",
    email: "ernazar@gmali.com",
    experience: "0 years",
    skills: ["JavaScript", "React", "Node.js"],
    education: "B.Sc in Computer Science",
    createdAt: "2024-11-01",
    employer: "false",
    image:
      "https://userpic.codeforces.org/3565984/title/a7b35c21cd84f926.jpg",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setProfile(newProfile);
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <header className="profile-header">
          <img
            src={isEditing ? newProfile.image : profile.image}
            alt="Profile"
            className="profile-image"
          />
          {!isEditing ? (
            <>
              <h1>{profile.name}</h1>
              <p>{profile.job}</p>
              <p>{profile.location}</p>
            </>
          ) : (
            <>
              <input
                type="text"
                name="name"
                value={newProfile.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="job"
                value={newProfile.job}
                onChange={handleInputChange}
                placeholder="Job"
              />
              <input
                type="text"
                name="location"
                value={newProfile.location}
                onChange={handleInputChange}
                placeholder="Location"
              />
              <input
                type="text"
                name="image"
                value={newProfile.image}
                onChange={handleInputChange}
                placeholder="Image URL"
              />
            </>
          )}
        </header>
        <section className="profile-details">
          <h2>About</h2>
          {!isEditing ? (
            <>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Experience:</strong> {profile.experience}</p>
              <p><strong>Skills:</strong> {profile.skills.join(", ")}</p>
              <p><strong>Education:</strong> {profile.education}</p>
              <p><strong>Created At:</strong> {profile.createdAt}</p>
              <p><strong>Employer:</strong> {profile.employer}</p>
            </>
          ) : (
            <>
              <input
                type="text"
                name="email"
                value={newProfile.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="experience"
                value={newProfile.experience}
                onChange={handleInputChange}
                placeholder="Experience"
              />
              <input
                type="text"
                name="skills"
                value={newProfile.skills.join(", ")}
                onChange={(e) =>
                  setNewProfile({
                    ...newProfile,
                    skills: e.target.value.split(",").map((s) => s.trim()),
                  })
                }
                placeholder="Skills (comma-separated)"
              />
              <input
                type="text"
                name="education"
                value={newProfile.education}
                onChange={handleInputChange}
                placeholder="Education"
              />
              <input
                type="text"

name="employer"
                value={newProfile.employer}
                onChange={handleInputChange}
                placeholder="Employer"
              />
            </>
          )}
        </section>
        {!isEditing ? (
          <button className="edit-button" onClick={handleEdit}>
            Edit Profile
          </button>
        ) : (
          <button className="edit-button" onClick={handleSave}>
            Save Changes
          </button>
        )}
      </div>
    </>
  );
}

export default App;