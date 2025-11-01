import { useEffect, useState } from "react";
import API from "../api/api";
import "../App.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await API.get("accounts/profile/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <div className="loading">Loading profile...</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>👤 Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Phone:</strong> {user.phone_number}</p>
      </div>
    </div>
  );
}

export default Profile;
